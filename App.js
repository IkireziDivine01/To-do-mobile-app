/* eslint-disable prettier/prettier */
import React from 'react'
import { Provider } from 'react-native-paper'
import { NavigationContainer } from '@react-navigation/native'
import { theme } from './src/core/theme'
import StackNavigator from './src/navigators/StackNavigator'
import { AuthProvider } from "./src/hooks/authContext";


export default function App() {
  return (
    <Provider theme={theme}>
      <NavigationContainer>
        <AuthProvider>
        <StackNavigator/>
        </AuthProvider>
      </NavigationContainer>
    </Provider>
  )
}
