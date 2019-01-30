import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import TodoList from './components/TodoList';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>My Todos</Text>
        <TodoList />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
  },
  title: {
    fontSize: 40,
    marginBottom: 40,
    textAlign: 'center',
  }
});