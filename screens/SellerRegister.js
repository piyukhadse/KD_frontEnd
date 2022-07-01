import { StatusBar } from "expo-status-bar";
import React, { useState } from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import { Appbar, Button, TextInput } from 'react-native-paper';
import { BASE_URL } from '../screens/config'


const SellerRegister = ({ navigation }) => {
    const [first_name, setfirst_name] = useState(null);
    const [last_name, setlast_name] = useState(null);
    const [mobile_number, setmobile_number] = useState(null);
    const [aadhar_number, setaadhar_number] = useState(null);
    const [kissan_card, setkisan_card] = useState(null);
    const [email_id, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [pin_codes, setpin_codes] = useState(null);
    const [address, setaddress] = useState(null);
    // const { isLoading, login } = useContext(AuthContext);

    const url = "https://krushidhan-app.herokuapp.com/seller/register"
    const [data, setData] = useState({
        first_name: "",
        last_name: "",
        mobile_number: "",
        aadhar_number: "",
        kissan_card: "",
        email: "",
        password: "",
        pin_codes: "",
        address: ""
    })
    // function Login(e) {
    //     e.preventDefault();
    //     axios.post(url, {

    //         Email: data.email_id,
    //         Password: data.password
    //     })
    //         .then(res => {
    //             console.log(res.data)
    //         })
    // }

    // function handle(e) {

    //     const newdata = { ...data }
    //     newdata[e.target.id] = e.target.value
    //     setData(newdata)
    //     console.log(newdata)
    // }

    //valid_field=()=




    sellerhandler = () => {
        // const url = "https://jsonplaceholder.typicode.com/photos?_limit=3"
        // const url = "http://10.20.50.3:4000/seller/register"
        // const url = "https://krushidhan-app.herokuapp.com/seller/register"
        // if (this.valid_field()) { alert("succesfully register") }
        const url = BASE_URL + "/seller/register"
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
                aadhar_number: aadhar_number,
                kissan_card: kissan_card,
                email_id: email_id,
                password: password,
                pin_codes: pin_codes,
                address: address

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
                <TextInput label="Pincode"
                    onChangeText={(pin_codes) => setpin_codes(pin_codes)}
                />
                <TextInput label="AdhaarNumber"
                    onChangeText={(aadhar_number) => setaadhar_number(aadhar_number)}
                />
                <TextInput label="Kisaan-Id"
                    onChangeText={(kissan_card) => setkisan_card(kissan_card)}
                />
                <TextInput label="MobileNo" keyboardType="phone-pad"
                    onChangeText={(mobile_number) => setmobile_number(mobile_number)}
                />
                <Button onPress={this.sellerhandler}
                    color="green" mode="contained">Register</Button>
            </ScrollView>
        </SafeAreaView>
    );
}
export default SellerRegister