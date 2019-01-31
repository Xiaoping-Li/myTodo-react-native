import React from 'react';
import { View, Text, Button, } from 'react-native';

export default class Todo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            complete: false,
        };
    }

    handleDelete = () => {
        const idx = this.props.index;
        this.props.onDelete(idx);
    }


    render() {
        return (
            <View>
                <Text>{this.props.todo}</Text>
                <Button
                    title="Delete" 
                    onPress={this.handleDelete}
                />
            </View>
        );
    }
}