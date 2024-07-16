import { View, Text, StyleSheet, Dimensions, ImageBackground, SafeAreaView, Image, TouchableOpacity, FlatList, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import BgImg from '../../assets/images/bg.jpg'
import { Feather,FontAwesome6,Ionicons,MaterialCommunityIcons  } from '@expo/vector-icons';
import UserImg from '../../assets/images/userImg.png'
import {Colors} from '../../constants/Colors'
import MenuTab from '../../components/MenuTab';
import ItemCard from '../../components/ItemCard';
import { CardData } from '../../assets/data/data';
import {useSelector} from 'react-redux'










const home = () => {
  const {card}=useSelector(state=>state.cart)
  const data = [
    {id:1, title:'Pizza', icon:<Ionicons name="pizza" size={28} color={Colors.secondary} />},
    {id:2, title:'Burger', icon:<FontAwesome6 name="burger" size={28} color={Colors.secondary} />},
    {id:3, title:'Dessert', icon:<MaterialCommunityIcons name="cupcake" size={28} color={Colors.secondary} />},
    {id:4, title:'Pasta', icon:<MaterialCommunityIcons name="noodles" size={28} color={Colors.secondary} />},
    {id:5, title:'Rice', icon:<FontAwesome6 name="bowl-rice" size={28} color={Colors.secondary} />},
    {id:6, title:'Sushi', icon:<FontAwesome6 name="bowl-food" size={28} color={Colors.secondary} />},
    {id:7, title:'Roll', icon:<MaterialCommunityIcons name="food" size={28} color={Colors.secondary} />},
  ]
  const [category, setCategory] = useState("All")

  const renderItem = ({ item }) => (
    <MenuTab icon={item.icon} title={item.title} setCategory={setCategory} category={category} />
  );

  const renderCard = ({ item }) => {
    if(category === "All" || category === item.category){

      return (<ItemCard img={item.img} title={item.title} rate={item.rate} price={item.price} id={item.id} />)
    }
  }



  return (
    <ImageBackground source={BgImg} resizeMode='cover' className='flex-1 '>
      <LinearGradient className="flex-1" colors={["rgba(0,0,0,0.9)","rgba(0,0,0,0.8)"]}>
        <SafeAreaView className='flex-1 px-1 py-10'>
          <View className='flex flex-row justify-between items-center px-2'>

            <TouchableOpacity>
            <View  className='flex items-center justify-center bg-[#343434] h-8 w-8 rounded-lg'>
            <Feather name="menu" size={22} color="black" />
            </View>
            </TouchableOpacity>

            <TouchableOpacity>
            <ImageBackground source={UserImg} resizeMode='cover' className='flex items-center justify-center w-10 h-10  rounded-full '>
            </ImageBackground>
            </TouchableOpacity>


          </View>

          <View className='flex  items-center text-center  mt-2'>
            <Text className='text-center text-white text-2xl'>Welcome! Kavishka</Text>
            <Text className='text-white text-2xl'>
               Order your favourite Food
            </Text>
          </View>
              
          <View className=' mt-6  h-32'>
          <FlatList 
           data={data}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            horizontal={true}
            />
          </View>

          <Text className='text-white text-xl ml-3 font-medium'>Popular {category==="All"? 'Pizza':category}</Text>

          <View className='flex justify-center p-5 pt-0 mt-2  '>
            <FlatList
            data={card}
            renderItem={renderCard}
            keyExtractor={item => item.id}
            numColumns={2}
            columnWrapperStyle={{justifyContent:'space-between',padding:'5px'}}
            />
          
          </View>


            
          
               
          

        </SafeAreaView>
      </LinearGradient>

    </ImageBackground>
  )
}



export default home