import * as React from 'react';
import { Text, TextProps, Platform } from 'react-native';
import preventLinkClickDefault from './preventLinkClickDefault';
import useLinkTo from './useLinkTo';

type Props = {
  to: string;
  target?: string;
} & (TextProps & { children: React.ReactNode });

export default function Link({ to, children, ...rest }: Props) {
  const linkTo = useLinkTo();

  const onPress = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if ('onPress' in rest) {
      // @ts-ignore
      rest.onPress?.(e);
    }

    const defaultPrevented = preventLinkClickDefault(e, rest.target);

    if (defaultPrevented) {
      linkTo(to);
    }
  };

  const props = {
    href: to,
    accessibilityRole: 'link' as const,
    ...Platform.select({
      web: { onClick: onPress } as any,
      default: { onPress },
    }),
    ...rest,
  };

  return <Text {...props}>{children}</Text>;
}
