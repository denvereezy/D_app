import React, {Component} from 'react';
import {AppRegistry, View} from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

export default class D_app extends Component {
  render() {
      return (
          <View>
              <Header headerText={'DMD app'}/>
              <AlbumList/>
          </View>
      );
  }
}

AppRegistry.registerComponent('D_app', () => D_app);
