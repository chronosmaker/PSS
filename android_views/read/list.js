import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

class list extends Component {
  render() {
    return (
      <View>
        <Text style={styles.text}>
          列表
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 60
  }
});

module.exports = list;
