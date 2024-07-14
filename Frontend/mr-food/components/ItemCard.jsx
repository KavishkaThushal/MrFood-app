import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import piz1 from '../assets/images/pizza/pizza1.png'
import fire from '../assets/images/fire.png'
import { Entypo } from '@expo/vector-icons';
import { useRouter } from 'expo-router';




const ItemCard = ({img,title,rate,price,id}) => {
  const router=useRouter()

  return (
    <TouchableOpacity onPress={()=>(router.push(`/${id}`))}>
    <View className='flex flex-col h-48 w-[20vh] rounded-3xl p-3 mt-16  relative bg-[#343434]'>
      <Image source={img} className='h-28 w-28 absolute -top-10 left-6' />
      
      <View className='flex flex-col top-16 gap-1 h-24  justify-between'>
      <Text className=' text-white  w-3/4'>{title}</Text>
      
      <View className='flex flex-row  gap-1 items-center '>
      <Image source={fire} className='h-5 w-5 ' />
      <Text className=' text-white text-xs'>{rate}</Text>
      </View>

      <View className='flex flex-row items-center  justify-between'>
        <Text className='text-[#12935e] font-semibold'>Rs.{price}.00</Text>
        <View className='flex justify-center items-center h-6 w-6 bg-[#fba51d] rounded-lg shadow-lg'>
        <Entypo name="plus" size={18} color="black" />
        </View>
      </View>
      </View>
      



    </View>
    </TouchableOpacity>

  )
}

export default ItemCard