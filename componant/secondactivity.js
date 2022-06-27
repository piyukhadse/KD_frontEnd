import React, { Component } from 'react';
import { Text, View, ImageBackground } from 'react-native';
import StyleSheet from "../componant/style";

export default class SecondActivity extends Component {
    static navigationOptions =
        {
            title: 'SecondActivity',
        };

    render() {
        let pic = { //Here create the reference for bgimage.
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE38BaBc_Bhlzw5DelUCKY9Q_nZTZ5Yq9wbxKFrC92g7Q3dC4qeQ'
        };

        return (
            <ImageBackground style={StyleSheet.imgBackground} //Here its working with parent div.
                resizeMode='cover'
                source={pic}>

                <View style={StyleSheet.container}>
                    <Text style={StyleSheet.ActivityNameTextCss}> SecondActivity </Text>
                </View>

            </ImageBackground>

        );
    }
}
