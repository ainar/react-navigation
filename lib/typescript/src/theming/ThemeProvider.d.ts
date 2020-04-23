import * as React from 'react';
import { Theme } from '../types';
declare type Props = {
    value: Theme;
    children: React.ReactNode;
};
export default function ThemeProvider({ value, children }: Props): JSX.Element;
export {};
