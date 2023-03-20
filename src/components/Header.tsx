import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Box, HStack, Image } from 'native-base'

const Header = () => {
    return (
        <HStack>
            <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/747/747950.png' }} alt=''
                size={5}
            />
        </HStack>
    )
}

export default Header

const styles = StyleSheet.create({})