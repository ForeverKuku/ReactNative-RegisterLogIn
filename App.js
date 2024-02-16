import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {homePage} from './screen/homePage';
import { SignUp } from './screen/SignUp';
import { Button } from 'react-native-paper';
import {LoginScreen} from './screen/LoginScreen';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="SignUp" component={SignUp} options={{ title: 'RegisterPage' }} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ title: 'LoginScreen' }} />
        <Stack.Screen name="homePage" component={homePage} options={{ title: 'homePage' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}