import React, {Component} from 'react';
import {StyleSheet, ScrollView, View, Button, Text} from 'react-native';
import {StackNavigator} from 'react-navigation';

import Category from './read/category';
import List from './read/list';
import Recommend from './read/recommend';
import Search from './read/search';
import Topic from './read/topic';

class Hr extends Component {
  render() {
    return (
      <View style={styles.hr}></View>
    );
  }
}

class DetailPage extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Chat with Lucy</Text>
      </View>
    );
  }
}

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShow: false
    };
  }

  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <Search/>
        <Hr/>
        {
          this.state.isShow ?
            <ScrollView style={styles.container}>
              <Topic/>
              <Hr/>
              <Recommend/>
              <Category/>
              <Recommend/>
              <View>
                <Button title="Chat with Lucy"
                        onPress={() => navigate('ReadDetail')}/>
              </View>
            </ScrollView>
            :
            null
        }
      </View>
    );
  }

  componentDidMount() {
    this.setState({isShow: true});
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
  ReadHome: {screen: HomePage, navigationOptions: {header: null}},
  ReadDetail: {screen: DetailPage, navigationOptions: {title: 'Chat with Lucy', headerStyle: {height: 40}}},
};

const StackNavigatorConfig = {
  cardStyle: {backgroundColor: '#fff'}
};

module.exports = StackNavigator(RouteConfigs, StackNavigatorConfig);
