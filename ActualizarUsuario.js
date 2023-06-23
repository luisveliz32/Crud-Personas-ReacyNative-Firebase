import  React ,{useState,useEffect} from 'react';
import { View, TextInput,StyleSheet,Button } from 'react-native';
import Constants from 'expo-constants'; 

export default  function ActualizarUsuario({navigation}){
  
  return(
    
    <View style={styles.container} >
        <TextInput
          placeholder='Nombre'
          style={styles.input}
        />
        <TextInput
          placeholder='Apellido Paterno'
          style={styles.input}
        />
        <TextInput
          placeholder='Apellido Materno'
          style={styles.input}
        />
        <TextInput
          placeholder='Documento de Identidad'
          style={styles.input}
        />
        <Button
        title='Actualizar Usuario'
            style={styles.boton}
        />
        <Button
        title='Elimiar Usuario'
            style={styles.botoneliminar}
        />
    </View>
  );
}
const styles=StyleSheet.create({
    input:{
        height:40,
        borderWidth:1,
        borderColor:'#ccc',
        padding:10,
        marginVertical:5
    },
    container:{
        flex:1,
        paddingTop:Constants.statusBarHeight,
        padding:8,
        margin:15 
    },
    boton:{
        backgroundColor:'blue',
        padding:10
    },
    botoneliminar:{
        backgroundColor:'red',
        padding:10
    }
});





