import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import StyleSheet from "../componant/style"; //create custom cssScript


export default class MainActivity extends Component {
    static navigationOptions = {
        //set title on phonescreen on the top view.
        title: 'MainActivity',
    };

    OpenSecondActivityFunction = () =>
    //Its using for navigate second screen which is present on App.js.
    {
        this.props.navigation.navigate('Second');
    };

    render() {
        return (
            <View style={StyleSheet.container}>
                <Text style={StyleSheet.ActivityNameTextCss}> MainActivity </Text>
                <Button onPress={this.OpenSecondActivityFunction} title='Open Second Activity' />
            </View>
        );
    }
}