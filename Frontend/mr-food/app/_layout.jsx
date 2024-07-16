import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { StripeProvider } from '@stripe/stripe-react-native'
import { Provider } from 'react-redux'
import { store } from '../Redux/store'
const STRIP_KEY='pk_test_51Oh4IYEyzMUhUrfVIWb0XCP0LzzOeO6ebVkc7VGXAwfjtX6SQIjk6COkVslz2iYcUBN40Tkps0LMFt1BhHJmz35g0011NTGNPn'
const _layout = () => {
  return (
    <Provider store={store}>
    <StripeProvider publishableKey={STRIP_KEY}>
    <Stack>
        <Stack.Screen name="(tabs)" options={{headerShown:false}}  />
        <Stack.Screen name="index" options={{headerShown:false}} />
        <Stack.Screen name="(Item)" options={{headerShown:false}} />
        <Stack.Screen name="SignUp" options={{headerShown:false}}  />
        <Stack.Screen name="SignIn" options={{headerShown:false}}  />
    </Stack>
    </StripeProvider>
    </Provider>
  )
}

export default _layout