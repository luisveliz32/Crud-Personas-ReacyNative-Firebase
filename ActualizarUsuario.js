import  React ,{useState,useEffect} from 'react';
import { View, TextInput,StyleSheet,Button } from 'react-native';
import Constants from 'expo-constants'; 
import appFirebase from '../credenciales';
import {getFirestore,collection,addDoc,getDocs,doc,deleteDoc,getDoc,setDoc,updateDoc} from 'firebase/firestore';
const db = getFirestore(appFirebase);

export default  function ActualizarUsuario({navigation,route}){
  const { item } = route.params;
  const[persona,setPersona]=useState({
    nombre:item.nombre,
    apellidop:item.apellidop,
    apellidom:item.apellidom,
    ci:item.ci,
  })
  const actualizar= async(id)=>{
    //console.log(persona)
    try {
      const a=doc(db,'personas',id)
      await updateDoc(a,persona);
      console.log('Persona Actuializada Con Exito ')
      navigation.navigate('Listar Usuarios')
    } catch (error) {
      console.log(error)
    }
  }
  const capturandoInput=(value,name)=>{
    setPersona({...persona,[name]:value})
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
          onChangeText={(value)=>capturandoInput(value,'nombre')}
          value={persona.nombre}
        />
        <TextInput
          placeholder='Apellido Paterno'
          style={styles.input}
          onChangeText={(value)=>capturandoInput(value,'apellidop')}
          value={persona.apellidop}
        />
        <TextInput
          placeholder='Apellido Materno'
          style={styles.input}
          onChangeText={(value)=>capturandoInput(value,'apellidom')}
          value={persona.apellidom}
        />
        <TextInput
          placeholder='Documento de Identidad'
          style={styles.input}
          onChangeText={(value)=>capturandoInput(value,'ci')}
          value={persona.ci}
        />
        <Button
        color="blue"
        title='Actualizar Usuario'
            style={styles.boton}
            onPress={()=>actualizar(item.id)}
        />
        <Button
        title='Elimiar Usuario'
        color="red"
        onPress={()=>eliminar(item.id)}
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




