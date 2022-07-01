import React, { Component } from 'react'
import { View, StyleSheet, ImageBackground, Text, Image, Button, TouchableOpacity, NavigationActions, ScrollView } from 'react-native'
import { ScreenStackHeaderRightView } from 'react-native-screens'

const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
        backgroundColor: '#D5FFB5',
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
        top: 60,
        height: 42,
        width: '33.33333333333%',
        position: 'absolute',
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
        backgroundColor: "green",
        borderRadius: 42,
        paddingtop: 20,
        paddingleft: 50,
        borderWidth: 3,


    },
    bf: {
        top: 0,
        height: 42,
        width: 40,
        borderRadius: 50,
        backgroundColor: "green",
        paddingTop: 0,
        paddingRight: 5,






    },


});
// export default class Profile extends Component {


//     constructor(props) {
//         super(props)
//         this.state = {
//             data: []

//         }
//     }


const Profile = ({ navigation }) => {
    apihandler = () => {
        const url = "https://jsonplaceholder.typicode.com/photos?_limit=10"
        fetch(url).then((res) => res.json())
            .then((resJson) => {
                // alert(JSON.stringify(resJson))
                this.setState({ data: resJson })
            })

        // navigation.navigate('Product')
    }
    // render() {
    //     const { data } = this.state
    return (


        <ScrollView style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate('SellerLogin')}>
                <Image style={styles.bf} source={require('/home/hppc/Desktop/App/assets/seller.png')} />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('CustomerLogin')}>
                <Image style={styles.bf} source={require('/home/hppc/Desktop/App/assets/customer.png')} />
            </TouchableOpacity>

            <TouchableOpacity>
                <Image source={require('/home/hppc/Desktop/App/assets/vegetables-and-fruits-farmers-market.jpg')} />

            </TouchableOpacity>
            {/* <TouchableOpacity onPress={this.apihandler}> */}
            <TouchableOpacity onPress={() => navigation.navigate('Product')}>
                <Image style={styles.img2} source={require('/home/hppc/Desktop/App/assets/pulses-1024x768-1.jpg')} />
            </TouchableOpacity>
            <Image style={styles.img1} source={require('/home/hppc/Desktop/App/assets/download.jpeg')} />
            <Image style={styles.img2} source={require('/home/hppc/Desktop/App/assets/download.jpeg')} />
            <Image style={styles.img1} source={require('/home/hppc/Desktop/App/assets/download.jpeg')} />
            <Image style={styles.img2} source={require('/home/hppc/Desktop/App/assets/download.jpeg')} />
            <Image style={styles.img1} source={require('/home/hppc/Desktop/App/assets/download.jpeg')} />
            <Image style={styles.img2} source={require('/home/hppc/Desktop/App/assets/download.jpeg')} />
            <Image style={styles.img1} source={require('/home/hppc/Desktop/App/assets/download.jpeg')} />

            <TouchableOpacity
                onPress={this.apihandler}
                style={styles.button}><Text>pull data</Text>
            </TouchableOpacity>
        </ScrollView >

    );
}

export default Profile
