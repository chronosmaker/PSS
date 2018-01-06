import React, {PureComponent} from 'react';
import {StyleSheet, Text, View, Image, FlatList} from 'react-native';
import * as Util from '../../common/utils';

class ListItem extends PureComponent {
  // _onPress = () => {
  //   this.props.onPressItem(this.props.id);
  // };

  render () {
    return (
      <View style={styles.item}>
        <View>
          <Image style={styles.img} source={{uri: this.props.img}}/>
        </View>
        <View style={styles.text_wraper}>
          <Text style={styles.title} numberOfLines={1}>{this.props.title}</Text>
          <Text style={styles.time}>{this.props.time}</Text>
        </View>
      </View>
    )
  }
}

class List extends PureComponent {
  static navigationOptions = ({navigation}) => ({
    title: navigation.state.params.title
  });

  constructor (props) {
    super(props);
    this.state = {
      data: [],
      url: props.navigation.state.params.url,
      selected: (new Map(): Map<string, boolean>)
    };
  }

  _keyExtractor = (item, index) => item.id;

  _onPressItem = (id) => {
    // updater functions are preferred for transactional updates
    // this.setState((state) => {
    //   // copy the map rather than modifying state.
    //   const selected = new Map(state.selected);
    //   selected.set(id, !selected.get(id)); // toggle
    //   return {selected};
    // });
  };

  _renderItem = ({item}) => (
    <ListItem
      id={item.id}
      img={item.img}
      time={item.time}
      title={item.title}
      onPressItem={this._onPressItem}
      selected={!!this.state.selected.get(item.id)}/>
  );

  render () {
    return (
      <FlatList
        data={this.state.data}
        extraData={this.state}
        keyExtractor={this._keyExtractor}
        renderItem={this._renderItem}
      />
    );
  }

  componentDidMount () {
    Util.get(this.state.url,
      data => {
        if (data.status === 1) {
          console.log(data.data)
          this.setState({data: data.data});
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
