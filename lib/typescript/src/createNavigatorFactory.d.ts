import * as React from 'react';
import { NavigationState } from '@react-navigation/routers';
import { TypedNavigator, EventMapBase } from './types';
/**
 * Higher order component to create a `Navigator` and `Screen` pair.
 * Custom navigators should wrap the navigator component in `createNavigator` before exporting.
 *
 * @param Navigator The navigtor component to wrap.
 * @returns Factory method to create a `Navigator` and `Screen` pair.
 */
export default function createNavigatorFactory<State extends NavigationState, ScreenOptions extends object, EventMap extends EventMapBase, NavigatorComponent extends React.ComponentType<any>>(Navigator: NavigatorComponent): <ParamList extends Record<string, object | undefined>>() => TypedNavigator<ParamList, State, ScreenOptions, EventMap, NavigatorComponent>;
