
import React, { Component } from 'react';
import { View
 
} from 'react-native';

import MatchList from './src/components/Match/MatchList';
import Header from './src/components/Header';



export default class App extends Component {
  render() {
    return (
      <View>
      <Header />
      <MatchList />
      </View>
      
    );
  }
}

