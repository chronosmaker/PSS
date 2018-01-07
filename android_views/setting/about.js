import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

class AboutPage extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.title
  });
  
  render() {
    return (
      <View>
        <Text style={styles.text}>
          关于
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

module.exports = AboutPage;
