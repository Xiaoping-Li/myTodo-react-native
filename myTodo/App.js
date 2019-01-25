import React from 'react';
import { Text, View } from 'react-native';
import TodoList from './components/TodoList';

export default class App extends React.Component {
  render() {
    return (
      <View>
        <Text>My Todos</Text>
        <TodoList />
      </View>
    );
  }
}

