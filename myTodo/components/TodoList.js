import React from 'react';
import { TextInput, Text, View } from 'react-native';

export default class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [],
            newTodo: '',
        };
    }

    handleInput = (newTodo) => this.setState({newTodo});

    



    render() {
        return (
            <View>
                <Text>Add Todo here</Text>
                <TextInput
                onChangeText={this.handleInput} 
                value={this.state.newTodo}
                />
            </View>
            
        );
    }
}