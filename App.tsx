import { NavigationContainer } from '@react-navigation/native'
import { NativeBaseProvider } from 'native-base'
import { StyleSheet } from 'react-native'
import React from 'react'
import Routes from './src/Routes'

const App = () => {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <Routes />
      </NativeBaseProvider>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})