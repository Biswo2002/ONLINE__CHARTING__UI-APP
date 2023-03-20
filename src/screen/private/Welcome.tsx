import { Box, Pressable, HStack, Image, Text, StatusBar } from 'native-base'
import { useNavigation } from '@react-navigation/native';
import LottieView from 'lottie-react-native';
import { StyleSheet } from 'react-native'
import React from 'react'
import { PrivateNavigationProps } from '../../types/AllRoutes';

const Welcome = () => {
    const { navigate } = useNavigation<PrivateNavigationProps>()
    return (
        <Box safeArea bgColor={'#fff'} flex={1} >
            <StatusBar backgroundColor={'#272762'} />
            <Box
                bgColor={'#272762'}
                height={'50%'} >
                <Box bgColor={'#ffff'}
                    height={'100%'}
                    borderBottomRightRadius={'90'} >
                    <LottieView
                        source={{ uri: 'https://assets1.lottiefiles.com/private_files/lf30_gqs2uqht.json' }}
                        autoPlay
                        loop={true}
                    />
                </Box>
            </Box>
            <Box
                justifyContent={'center'}
                alignItems={'center'}
                borderTopLeftRadius={90}
                px={8}
                height={'50%'}
                bgColor={'#272762'} >
                <Text
                    color={'#fff'}
                    fontSize={'3xl'}
                    px={12}
                    bold
                    textAlign={'center'} >
                    Let's connect with each other
                </Text>
                <Text
                    fontSize={'md'}
                    bold
                    color={'gray.300'}
                    textAlign={'center'}
                    italic
                    lineHeight={'30'}
                    py={2} >
                    A message is a discrete communication
                    intended by the source consumption.
                </Text>
                <Pressable
                    onPress={() => navigate('Home')}
                    alignItems={'center'}
                    bgColor={'rose.500'}
                    borderRadius={'12'}
                    px={8}
                    py={4}
                    mt={'10'} >
                    <HStack>
                        <Text
                            fontSize={'md'}
                            color={'#fff'}
                            bold >
                            Let's Start
                        </Text>
                        <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/8166/8166472.png' }} alt=''
                            alignSelf={'center'}
                            size={'5'}
                            ml={4}
                        />
                    </HStack>
                </Pressable>
            </Box>
        </Box>
    )
}

export default Welcome

const styles = StyleSheet.create({})
