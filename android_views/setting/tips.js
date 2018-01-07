import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

class TipsPage extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.title
  });
  
  render() {
    return (
      <View>
        <Text style={styles.text}>
          提示
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

module.exports = TipsPage;
