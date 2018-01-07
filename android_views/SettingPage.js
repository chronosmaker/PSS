import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import { StackNavigator } from 'react-navigation';

import AboutPage from './setting/about';
import DetailPage from './setting/detail';
import TipsPage from './setting/tips';
import HelpPage from './setting/help';

class SettingPage extends Component {
  _onPressItem = (target, text) => {
    this.props.navigation.navigate(target, { title: text });
  };

  _renderItem = ({ item }) => (
    <TouchableOpacity style={styles.item} onPress={this._onPressItem.bind(this, item.target, item.text)}>
      <Text style={styles.text_item}>{item.text}</Text>
    </TouchableOpacity>
  );

  render() {
    return (
      <FlatList style={styles.container}
        data={[{ text: '关于', target: 'AboutPage' },
        { text: '详情', target: 'DetailPage' },
        { text: '提醒', target: 'TipsPage' },
        { text: '帮助', target: 'HelpPage' },]}
        renderItem={this._renderItem}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40
  },
  item: {
    height: 78,
    paddingLeft: 10,
    paddingRight: 10,
    borderBottomColor: '#EDEDED',
    borderBottomWidth: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  text_wraper: {
    marginLeft: 10,
    flex: 1
  },
  title: {
    marginTop: 10,
    fontSize: 16
  }
});

const RouteConfigs = {
  SettingPage: { screen: SettingPage, navigationOptions: { header: null } },
  AboutPage: { screen: AboutPage, navigationOptions: { headerStyle: { height: 40 } } },
  DetailPage: { screen: DetailPage, navigationOptions: { headerStyle: { height: 40 } } },
  TipsPage: { screen: TipsPage, navigationOptions: { headerStyle: { height: 40 } } },
  HelpPage: { screen: HelpPage, navigationOptions: { headerStyle: { height: 40 } } }
};

const StackNavigatorConfig = {
  cardStyle: { backgroundColor: '#fff' }
};

module.exports = StackNavigator(RouteConfigs, StackNavigatorConfig);
