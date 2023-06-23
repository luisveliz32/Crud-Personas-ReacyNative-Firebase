import  React ,{useState,useEffect} from 'react';
import { View, TextInput,StyleSheet,Button ,Alert} from 'react-native';
import Constants from 'expo-constants'; 

export default  function NuevoUsuario({navigation}){
  
  
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
          title='Guardar Usuario'
          style={styles.boton}
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
    }
});





