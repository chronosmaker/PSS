import React, {Component} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {size} from '../../common/utils';

class topic extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: props.data
    }
  }

  render() {
    let views = [];
    const data = this.state.data;
    for (let i in data) {
      views.push(
        <Image style={styles.img} key={i} resizeMode='cover' source={{uri: data[i].img}}/>
      );
    }
    return (
      <View style={styles.container}>
        <Text style={styles.text1}>推荐专题</Text>
        <View style={styles.img_view}>
          {views}
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
