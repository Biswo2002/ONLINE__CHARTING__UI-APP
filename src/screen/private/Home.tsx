import { StyleSheet } from 'react-native'
import React from 'react'
import { Box } from 'native-base'
import Header from '../../components/Header'

const Home = () => {
  return (
    <Box safeArea bgColor={'#fff'} flex={'1'} >
      <Header />
    </Box>
  )
}

export default Home

const styles = StyleSheet.create({})