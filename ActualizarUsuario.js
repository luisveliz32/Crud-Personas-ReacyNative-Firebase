import  React ,{useState,useEffect} from 'react';
import { View, TextInput,StyleSheet,Button } from 'react-native';
import Constants from 'expo-constants'; 
import appFirebase from '../credenciales';
import {getFirestore,collection,addDoc,getDocs,doc,deleteDoc,getDoc,setDoc} from 'firebase/firestore';
const db = getFirestore(appFirebase);

export default  function ActualizarUsuario({navigation,route}){
  const { item } = route.params;
  const[persona,setPersona]=useState({
    id:item.id,
    nombre:item.nombre,
    apellidop:item.apellidop,
    apellidom:item.apellidom,
    ci:item.ci,
  })
  const actualizar=()=>{
    console.log(persona)
  }
  const eliminar=async(id)=>{
    try {
      await deleteDoc(doc(db,'personas',id));
    console.log('persona eliminada con exito');
    navigation.navigate('Listar Usuarios')
      
    } catch (error) {
      console.log(error);
    }
    
  }
  return(
    
    <View style={styles.container} >
        <TextInput
          placeholder='Nombre'
          style={styles.input}
          value={persona.nombre}
        />
        <TextInput
          placeholder='Apellido Paterno'
          style={styles.input}
          value={persona.apellidop}
        />
        <TextInput
          placeholder='Apellido Materno'
          style={styles.input}
          value={persona.apellidom}
        />
        <TextInput
          placeholder='Documento de Identidad'
          style={styles.input}
          value={persona.ci}
        />
        <Button
        color="blue"
        title='Actualizar Usuario'
            style={styles.boton}
        />
        <Button
        title='Elimiar Usuario'
        color="red"
        onPress={()=>eliminar(persona.id)}
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
      
        padding:10
    },
});





