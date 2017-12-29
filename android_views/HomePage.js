import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';

import MyWebView from './MyWebView';

const nearByURL = 'http://123.57.39.116:3000/html/nearby.html';

class HomePage extends Component {
  render() {
    return (
      <View style={styles.container}>
        <MyWebView uri='https://www.baidu.com'/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {flex: 1}
});

module.exports = HomePage;
