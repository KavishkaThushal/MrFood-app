import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Colors } from '../constants/Colors';

const MenuTab = ({icon,title,setCategory,category}) => {
  const IconComponent = React.cloneElement(icon, { color: category===title.toLowerCase() ? Colors.tab:Colors.secondary });

  return (
    <TouchableOpacity onPress={()=>(setCategory(prev=>(prev===title.toLowerCase()? "All":title.toLowerCase())))}>
    <View className='flex flex-col items-center justify-center p-2 gap-1 rounded-3xl h-20 w-20 ml-4 mt-1 bg-[#343434]'>
       {IconComponent} 
      <Text  className={category===title.toLowerCase() ?'text-[#fba51d] text-sm':'text-[#787878] text-sm'}>{title}</Text>
    </View>
    </TouchableOpacity>
  )
}

export default MenuTab