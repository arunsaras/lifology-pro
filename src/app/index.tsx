import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import UsersScreen from './ui/usersScreen';
import PostScreen from './ui/postScreen';

const index = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer independent>
    <Stack.Navigator initialRouteName='Users' screenOptions={{headerShown:false}}>
      <Stack.Screen name="Users" component={UsersScreen} />
      <Stack.Screen name="Post" component={PostScreen} />

    </Stack.Navigator>
  </NavigationContainer>
  )
}

export default index