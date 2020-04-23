/// <reference types="react" />
import { TabNavigationState } from '@react-navigation/native';
import { MaterialTopTabDescriptorMap, MaterialTopTabNavigationConfig, MaterialTopTabNavigationHelpers } from '../types';
declare type Props = MaterialTopTabNavigationConfig & {
    state: TabNavigationState;
    navigation: MaterialTopTabNavigationHelpers;
    descriptors: MaterialTopTabDescriptorMap;
    tabBarPosition?: 'top' | 'bottom';
};
export default function MaterialTopTabView({ pager, lazyPlaceholder, tabBar, tabBarOptions, state, navigation, descriptors, sceneContainerStyle, ...rest }: Props): JSX.Element;
export {};
