import { View, Text, ImageBackground, TouchableOpacity, FlatList, ScrollView } from 'react-native'
import React from 'react'
import BgImg from '../../assets/images/bg.jpg'
import { LinearGradient } from 'expo-linear-gradient'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '../../constants/Colors'
import { useRouter } from 'expo-router'
import CartItem from '../../components/CartItem'
import {useStripe} from '@stripe/stripe-react-native'
import {useSelector,useDispatch} from 'react-redux'
import { selectTotalAmount } from '../../Redux/Reducers/CartReducer'
const cart = () => {
  const router=useRouter()
  const {cart,card,}=useSelector(state=>state.cart)
  const totalAmount = useSelector(selectTotalAmount);
  const deliveryFees=500
  const {initPaymentSheet,presentPaymentSheet}=useStripe()
  console.log(cart);

  // console.log(totalAmount);

  const checkout = async () => {
    const { error } = await initPaymentSheet({
      merchantDisplayName: 'Mr Food',
      defaultShippingDetails: {
        name: 'Anushka',
        address: {
          line1: 'no 33, hamparawa, diyathalwa'
        }
      }
    });

    if (error) {
      console.log(error);
      return;
    }

    const { error: presentError } = await presentPaymentSheet();

    if (presentError) {
      console.log(presentError);
    }
  };

  const renderCart = ({ item }) => {
    
    return Object.keys(cart).map((cartItemId) => {
      if (parseInt(cartItemId) === item.id) {
        return (
          <CartItem
            key={cartItemId} 
            img={item.img}
            title={item.title}
            price={item.price}
            count={cart[cartItemId]} 
          />
        );
      }
      return null;
    });
  }
  
   

  return (
    <ImageBackground source={BgImg} className='flex-1'>
      <LinearGradient className="flex-1" colors={["rgba(0,0,0,0.9)","rgba(0,0,0,0.8)"]}>
        <SafeAreaView className='flex-1 '>
        <View className='flex flex-row justify-between items-center px-2'>
          <TouchableOpacity onPress={()=>(router.back())}>  
          <Ionicons name="chevron-back-outline" size={32} color={Colors.secondary} />
          </TouchableOpacity>
          </View>

          <Text className='text-white text-xl font-medium px-5 mt-3'>My Cart</Text>

          <View className='flex flex-col px-3 mt-3 items-center justify-center w-full  h-96'>
          <FlatList
          data={card}
          renderItem={renderCart}
          keyExtractor={item => item.id}
          
          />
            

         
          </View>

          <View className='flex flex-col  '>
            <View className='flex flex-row justify-between items-center h-12  m-2 bg-[#343434] p-2 rounded-lg'>
              <Text className='text-[#787878] font-semibold'>Subtotal</Text>
              <Text className='text-[#fba51d] font-semibold'>{`Rs.${totalAmount}.00`}</Text>
            </View>

            <View className='flex flex-row justify-between items-center h-12  m-2 bg-[#343434] p-2 rounded-lg'>
              <Text className='text-[#787878] font-semibold'>Shipping</Text>
              <Text className='text-[#fba51d] font-semibold'>{`Rs.${deliveryFees}.00`}</Text>
            </View>

            <View className='flex flex-row justify-between items-center h-12  m-2 bg-[#343434] p-2 rounded-lg'>
              <Text className='text-[#787878] font-semibold'>Total</Text>
              <Text className='text-[#fba51d] font-semibold'>{`Rs.${totalAmount+deliveryFees}.00`}</Text>
            </View>

            <TouchableOpacity onPress={checkout} className='bg-[#fba51d] h-8 rounded-lg flex justify-center items-center m-2'>
              <Text className='text-white font-semibold'>Proceed</Text>
              </TouchableOpacity>

          </View>


        </SafeAreaView>
      </LinearGradient>
    </ImageBackground>
  )
}

export default cart