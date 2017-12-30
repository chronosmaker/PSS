import React, {Component} from 'react';
import {StyleSheet, TextInput, View} from 'react-native';

class search extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TextInput style={styles.search_input}
                   placeholder='搜索'
                   underlineColorAndroid='transparent'/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 10
  },
  search_input: {
    padding: 0,
    height: 35,
    borderWidth: 1,
    borderColor: '#eee',
    paddingLeft: 5
  }
});

module.exports = search;
