import  React ,{useState,useEffect} from 'react';
import { Button, View, Text,Image, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NuevoUsuario from './NuevoUsuario';
import ListarUsuario from './ListarUsuarios';
import ActualizarUsuario from './ActualizarUsuario';
import { Ionicons } from "@expo/vector-icons";
import { Title } from 'react-native-paper';

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
        component={ListarUsuario}
        options={({ navigation, route }) => ({
          title: 'Crud',
          headerRight: () => (
            <Ionicons
              name={'ios-add-circle'}
              size={25}
              color={'white'}
              style={{ marginRight: 15 }}
              onPress={() => navigation.navigate('Nuevo Usuario')}
            />
          ),
        })}
      />
      <Stack.Screen name="Nuevo Usuario" component={NuevoUsuario} />
      <Stack.Screen name="ActualizarUsuario" component={ActualizarUsuario} />

    </Stack.Navigator>
    
  );
}





