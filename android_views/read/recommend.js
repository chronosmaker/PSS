import React, {Component} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {size} from '../../common/utils';

class recommend extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: props.name,
      data: props.data
    };
  }

  render() {
    const data = this.state.data;
    let views1 = [];
    let views2 = [];
    for (let i in data) {
      const item = (
        <View style={styles.img_item} key={i}>
          <Image style={[styles.img, styles.shadow]} resizeMode='cover' source={{uri: data[i].img}}/>
          <Text style={styles.text_topic} numberOfLines={2}>{data[i].title}</Text>
        </View>
      );
      if (i < 4) {
        views1.push(item);
      } else {
        views2.push(item);
      }
    }
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{this.state.name}</Text>
        <View style={styles.img_view}>
          {views1}
        </View>
        <View style={styles.img_view}>
          {views2}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 10
  },
  text: {
    color: '#5e5e5e',
    marginBottom: 5,
    fontSize: 16
  },
  img_view: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  img_item: {
    flex: 1,
    height: 160
  },
  img: {
    width: (size.width - 50) / 4,
    height: 120,
  },
  text_topic: {
    width: (size.width - 50) / 4,
    color: '#818181'
  },
  shadow: {
    shadowOpacity: 1,
    shadowColor: '#ccc',
    shadowOffset: {width: 1, height: 1}
  }
});

module.exports = recommend;
