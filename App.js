import React, {Component} from 'react';
import TabNavigator from 'react-native-tab-navigator';
import Icon from 'react-native-vector-icons/FontAwesome'

import {px2dp} from './utils/common';
import {systemColor} from './models/color';

import HomePage from './android_views/HomePage';
import ReadPage from './android_views/ReadPage';
import WeatherPage from './android_views/WeatherPage';
import SettingPage from './android_views/SettingPage';

export default class App extends Component {

  constructor() {
    super();
    this.state = {selectedTab: 'home'};
  }

  render() {
    return (
      <TabNavigator>
        <TabNavigator.Item
          title="地图"
          selectedTitleStyle={{color: systemColor.tabBar.selectedColor}}
          selected={this.state.selectedTab === 'home'}
          onPress={() => this.setState({selectedTab: 'home'})}
          renderIcon={() => <Icon name="map-marker" size={px2dp(22)} color={systemColor.tabBar.defaultColor}/>}
          renderSelectedIcon={() => <Icon name="map-marker" size={px2dp(22)} color={systemColor.tabBar.selectedColor}/>}>
          <HomePage/>
        </TabNavigator.Item>
        <TabNavigator.Item
          title="阅读"
          selectedTitleStyle={{color: systemColor.tabBar.selectedColor}}
          selected={this.state.selectedTab === 'read'}
          onPress={() => this.setState({selectedTab: 'read'})}
          renderIcon={() => <Icon name="book" size={px2dp(22)} color={systemColor.tabBar.defaultColor}/>}
          renderSelectedIcon={() => <Icon name="book" size={px2dp(22)} color={systemColor.tabBar.selectedColor}/>}>
          <ReadPage/>
        </TabNavigator.Item>
        <TabNavigator.Item
          title="天气"
          selectedTitleStyle={{color: systemColor.tabBar.selectedColor}}
          selected={this.state.selectedTab === 'weather'}
          onPress={() => this.setState({selectedTab: 'weather'})}
          renderIcon={() => <Icon name="cloud" size={px2dp(22)} color={systemColor.tabBar.defaultColor}/>}
          renderSelectedIcon={() => <Icon name="cloud" size={px2dp(22)} color={systemColor.tabBar.selectedColor}/>}>
          <WeatherPage/>
        </TabNavigator.Item>
        <TabNavigator.Item
          title="设置"
          selectedTitleStyle={{color: systemColor.tabBar.selectedColor}}
          selected={this.state.selectedTab === 'setting'}
          onPress={() => this.setState({selectedTab: 'setting'})}
          renderIcon={() => <Icon name="cogs" size={px2dp(22)} color={systemColor.tabBar.defaultColor}/>}
          renderSelectedIcon={() => <Icon name="cogs" size={px2dp(22)} color={systemColor.tabBar.selectedColor}/>}>
          <SettingPage/>
        </TabNavigator.Item>
      </TabNavigator>
    );
  }
}
