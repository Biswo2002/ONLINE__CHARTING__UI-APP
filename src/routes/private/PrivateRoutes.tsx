import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { StyleSheet } from 'react-native'
import React from 'react'
import Modychart from '../../screen/private/Modychart'
import Welcome from '../../screen/private/Welcome'

const PrivateRoutes = () => {
  const Stack = createNativeStackNavigator()
  return (
    <Stack.Navigator
      initialRouteName='Welcome'
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name='Welcome' component={Welcome} />
      <Stack.Screen name='Modychart' component={Modychart} />
    </Stack.Navigator>
  )
}

export default PrivateRoutes

const styles = StyleSheet.create({})