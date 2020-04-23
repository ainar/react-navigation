/// <reference types="react" />
import { DefaultNavigatorOptions, TabRouterOptions, TabNavigationState } from '@react-navigation/native';
import { MaterialTopTabNavigationConfig, MaterialTopTabNavigationOptions, MaterialTopTabNavigationEventMap } from '../types';
declare type Props = DefaultNavigatorOptions<MaterialTopTabNavigationOptions> & TabRouterOptions & MaterialTopTabNavigationConfig;
declare function MaterialTopTabNavigator({ initialRouteName, backBehavior, children, screenOptions, ...rest }: Props): JSX.Element;
declare const _default: <ParamList extends Record<string, object | undefined>>() => import("@react-navigation/native").TypedNavigator<ParamList, TabNavigationState, MaterialTopTabNavigationOptions, MaterialTopTabNavigationEventMap, typeof MaterialTopTabNavigator>;
export default _default;
