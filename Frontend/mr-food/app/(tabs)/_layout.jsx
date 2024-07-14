import { View, Text } from 'react-native';
import React from 'react';
import { Slot, Tabs } from 'expo-router';
import { Feather, Ionicons, MaterialIcons } from '@expo/vector-icons';

const Layout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: 'black',
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color }) => <Feather name="home" size={24} color='black' />,
        }}
      />
      <Tabs.Screen
        name="favourite"
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color }) => <MaterialIcons name="favorite-outline" size={24} color='black' />,
        }}
      />
      <Tabs.Screen
        name="notification"
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color }) => <Ionicons name="notifications-outline" size={24} color='black' />,
        }}
      />
      <Tabs.Screen
        name="cart"
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color }) => <Feather name="shopping-cart" size={24} color='black' />,
        }}
      />
    </Tabs>
  );
}

export default Layout;
