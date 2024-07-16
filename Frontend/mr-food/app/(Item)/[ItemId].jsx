import { View, Text, ImageBackground, TouchableOpacity, Image, FlatList } from 'react-native'
import React from 'react'
import { useLocalSearchParams, useRouter } from 'expo-router'
import { Ionicons } from '@expo/vector-icons';
import BgImg from '../../assets/images/bg.jpg'
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors } from '../../constants/Colors';
import { MaterialIcons } from '@expo/vector-icons';
import img from '../../assets/images/pizza/pizza1.png'
import { Entypo } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { CardData } from '../../assets/data/data';
import ItemCard from '../../components/ItemCard';
import { Feather } from '@expo/vector-icons';


const Item = () => {
  const [fav, setFav] = React.useState(false);
  const router=useRouter()
  const {ItemId}=useLocalSearchParams();

  const renderCard = ({ item }) => {
    

      return (<ItemCard img={item.img} title={item.title} rate={item.rate} price={item.price} id={item.id} />)
    
  }
  console.log(ItemId);
  return (
    <ImageBackground source={BgImg} resizeMode='cover' className='flex-1 '>
      <LinearGradient className="flex-1" colors={["rgba(0,0,0,0.9)","rgba(0,0,0,0.8)"]}>
        <SafeAreaView className='flex-1'>
          <View className='flex flex-row justify-between items-center px-2'>
          <TouchableOpacity onPress={()=>(router.back())}>  
          <Ionicons name="chevron-back-outline" size={32} color={Colors.secondary} />
          </TouchableOpacity>

          <TouchableOpacity onPress={()=>(setFav(prev=>!prev))}>
          <MaterialIcons name="favorite" size={32} color={fav===true? Colors.hart:Colors.secondary} />
          </TouchableOpacity>

          </View>
            
          <View className='flex justify-center items-center  w-full mt-6'>
          <Image source={img} className='w-56 h-56' resizeMode='cover' />
          </View>

          <View className='flex flex-row justify-center items-center mt-5'>
            <View className='flex flex-row justify-around items-center w-32'>
                <TouchableOpacity>
                <View className='flex justify-center items-center h-8 w-8 bg-[#343434] rounded-lg'>
                <Entypo name="plus" size={22} color='white' />
                </View>
                </TouchableOpacity>

                <Text className='text-white text-lg'>1</Text>

                <TouchableOpacity>
                <View className='flex justify-center items-center h-8 w-8 bg-[#343434] rounded-lg'>
                <MaterialCommunityIcons name="minus" size={22} color="white" />
                </View>
                </TouchableOpacity>

            </View>


          </View>
            <View className='flex justify-center p-3'>
              <Text className='text-white text-xl font-medium'>Special Prown Vegitable</Text>
              <Text className='text-white font-light text-sm mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat exercitationem harum rem doloribus, unde quia adipisci perferendis iusto omnis, id quis error. Reprehenderit officiis nobis laboriosam. Alias quo officiis rem.</Text>
            </View>

            <Text className='text-white text-xl font-medium px-3'>Similar Products</Text>
            <View className='flex  px-8'>
            <FlatList
            data={CardData.filter((item)=>item.category ==='pizza').slice(0,4)}
            renderItem={renderCard}
            keyExtractor={item => item.id}
            numColumns={2}
            columnWrapperStyle={{justifyContent:'space-between'}}
            />

            </View>

            <View className='flex flex-row h-16 w-full bottom-0 bg-black px-2 py-4 absolute justify-between items-center'>
              <View className='flex flex-col justify-center items-center'>
                <Text className='text-white text-xs'>Total Price</Text>
                <Text className='text-[#12935e] text-lg'>$ 20.00</Text>
              </View>

              <View className='flex justify-center items-center h-7 w-7 rounded-lg bg-[#fba51d]'>
              <Feather name="shopping-cart" size={18} color='black' />
              </View>
            </View>
          
        </SafeAreaView>
      </LinearGradient>
    </ImageBackground>  
  )
}

export default Item