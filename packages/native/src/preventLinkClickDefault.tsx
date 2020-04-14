import * as React from 'react';
import { Platform, GestureResponderEvent } from 'react-native';

export default function preventLinkDefault(
  event: React.MouseEvent<any, MouseEvent> | GestureResponderEvent | undefined,
  target?: string
) {
  if (Platform.OS !== 'web' || !event) {
    return true;
  }

  if (
    !event.defaultPrevented && // onPress prevented default
    // @ts-ignore
    !(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey) && // ignore clicks with modifier keys
    // @ts-ignore
    (event.button == null || event.button === 0) && // ignore everything but left clicks
    (target == null || target === '_self') // let browser handle "target=_blank" etc.
  ) {
    event.preventDefault();
    return true;
  }

  return false;
}
