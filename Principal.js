import  React ,{useState,useEffect} from 'react';
import { Button, View, Text,Image, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NuevoUsuario from './NuevoUsuario';

export default  function Principal({navigation}){
  const Stack =createNativeStackNavigator();
  return(
    <Stack.Navigator
    screenOptions={{
      headerStyle:{
        backgroundColor:'blue'
      },
      headerTintColor:'white',
    }}
    >
      <Stack.Screen
        name='Listar Usuarios'
        component={NuevoUsuario}
      />


    </Stack.Navigator>
    
  );
}





