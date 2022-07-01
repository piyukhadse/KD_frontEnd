import { StatusBar } from "expo-status-bar";
import React, { useContext, useState } from "react";
import { BASE_URL } from '../screens/config'
import {
    StyleSheet,
    Text,
    View,
    // Image,
    TextInput,
    //Button,
    TouchableOpacity,
} from "react-native";
// import { AuthContext } from './screens/AuthContext';

const CustomerLogin = ({ navigation }) => {
    const [email_id, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    // const { isLoading, login } = useContext(AuthContext);

    // const url = "{BASE_URL}/customer/login"
    const url = "https://krushidhan-app.herokuapp.com/customer/login"
    const [data, setData] = useState({
        email: "",
        password: ""
    })
    function Login(e) {
        e.preventDefault();
        axios.post(url, {
            Email: data.email_id,
            Password: data.password
        })
            .then(res => {
                console.log(res.data)
            })
    }

    function handle(e) {

        const newdata = { ...data }
        newdata[e.target.id] = e.target.value
        setData(newdata)
        console.log(newdata)
    }




    customerhandler = () => {
        // const url = "https://jsonplaceholder.typicode.com/photos?_limit=3"
        // const url = "https://krushidhan-app.herokuapp.com/customer/login"
        // const url = "{BASE_URL}/customer/login"
        const url = BASE_URL + "/customer/login"
        fetch(url, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email_id: email_id,
                password: password
            })
        }).then((res) => res.json())
            .then((resJson) => {
                console.log("RES AFTER api call ==> ", resJson)
                // alert(JSON.stringify(resJson))
                // this.setState({ data: resJson })
            })
    }
    return (
        <View style={styles.container}>

            <StatusBar style="auto" />
            <View >
                <TextInput
                    style={styles.textinput}
                    // value={email}
                    placeholder="Email"
                    placeholderTextColor="black"
                    onChangeText={(email) => setEmail(email)}
                />
            </View>

            <View >
                <TextInput
                    style={styles.textinput}
                    // value={password}
                    placeholder="Password"
                    placeholderTextColor="black"

                    secureTextEntry={true}
                    onChangeText={(password) => setPassword(password)}
                />
            </View>

            <TouchableOpacity>
                <Text style={styles.forgot_button}>Forgot Password?</Text>
            </TouchableOpacity>
            <View>
                <TouchableOpacity onPress={() => navigation.navigate('CustomerRegister')}>
                    <Text style={styles.forgot_button}>Register?</Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity onPress={this.customerhandler}
                style={styles.loginBtn}>
                <Text style={styles.loginText}>LOGIN</Text>
            </TouchableOpacity>
        </View>
    );
}
export default CustomerLogin

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },

    textinput: {

        alignSelf: 'stretch',
        height: 40,
        marginBottom: 30,
        color: 'black',
        borderBottomColor: '#199187',
        borderBottomWidth: 1,
    },




    forgot_button: {
        height: 30,
        marginBottom: 50,
        textAlign: "left"
    },
    register: {
        height: 30,
        marginBottom: 50,
        textAlign: "right"
    },

    loginBtn: {
        width: "80%",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        backgroundColor: "green",
    },
});