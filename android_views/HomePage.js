import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';

import MyWebView from './MyWebView';

const nearByURL = 'http://27.191.227.24:8091/html/nearby.html';
// const nearByURL = 'https://www.baidu.com';

class HomePage extends Component {
  render() {
    return (
      <View style={styles.container}>
        <MyWebView uri={nearByURL}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {flex: 1}
});

module.exports = HomePage;
