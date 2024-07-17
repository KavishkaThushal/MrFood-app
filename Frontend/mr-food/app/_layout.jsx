import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { StripeProvider } from '@stripe/stripe-react-native'
import { Provider } from 'react-redux'
import { store } from '../Redux/store'
import {Colors} from '../constants/Colors'
import Toast, {BaseToast, ErrorToast} from 'react-native-toast-message';
const STRIP_KEY='pk_test_51Oh4IYEyzMUhUrfVIWb0XCP0LzzOeO6ebVkc7VGXAwfjtX6SQIjk6COkVslz2iYcUBN40Tkps0LMFt1BhHJmz35g0011NTGNPn'
const _layout = () => {

  const toastConfig = {
    success: props => (
      <BaseToast
        {...props}
        style={{
          borderLeftColor: 'green',
          backgroundColor: Colors.tab,
          height: 50,
          opacity: 0.9,
        }}
        contentContainerStyle={{paddingHorizontal: 15}}
        text1Style={{
          fontSize: 14,
          color: 'white',
          fontWeight: 'semibold',
        }}
        text2Style={{
          fontSize: 13,
          color: 'white',
        }}
      />
    ),
  
    error: props => (
      <ErrorToast
        {...props}
        style={{
          borderLeftColor: 'red',
          backgroundColor: Colors.tab,
          height: 50,
          opacity: 0.9,
        }}
        text1Style={{
          fontSize: 14,
          color: 'white',
          fontWeight: 'semibold',
        }}
        text2Style={{
          fontSize: 15,
          color: 'white',
        }}
      />
    ),
  
    tomatoToast: ({text1, props}) => (
      <View style={{height: 60, width: '100%', backgroundColor: 'tomato'}}>
        <Text>{text1}</Text>
        <Text>{props.uuid}</Text>
      </View>
    ),
  };

  return (
    <Provider store={store}>
    <StripeProvider publishableKey={STRIP_KEY}>
    <Stack>
        <Stack.Screen name="index" options={{headerShown:false}} />
        <Stack.Screen name="(tabs)" options={{headerShown:false}}  />
        <Stack.Screen name="(Item)" options={{headerShown:false}} />
        <Stack.Screen name="SignUp" options={{headerShown:false}}  />
        <Stack.Screen name="SignIn" options={{headerShown:false}}  />
    </Stack>
    </StripeProvider>
    <Toast config={toastConfig} />
    </Provider>
  )
}

export default _layout