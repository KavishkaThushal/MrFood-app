import { View, Text, Image } from 'react-native'
import React from 'react'
const CartItem = ({img,title,price,count}) => {
  
  return (
    <View className='flex flex-row justify-between items-center w-full h-24 border mt-3 px-7 border-[#fba51d] rounded-lg
    '>
        <Image source={img} className='w-14 h-14' resizeMode='cover' />
        <View className='flex flex-col gap-2 items-center justify-center'>
            <Text className='text-white text-xs '>{title}</Text>
            <Text className='text-[#12935e] text-xs '>{`Rs.${price}.00`}</Text>
        </View>

        <View className='flex justify-center items-center h-7 w-7 bg-[#fba51d] rounded-lg'>
            <Text className='font-semibold'>{count}</Text>
        </View>
      
    </View>
  )
}

export default CartItem