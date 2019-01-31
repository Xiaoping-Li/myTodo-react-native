import React from 'react';
import { View, Text, Button, Switch, StyleSheet } from 'react-native';

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
            <View style={styles.container}>
                {/* <Switch /> */}
                <Text>{this.props.todo}</Text>
                <Button
                    title="Delete" 
                    onPress={this.handleDelete}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
    }, 
});