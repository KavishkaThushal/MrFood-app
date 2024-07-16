import { View, Text, ImageBackground, TextInput, Button, TouchableOpacity } from 'react-native'
import React from 'react'
import BgImg from '../assets/images/bg.jpg'
import { LinearGradient } from 'expo-linear-gradient'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Link } from 'expo-router'
const SignIn = () => {
  return (
     <ImageBackground source={BgImg} className='flex-1'>
      <LinearGradient className="flex-1" colors={["rgba(0,0,0,0.9)","rgba(0,0,0,0.8)"]}>
        <SafeAreaView className='flex-1 justify-center items-center'>
        <View className='flex flex-col justify-center items-center gap-4  w-[46vh]'>

        <Text className='text-white text-2xl mb-4 '>Sign in your account</Text>
        <View className='flex flex-col justify-center  w-full'>
          <Text className='text-white text-sm mb-2'>Email</Text>
          <TextInput className='w-full h-12 border rounded-lg px-2 text-white font-semibold border-[#fba51d] '/>
        </View>

        <View className='flex  flex-col justify-center w-full'>
          <Text className='text-white mb-2 text-sm'>Password</Text>
          <TextInput className='w-full h-12 border rounded-lg px-2 text-white font-semibold  border-[#fba51d] '/>
        </View>


        
        <TouchableOpacity className='flex   flex-col justify-center items-center bg-[#fba51d] h-10 rounded-lg w-full'>
          <Text className='text-white'>SIGN IN</Text>
        </TouchableOpacity>
        </View>
        <View className='flex flex-row gap-1 justify-center items-center mt-2'>

        <Text className='text-white text-xs '>Don't have account?</Text><Link href='/SignUp' className='text-[#fba51d] text-xs '>create account</Link>
        </View>

        </SafeAreaView>
      </LinearGradient>

     </ImageBackground>
  )
}

export default SignIn