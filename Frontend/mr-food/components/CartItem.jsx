import { View, Text, Image } from 'react-native'
import React from 'react'
import pizz from '../assets/images/pizza/pizza1.png'
const CartItem = ({img,title,price,count}) => {
  return (
    <View className='flex flex-row justify-between items-center w-full h-24 border px-7 border-[#fba51d] rounded-lg
    '>
        <Image source={pizz} className='w-14 h-14' resizeMode='cover' />
        <View className='flex flex-col gap-2 items-center justify-center'>
            <Text className='text-white text-xs '>Crispy Chicken Pizza</Text>
            <Text className='text-[#12935e] text-xs '>Rs.1200.00</Text>
        </View>

        <View className='flex justify-center items-center h-7 w-7 bg-[#fba51d] rounded-lg'>
            <Text className='font-semibold'>5</Text>
        </View>
      
    </View>
  )
}

export default CartItem