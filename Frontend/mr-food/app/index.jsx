import {  ImageBackground, SafeAreaView, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import pizzaImg from '../assets/images/homepizza.jpg'
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';
import { AntDesign } from '@expo/vector-icons';

SplashScreen.preventAutoHideAsync();

const index = () => {
  const [loaded, error] = useFonts({
    'KaushanScript': require('../assets/fonts/KaushanScript-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }


 
  return (
    <ImageBackground source={pizzaImg} className="flex-1" resizeMode='cover' >
    <LinearGradient className="flex-1" colors={["rgba(0,0,0,0.6)","rgba(0,0,0,0.8)"]}>
      <SafeAreaView className="flex-1 ">
    <View className=" flex items-start  top-[55vh] left-[3vh] ">
      <Text style={{fontFamily:'KaushanScript'}} className='text-6xl text-white  h-24 w-full pt-5   '>Welcome to</Text>
      <Text style={{fontFamily:'KaushanScript'}} className='text-6xl text-white  h-20  w-full pt-3 bottom-3 '>Mr food</Text>
      <Text  className='text-sm text-white    bottom-4  '>Your favourite foods delivered fast at your door</Text>
    </View>

    <View className='flex flex-row top-[60vh] p-8 justify-between items-center'>
      <TouchableOpacity>
        <Text className='text-white'>Skip</Text>
      </TouchableOpacity>

      <View className='flex h-10 w-10 bg-white justify-center items-center rounded-lg shadow-lg'>
      <AntDesign name="arrowright" size={20} color="black" />
      </View>
    </View>
    </SafeAreaView>
    </LinearGradient>
    </ImageBackground>
  )
}

export default index

