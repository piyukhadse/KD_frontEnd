import React from 'react'
import {
    StyleSheet, View, Text, Image, Button, TouchableOpacity, NavigationActions, SafeAreaView,
    ActivityIndicator
} from 'react-native'

const Home = ({ navigation }) => {
    console.log("hello worlds")
    // componentDidMount() {
    //     setTimeOut(() => {
    //         NavigationActions.navigate('Profile');
    //     }, 5000);
    // }
    return (
        <View style={styles.container}>
            <Image source={require('/home/hppc/Desktop/App/assets/download.png')} />
            <Text style={{ fontSize: 20, fontWight: 'bold' }}>WELCOME TO</Text>
            <Text style={{ fontSize: 20, fontWight: 'bold' }}>KRUSHIDHAN</Text>
            <Button style={{ borderRadius: 42 }} color="green" onPress={() => navigation.navigate('Profile')} title='lets Start'></Button>
        </View >
    );
}
export default Home
const styles = StyleSheet.create({
    container: {
        flex: 8,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',

    },
    text: {
        fontWeight: 500,
    }
}

);



