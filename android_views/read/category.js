import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {size} from '../../common/utils';

class category extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: props.data,
      navi: props.navi
    };
  }

  render() {
    const data = this.state.data;
    let views1 = [];
    let views2 = [];
    for (let i in data) {
      const item = (
        <TouchableOpacity style={styles.item} key={i} onPress={this._onPress.bind(this, data[i].text)}>
          <Text style={styles.text_item}>{data[i].text}</Text>
        </TouchableOpacity>
      );
      if (i < 2) {
        views1.push(item);
      } else {
        views2.push(item);
      }
    }
    return (
      <View style={styles.container}>
        <Text style={styles.text}>分类</Text>
        <View style={styles.row}>
          {views1}
        </View>
        <View style={styles.row}>
          {views2}
        </View>
      </View>
    );
  }

  _onPress(title) {
    this.state.navi.navigate('ReadList', {
      title: title, 
      url: `http://27.191.227.24:8091/data/read?type=${title}`
    });
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
  text_item: {
    color: '#818181',
    fontSize: 18
  },
  row: {
    marginTop: 5,
    marginBottom: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  item: {
    width: (size.width - 30) / 2,
    height: 54,
    borderColor: '#f0f0f0',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4
  }
});

module.exports = category;
