import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {
  StartScreen,
  LoginScreen,
  RegisterScreen,
  ResetPasswordScreen,
  Dashboard,
} from '../screens'
import TabsNavigator from './TabsNavigator';
import { useContext } from "react";
import { AuthContext } from "../hooks/authContext";


export default function StackNavigator() {
  if(!useContext(AuthContext).isLoggedIn) return <AuthStackNavigator /> 
  else return <TabsNavigator />;
}

export const AuthStackNavigator = () => {
  const Stack = createStackNavigator()
  return (
    <Stack.Navigator
    initialRouteName="StartScreen"
    screenOptions={{
      headerShown: false,
    }}
  >
    <Stack.Screen name="StartScreen" component={StartScreen} />
    <Stack.Screen name="LoginScreen" component={LoginScreen} />
    <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
    <Stack.Screen
      name="ResetPasswordScreen"
      component={ResetPasswordScreen}
    />
    <Stack.Screen name="Dashboard" component={Dashboard} />
  </Stack.Navigator>
  )
}

export const LoggedInStackNavigator = () => {
  const Stack = createStackNavigator()
  return (
    <Stack.Navigator
          initialRouteName="Dashboard"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Dashboard" component={Dashboard} />
    </Stack.Navigator>
  )
}