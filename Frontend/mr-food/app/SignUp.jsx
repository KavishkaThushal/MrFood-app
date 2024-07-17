import { View, Text, ImageBackground, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import BgImg from '../assets/images/bg.jpg'
import { LinearGradient } from 'expo-linear-gradient'
import { Link, useRouter } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import {signupStart,signupSuccess,signupFailed} from '../Redux/Reducers/UserReducer'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import Toast from 'react-native-toast-message'
const SignUp = () => {
  const router=useRouter()
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    address: '',
    mobilenumber: '',
    postalcode: '',
    password: ''
  })
  const dispatch=useDispatch()

  const handleSignUp =async () => {
    try {
      dispatch(signupStart())
      const response=await axios.post('http://192.168.8.113:4000/api/user/signup',{username:formData.username,email:formData.email,address:formData.address,mobilenumber:formData.mobilenumber,postalcode:formData.postalcode,password:formData.password})
      if(response.data.success===false){
        dispatch(signupFailed(response.data.message))
        Toast.show({
          type:'error',
          text1:response.data.message
        })
      }
      else{
        dispatch(signupSuccess(response.data)) 
        Toast.show({
          type:'success',
          text1:response.data.message
        })
        router.push('/home')
      }
      
    } catch (error) {
      dispatch(signupFailed(error))
      Toast.show({
        type:'error',
        text1:error.message
      })
    }
    
  }


  const handleChange = (name,value) => {
      setFormData({...formData,[name]:value})
  }
  
  return (
    <ImageBackground source={BgImg} className='flex-1'>
      <LinearGradient className="flex-1" colors={["rgba(0,0,0,0.9)","rgba(0,0,0,0.8)"]}>
        <SafeAreaView className='flex-1 justify-center items-center'>
        <View className='flex flex-col justify-center items-center gap-4  w-[46vh]'>

        <Text className='text-white text-2xl mb-4 '>Create an account</Text>
        <View className='flex flex-col justify-center  w-full'>
          <Text className='text-white text-sm mb-2'>User Name</Text>
          <TextInput className='w-full h-12 border rounded-lg px-2 text-white font-semibold border-[#fba51d] ' onChangeText={(text)=>(handleChange('username',text))}/>
        </View>
        <View className='flex flex-col justify-center  w-full'>
          <Text className='text-white text-sm mb-2'>Email</Text>
          <TextInput className='w-full h-12 border rounded-lg px-2 text-white font-semibold border-[#fba51d] 'onChangeText={(text)=>(handleChange('email',text))}/>
        </View>
        <View className='flex flex-col justify-center  w-full'>
          <Text className='text-white text-sm mb-2'>Address</Text>
          <TextInput className='w-full h-12 border rounded-lg px-2 text-white font-semibold border-[#fba51d] 'onChangeText={(text)=>(handleChange('address',text))}/>
        </View>
        <View className='flex flex-col justify-center  w-full'>
          <Text className='text-white text-sm mb-2'>Mobile Number</Text>
          <TextInput className='w-full h-12 border rounded-lg px-2 text-white font-semibold border-[#fba51d] 'onChangeText={(text)=>(handleChange('mobilenumber',text))}/>
        </View>

        <View className='flex  flex-col justify-center w-full'>
          <Text className='text-white mb-2 text-sm'>Postal Code</Text>
          <TextInput className='w-full h-12 border rounded-lg px-2 text-white font-semibold  border-[#fba51d] 'onChangeText={(text)=>(handleChange('postalcode',text))}/>
        </View>
        <View className='flex  flex-col justify-center w-full'>
          <Text className='text-white mb-2 text-sm'>Password</Text>
          <TextInput className='w-full h-12 border rounded-lg px-2 text-white font-semibold  border-[#fba51d] ' onChangeText={(text)=>(handleChange('password',text))}/>
        </View>


        
        <TouchableOpacity className='flex   flex-col justify-center items-center bg-[#fba51d] h-10 rounded-lg w-full' onPress={handleSignUp}>
          <Text className='text-white'>CREATE AN ACCOUNT</Text>
        </TouchableOpacity>
        </View>
        <View className='flex flex-row gap-1 justify-center items-center mt-2'>

        <Text className='text-white text-xs '>All ready have an account?</Text><Link href='/SignIn' className='text-[#fba51d] text-xs '>Sign in</Link>
        </View>

        </SafeAreaView>
      </LinearGradient>

     </ImageBackground>
  )
}

export default SignUp