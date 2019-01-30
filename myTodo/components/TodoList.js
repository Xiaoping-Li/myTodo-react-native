import React from 'react';
import { TextInput, Text, View, Button, StyleSheet } from 'react-native';
import Todo from './Todo.js';

export default class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [],
            newTodo: '',
        };
    }

    handleInput = (newTodo) => this.setState({newTodo});

    handleAddTodo = () => {
        this.state.todos.push(this.state.newTodo);
        this.setState({ newTodo: '' });
    }



    render() {
        
        return (
            <View style={styles.container}>
                <View style={styles.formContainer}>
                    <TextInput
                        onChangeText={this.handleInput} 
                        value={this.state.newTodo}
                        style={styles.input}
                    />
                
                    <Button
                        title="Add"
                        onPress={this.handleAddTodo}
                    />   
                </View>
                
                {this.state.todos.map(todo => <View><Todo todo={todo}/></View>)}   
            </View>
            
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
    },
    formContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    input: {
        height: 40,
        width: 300,
        borderColor: 'red',
        borderWidth: 2,
    },
});