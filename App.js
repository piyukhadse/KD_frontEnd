import React from "react";

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/Home'
import ProfileScreen from './screens/Profile'
import NextScreen from './screens/Next'
import { View, StyleSheet, Text } from "react-native";
import style from "./componant/style";



const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}

        />
        <Stack.Screen name="Profile" component={ProfileScreen} options={{ title: 'KRUSHIDHAN', headerTitleAlign: 'center' }} />
        <Stack.Screen name="Next" component={NextScreen} options={{ title: 'KRUSHIDHAN', headerTitleAlign: 'center' }} />
      </Stack.Navigator>
    </NavigationContainer>

  );
};
export default MyStack










