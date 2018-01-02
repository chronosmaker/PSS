import React, {PureComponent} from 'react';
import {StyleSheet, Text, View, Image, FlatList} from 'react-native';
import * as Util from '../../common/utils';

class ListItem extends PureComponent {

  // _onPress = () => {
  //   this.props.onPressItem(this.props.id);
  // };

  render() {
    return (
      <View style={styles.item}>
        <View>
          <Image source={{uri: 'https://imgsa.baidu.com/news/pic/item/96dda144ad34598212be136d07f431adcbef841d.jpg'}}/>
        </View>
        <View>
          <Text>{this.props.title}</Text>
          <Text>2017-12-12</Text>
        </View>
      </View>
    )
  }
}

class List extends PureComponent {

  static navigationOptions = ({navigation}) => ({
    title: navigation.state.params.title
  });

  constructor(props) {
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
      title={item.title}
      onPressItem={this._onPressItem}
      selected={!!this.state.selected.get(item.id)}
    />
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
    borderBottomWidth: 1
  }
});

module.exports = List;
