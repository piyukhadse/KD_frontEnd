import React from 'react'
import { View, StyleSheet, ImageBackground, Text, Image, Button, TouchableOpacity, ScrollViewComponent } from 'react-native'
import { ScreenStackHeaderRightView } from 'react-native-screens'

const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
    },
    img1: {
        width: '33.333333333%',
        height: 150,
        top: 60,
        left: 25,
        resizeMode: 'contain',
        position: 'relative',
        bordercolor: 'green',
        resizeMode: 'cover',
        paddingtop: 20,
        paddingleft: 50,
        borderWidth: 3,

    },
    img2: {
        width: '33.3333333333%',
        height: 150,
        top: 60,
        left: 200,
        resizeMode: 'contain',
        bordercolor: 'green',
        resizeMode: 'cover',
        paddingtop: 20,
        paddingleft: 50,
        borderWidth: 3,

    },
    button: {
        top: 120,
        height: 42,
        width: 200,
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
        backgroundColor: "green",
        borderRadius: 42,


    },


});

const Profile = ({ }) => {
    apihandler = () => {
        const url = "https://jsonplaceholder.typicode.com/photos?_limit=10"
        fetch(url).then((res) => res.json())
            .then((resJson) => {
                alert(JSON.stringify(resJson))
            })
    }


    return (


        <View style={styles.container}>

            <Image style={styles.img1} source={require('/home/hppc/Desktop/App/assets/vegetables-and-fruits-farmers-market.jpg')} />

            <Image style={styles.img2} source={require('/home/hppc/Desktop/App/assets/pulses-1024x768-1.jpg')} />
            <TouchableOpacity
                onPress={this.apihandler}
                style={styles.button}><Text>pull data</Text></TouchableOpacity>
        </View>

    );
}


export default Profile
