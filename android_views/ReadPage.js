import React, { Component } from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import * as Util from '../common/utils';

import Recommend from './read/recommend';
import Category from './read/category';
import Search from './read/search';
import Topic from './read/topic';
import ReadList from './read/list';
import MyWebView from './MyWebView';

class Hr extends Component {
  render() {
    return (
      <View style={styles.hr}></View>
    );
  }
}

class ReadHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShow: false
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Search />
        <Hr />
        {
          this.state.isShow ?
            <ScrollView style={styles.container}>
              <Topic data={this.state.recommendTopic} />
              <Hr />
              <Recommend name='热门推荐' data={this.state.hotTopic} />
              <Hr />
              <Category data={this.state.category} navi={this.props.navigation} />
              <Hr />
              <Recommend name='清新一刻' data={this.state.other} />
            </ScrollView>
            :
            null
        }
      </View>
    );
  }

  componentDidMount() {
    Util.get('http://27.191.227.24:8091/data/read?type=config',
      data => {
        if (data.status === 1) {
          const obj = data.data;
          const hotTopic = obj.hotTopic;
          const recommendTopic = obj.recommendTopic;
          const other = obj.other;
          const category = obj.category;
          this.setState({
            isShow: true,
            hotTopic: hotTopic,
            recommendTopic: recommendTopic,
            other: other,
            category: category
          });
        }
      },
      err => console.log(err))
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  hr: {
    borderColor: '#f0f0f0',
    borderTopWidth: 1
  }
});

const RouteConfigs = {
  ReadHome: { screen: ReadHome, navigationOptions: { header: null } },
  ReadList: { screen: ReadList, navigationOptions: { headerStyle: { height: 40 } } },
  MyWebView: { screen: MyWebView, navigationOptions: { headerStyle: { height: 40 } } }
};

const StackNavigatorConfig = {
  cardStyle: { backgroundColor: '#fff' }
};

module.exports = StackNavigator(RouteConfigs, StackNavigatorConfig);
