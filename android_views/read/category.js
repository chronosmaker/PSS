import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

class category extends Component {
  render() {
    return (
      <View>
        <Text style={styles.text}>
          分类
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

module.exports = category;
