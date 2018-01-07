import React from 'react';
import { TabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome'

import { tabBarColor } from './models/color';

import HomePage from './android_views/HomePage';
import ReadPage from './android_views/ReadPage';
import WeatherPage from './android_views/WeatherPage';
import SettingPage from './android_views/SettingPage';

const RouteConfigs = {
  Home: {
    screen: HomePage, navigationOptions: {
      title: '地图',
      tabBarIcon: ({ tintColor }) => <Icon name='map-marker' size={18} color={tintColor} />
    }
  },
  Read: {
    screen: ReadPage, navigationOptions: {
      title: '阅读',
      tabBarIcon: ({ tintColor }) => <Icon name='book' size={18} color={tintColor} />
    }
  },
  Weather: {
    screen: WeatherPage, navigationOptions: {
      title: '天气',
      tabBarIcon: ({ tintColor }) => <Icon name='cloud' size={18} color={tintColor} />
    }
  },
  Setting: {
    screen: SettingPage, navigationOptions: {
      title: '设置',
      tabBarIcon: ({ tintColor }) => <Icon name='cogs' size={18} color={tintColor} />
    }
  },
};

const TabNavigatorConfig = {
  tabBarPosition: 'bottom',
  animationEnabled: true,
  tabBarOptions: {
    activeTintColor: tabBarColor.selected,
    inactiveTintColor: tabBarColor.primary,
    pressColor: tabBarColor.press,
    showIcon: true,
    indicatorStyle: { display: 'none' },
    labelStyle: { margin: 0, fontSize: 12 },
    tabStyle: { padding: 0, paddingTop: 0 },
    style: { backgroundColor: tabBarColor.background },
  },
};

module.exports = TabNavigator(RouteConfigs, TabNavigatorConfig);
