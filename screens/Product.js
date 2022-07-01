import React, { Component } from 'react';
import { Text, Image, StyleSheet, View, TouchableOpacity } from 'react-native';
import { BASE_URL } from '../screens/config'

const styles = StyleSheet.create({
    container:
    {

    },
    button: {
        height: 42,
        width: '33.33333333333%',
        position: 'relative',
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
        backgroundColor: "green",
        borderRadius: 42,
        paddingtop: 20,
        paddingleft: 50,
        position: 'absolute',


    },
});
export default class Product extends Component {


    constructor(props) {
        super(props)
        this.state = {
            data: []

        }
    }
    apihandler = () => {
        //const url = "https://jsonplaceholder.typicode.com/photos?_limit=3"
        // const url = "https://krushidhan-app.herokuapp.com/seller/register"
        const url = BASE_URL + "/seller/view"
        fetch(url).then((res) => res.json())
            .then((resJson) => {
                console.log("RES AFTER api call ==> ", resJson)
                // alert(JSON.stringify(resJson))
                this.setState({ data: resJson })
            })
    }
    render() {
        const { data } = this.state
        return (
            <View style={styles.container}>
                {
                    data.map((item, index) => {
                        return (
                            <View style={{ height: 82, width: 400, justifyContent: "center", alignItems: "center" }} >
                                {/* <Image source={{ url: item.thumbnailUrl }} style={{ height: 82, width: 400 }} /> */}
                                <Text>{item.first_name}</Text>
                                {/* <Text>{item.last_name}</Text>
                                <Text>{item.mobile_number}</Text> */}
                            </View>
                        )
                    })
                }
                <TouchableOpacity
                    onPress={this.apihandler}
                    style={styles.button}><Text>pull data</Text>
                    {/* <Image source={require('/home/hppc/Desktop/App/assets/pulses-1024x768-1.jpg')}></Image> */}
                </TouchableOpacity>
                <Image style={{ position: 'absolute', height: 150, width: '33.33333%' }} source={require('/home/hppc/Desktop/App/assets/pulses-1024x768-1.jpg')}></Image>
            </View>
        )
    }
}
