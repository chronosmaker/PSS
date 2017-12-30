import React, {Component} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {size} from '../../common/utils';

class topic extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text1}>推荐专题</Text>
        <View style={styles.img_view}>
          <Image style={styles.img}
                 resizeMode='cover'
                 source={{uri: 'https://imgsa.baidu.com/news/pic/item/96dda144ad34598212be136d07f431adcbef841d.jpg'}}/>
          <Image style={styles.img}
                 resizeMode='cover'
                 source={{uri: 'https://imgsa.baidu.com/news/pic/item/10dfa9ec8a136327107459cd9a8fa0ec09fac7b7.jpg'}}/>
        </View>
        <Text style={styles.text2}>查看更多 &gt;</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 10
  },
  img_view: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  img: {
    width: (size.width - 30) / 2,
    height: 75,
    borderRadius: 5
  },
  text1: {
    color: '#5e5e5e',
    marginBottom: 5,
    fontSize: 16
  },
  text2: {
    color: '#ccc',
    marginTop: 5,
    fontSize: 14
  }
});

module.exports = topic;
