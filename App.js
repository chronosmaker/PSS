import React, {Component} from 'react';
import TabNavigator from 'react-native-tab-navigator';
import Icon from 'react-native-vector-icons/FontAwesome'

import {px2dp} from './common/utils';
import {tabBarColor} from './models/color';

import HomePage from './android_views/HomePage';
import ReadPage from './android_views/ReadPage';
import WeatherPage from './android_views/WeatherPage';
import SettingPage from './android_views/SettingPage';

const page = {
  home: {id: 1, title: '地图', icon: 'map-marker'},
  reader: {id: 2, title: '阅读', icon: 'book'},
  weather: {id: 3, title: '天气', icon: 'cloud'},
  setting: {id: 4, title: '设置', icon: 'cogs'}
};

export default class App extends Component {

  constructor() {
    super();
    this.state = {selectedTab: page.home.id};
  }

  render() {
    return (
      <TabNavigator>
        <TabNavigator.Item
          title={page.home.title}
          selectedTitleStyle={{color: tabBarColor.selected}}
          selected={this.state.selectedTab === page.home.id}
          onPress={() => this.setState({selectedTab: page.home.id})}
          renderIcon={() => <Icon name={page.home.icon} size={px2dp(22)} color={tabBarColor.primary}/>}
          renderSelectedIcon={() => <Icon name={page.home.icon} size={px2dp(22)} color={tabBarColor.selected}/>}>
          {this._renderView(page.home.id)}
        </TabNavigator.Item>
        <TabNavigator.Item
          title={page.reader.title}
          selectedTitleStyle={{color: tabBarColor.selected}}
          selected={this.state.selectedTab === page.reader.id}
          onPress={() => this.setState({selectedTab: page.reader.id})}
          renderIcon={() => <Icon name={page.reader.icon} size={px2dp(22)} color={tabBarColor.primary}/>}
          renderSelectedIcon={() => <Icon name={page.reader.icon} size={px2dp(22)} color={tabBarColor.selected}/>}>
          {this._renderView(page.reader.id)}
        </TabNavigator.Item>
        <TabNavigator.Item
          title={page.weather.title}
          selectedTitleStyle={{color: tabBarColor.selected}}
          selected={this.state.selectedTab === page.weather.id}
          onPress={() => this.setState({selectedTab: page.weather.id})}
          renderIcon={() => <Icon name={page.weather.icon} size={px2dp(22)} color={tabBarColor.primary}/>}
          renderSelectedIcon={() => <Icon name={page.weather.icon} size={px2dp(22)} color={tabBarColor.selected}/>}>
          {this._renderView(page.weather.id)}
        </TabNavigator.Item>
        <TabNavigator.Item
          title={page.setting.title}
          selectedTitleStyle={{color: tabBarColor.selected}}
          selected={this.state.selectedTab === page.setting.id}
          onPress={() => this.setState({selectedTab: page.setting.id})}
          renderIcon={() => <Icon name={page.setting.icon} size={px2dp(22)} color={tabBarColor.primary}/>}
          renderSelectedIcon={() => <Icon name={page.setting.icon} size={px2dp(22)} color={tabBarColor.selected}/>}>
          {this._renderView(page.setting.id)}
        </TabNavigator.Item>
      </TabNavigator>
    );
  }

  _renderView(id) {
    switch (id) {
      case page.reader.id:
        return <ReadPage/>;
      case page.weather.id:
        return <WeatherPage/>;
      case page.setting.id:
        return <SettingPage/>;
      case page.home.id:
      default:
        return <HomePage/>;
    }
  }
}
