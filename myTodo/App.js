import React from 'react';
import { Text, View } from 'react-native';
import Todo from './components/Todo';

export default class App extends React.Component {
  render() {
    return (
      <View>
        <Text>My Todos</Text>
        <Todo />
      </View>
    );
  }
}

