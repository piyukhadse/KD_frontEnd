import React from 'react'
import { StyleSheet, View, Text, Image, Button } from 'react-native'




const Next = () => {
    return (
        <View style={styles.container}>
            <Button color="green"></Button>

        </View >
    );
}

export default Next
const styles = StyleSheet.create({
    container: {
        flex: 8,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',

    },
}

);
