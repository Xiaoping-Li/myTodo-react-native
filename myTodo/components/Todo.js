import React from 'react';
import { View, Text } from 'react-native';

export default class Todo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            complete: false,
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