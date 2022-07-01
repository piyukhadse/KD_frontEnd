import React, { useState } from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import { Appbar, Button, TextInput } from 'react-native-paper';
import { BASE_URL } from '../screens/config'


const CustomerRegister = () => {

    const [first_name, setfirst_name] = useState(null);
    const [last_name, setlast_name] = useState(null);
    const [mobile_number, setmobile_number] = useState(null);
    const [email_id, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [pin_code, setpin_code] = useState(null);
    const [address, setaddress] = useState(null);
    const [isBusiness, setisBusiness] = useState(null);

    // const url = "{BASE_URL}/customer/register"
    // const url = "http://10.20.50.3:4000/customer/register"
    const url = "https://krushidhan-app.herokuapp.com/customer/register"
    const [data, setData] = useState({
        first_name: "",
        last_name: "",
        mobile_number: "",
        email_id: "",
        password: "",
        pin_code: "",
        address: "",
        isBusiness: ""
    })

    customerhandler = () => {
        // const url = "https://jsonplaceholder.typicode.com/photos?_limit=3"
        const url = BASE_URL + "/customer/register"
        // const url = "http://10.20.50.3:4000/customer/register"
        // const url = "https://krushidhan-app.herokuapp.com/customer/register"
        fetch(url, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                first_name: first_name,
                last_name: last_name,
                mobile_number: mobile_number,
                email_id: email_id,
                password: password,
                pin_code: pin_code,
                address: address,
                isBusiness: isBusiness

            })
        }).then((res) => res.json())
            .then((resJson) => {
                console.log("RES AFTER api call ==> ", resJson)
                // alert(JSON.stringify(resJson))
                // this.setState({ data: resJson })
            })
    }
    return (
        <SafeAreaView>
            <ScrollView>

                <TextInput label="first name"
                    onChangeText={(first_name) => setfirst_name(first_name)}
                />
                <TextInput label="Last name"
                    onChangeText={(last_name) => setlast_name(last_name)}
                />
                <TextInput label="Email" keyboardType="email-address"
                    onChangeText={(email) => setEmail(email)}
                />
                <TextInput label="Password" secureTextentry={true} right={<TextInput.Icon name="eye-off-outline" />}
                    onChangeText={(password) => setPassword(password)}
                />
                <TextInput label="Address"
                    onChangeText={(address) => setaddress(address)}
                />
                <TextInput label="PinCode"
                    onChangeText={(pin_code) => setpin_code(pin_code)}
                />
                <TextInput label="MobileNo" keyboardType="phone-pad"
                    onChangeText={(mobile_number) => setmobile_number(mobile_number)}
                />
                <TextInput label="isBusines"
                    onChangeText={(isBusiness) => setisBusiness(isBusiness)}
                />
                <Button onPress={this.customerhandler}
                    color="green" mode="contained">Register</Button>
            </ScrollView>
        </SafeAreaView >
    );
}

export default CustomerRegister

