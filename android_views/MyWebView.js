import React, { Component } from 'react';
import { StyleSheet, Text, View, WebView } from 'react-native';

class MyWebView extends Component {

  constructor(props) {
    super(props);
    this.state = {
      uri: this.props.uri,
      isError: false
    };
  }

  render() {
    return (
      <View style={styles.container}>
        {
          this.state.isError ?
            <View style={styles.errorInfo}>
              <Text style={styles.text}>网络有问题，请检查网络情况...</Text>
            </View>
            :
            <WebView source={{ uri: this.state.uri }}
              startInLoadingState={true}
              onError={this._showError.bind(this)} />
        }
      </View>
    );
  }

  _showError() {
    this.setState({ isError: true });
  }
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  errorInfo: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold'
  }
});

module.exports = MyWebView;
