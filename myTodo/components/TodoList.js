import React from 'react';
import { TextInput, Text, View } from 'react-native';

export default class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todoText: 'Please add todo',
        };
    }
    render() {
        return (
            <View>
                <Text>Hello world!</Text>
            </View>
        );
    }
}