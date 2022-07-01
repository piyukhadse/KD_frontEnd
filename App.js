import React from "react";

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/Home'
import ProfileScreen from './screens/Profile'
import LoginScreen from './screens/SellerLogin'
import Register2Screen from './screens/SellerRegister'
import Login2Screen from './screens/CustomerLogin'
import RegisterScreen from './screens/CustomerRegister'
import ProductScreen from './screens/Product'
import { View, StyleSheet, Text } from "react-native";
import style from "./componant/style";
// import { AuthProvider } from './screens/AuthContext';



const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }} />
        <Stack.Screen name="Profile" component={ProfileScreen} options={{ title: 'KRUSHIDHAN', headerTitleAlign: 'center' }} />
        <Stack.Screen name="SellerLogin" component={LoginScreen} options={{ title: 'SellerLogin', headerTitleAlign: 'center' }} />
        <Stack.Screen name="SellerRegister" component={Register2Screen} options={{ title: 'SellerRegister', headerTitleAlign: 'center' }} />
        <Stack.Screen name="CustomerLogin" component={Login2Screen} options={{ title: 'CustomerLogin', headerTitleAlign: 'center' }} />
        <Stack.Screen name="CustomerRegister" component={RegisterScreen} options={{ title: 'CustomerRegister', headerTitleAlign: 'center' }} />
        <Stack.Screen name="Product" component={ProductScreen} options={{ title: 'Product', headerTitleAlign: 'center' }} />

      </Stack.Navigator>
    </NavigationContainer>

  );
};
export default MyStack










