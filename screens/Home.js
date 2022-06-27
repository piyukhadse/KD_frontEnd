import React from 'react'
import {
    StyleSheet, View, Text, Image, Button, SafeAreaView,
    ActivityIndicator
} from 'react-native'






const Home = ({ navigation }) => {
    return (
        <View style={styles.container}>

            <Image source={require('/home/hppc/Desktop/App/assets/download.png')} />
            <Text style={styles.text}>WELCOME TO</Text>
            <Text style={styles.text}>KRUSHIDHAN</Text>
            <Button color="green" onPress={() => navigation.navigate('Profile')} title='lets Start'></Button>
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
        fontWeight: 800,
    },
    text: {
        fontWeight: 800,
    }
}

);



