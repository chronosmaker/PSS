import React, { PureComponent } from 'react';
import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity } from 'react-native';
import * as Util from '../../common/utils';

class ListItem extends PureComponent {
  _onPress = () => {
    this.props.onPressItem(this.props.title, this.props.url);
  };

  render() {
    return (
      <TouchableOpacity style={styles.item} onPress={this._onPress}>
        <View>
          <Image style={styles.img} source={{ uri: this.props.img }} />
        </View>
        <View style={styles.text_wraper}>
          <Text style={styles.title} numberOfLines={1}>{this.props.title}</Text>
          <Text style={styles.time}>{this.props.time}</Text>
        </View>
      </TouchableOpacity>
    )
  }
}

class List extends PureComponent {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.title
  });

  constructor(props) {
    super(props);
    this.state = {
      data: [],
      url: props.navigation.state.params.url,
      navi: props.navigation
    };
  }

  _keyExtractor = (item, index) => item.id;

  _onPressItem = (title, url) => {
    this.state.navi.navigate('MyWebView', { title: title, url: url });
  };

  _renderItem = ({ item }) => (
    <ListItem
      id={item.id}
      img={item.img}
      time={item.time}
      title={item.title}
      url={item.url}
      onPressItem={this._onPressItem} />
  );

  render() {
    return (
      <FlatList
        data={this.state.data}
        extraData={this.state}
        keyExtractor={this._keyExtractor}
        renderItem={this._renderItem}
      />
    );
  }

  componentDidMount() {
    Util.get(this.state.url,
      data => {
        if (data.status === 1) {
          this.setState({ data: data.data });
        }
      },
      err => console.log(err));
  }
}

const styles = StyleSheet.create({
  item: {
    height: 78,
    paddingLeft: 10,
    paddingRight: 10,
    borderBottomColor: '#EDEDED',
    borderBottomWidth: 1,
    flexDirection: 'row'
  },
  img: {
    marginTop: 6,
    width: 60,
    height: 60,
    borderRadius: 4
  },
  text_wraper: {
    marginLeft: 10,
    flex: 1
  },
  title: {
    marginTop: 10,
    fontSize: 16
  },
  time: {
    marginTop: 6,
    color: '#ddd',
    fontSize: 14
  }
});

module.exports = List;
