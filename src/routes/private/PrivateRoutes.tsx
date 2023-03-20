import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { StyleSheet } from 'react-native'
import React from 'react'
import Welcome from '../../screen/private/Welcome'
import Home from '../../screen/private/Home'

const PrivateRoutes = () => {
  const Stack = createNativeStackNavigator()
  return (
    <Stack.Navigator
      initialRouteName='Welcome'
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name='Welcome' component={Welcome} />
      <Stack.Screen name='Home' component={Home} />
    </Stack.Navigator>
  )
}

export default PrivateRoutes

const styles = StyleSheet.create({})