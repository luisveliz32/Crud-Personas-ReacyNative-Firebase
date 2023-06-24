import  React ,{useState,useEffect} from 'react';
import { View, TextInput,StyleSheet,Button ,Alert} from 'react-native';
import Constants from 'expo-constants'; 
import appFirebase from '../credenciales'
import {getFirestore,collection,addDoc,getDocs,doc,deleteDoc,getDoc,setDoc} from 'firebase/firestore';

const db=getFirestore(appFirebase);

export default  function NuevoUsuario({navigation}){
  const [persona,setpersona]=useState(
    {
      nombre:'',
      apellidop:'',
      apellidom:'',
      ci:'',
      edad:'',
      sexo:''
    }
  );
  const caturandoInput=(value,name)=>{
    setpersona({...persona,[name]:value})
  }

  const guardarpersona=async()=>{
    //console.log(persona)
    try {
      await addDoc(collection(db,'personas'),{
        ...persona
      })
      console.log('exito');
    } catch (error) {
      console.log(error)
    }
    navigation.navigate('Listar Usuarios')
  }
  
  return(
    
    <View style={styles.container} >
        <TextInput
          placeholder='Nombre'
          style={styles.input}
          onChangeText={(value)=>caturandoInput(value,'nombre')}
          value={persona.nombre}
        />
        <TextInput
          placeholder='Apellido Paterno'
          style={styles.input}
          onChangeText={(value)=>caturandoInput(value,'apellidop')}
          value={persona.apellidop}
         
        />
        <TextInput
          placeholder='Apellido Materno'
          style={styles.input}
          onChangeText={(value)=>caturandoInput(value,'apellidom')}
          value={persona.apellidom}
         
        />
        <TextInput
          placeholder='Carnet de Identidad'
          style={styles.input}
          onChangeText={(value)=>caturandoInput(value,'ci')}
          value={persona.ci}
         
        />
        
        <Button
          title='Guardar Usuario'
          style={styles.boton}
          onPress={guardarpersona}
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





