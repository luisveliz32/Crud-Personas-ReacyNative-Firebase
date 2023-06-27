import  React ,{useState,useEffect} from 'react';
import { View, TextInput,StyleSheet,Button ,Alert,Text,FlatList, TouchableOpacity} from 'react-native';
import Constants from 'expo-constants'; 
import appFirebase from '../credenciales'
import {getFirestore,collection,addDoc,getDocs,doc,deleteDoc,getDoc,setDoc} from 'firebase/firestore';

const db=getFirestore(appFirebase);

export default  function ListarUsuarios({navigation}){
  const [listar,setListar]=useState([]);
  
  const optenerlista=async()=>{
    try {
      const lista=await getDocs(collection(db,'personas'));
      const docs=[];
      lista.forEach((doc)=>{
          const {nombre,apellidop,apellidom,ci}=doc.data()
          docs.push(

            {
              id:doc.id,
              nombre,
              apellidop,
              apellidom,
              ci
            }
          )
      })
      setListar(docs);

    } catch (error) {
      console.log(error)
    }
  }
  useEffect(()=>{
    optenerlista();
  },[listar])
  const renderItem=({item})=>{
    return (
      <TouchableOpacity 
        onPress={()=>navigation.navigate('Actualizar Usuario',{item})}
      >
          <View style={{borderBottomWidth:1,
                borderBottomColor:'#ccc',
                padding:5
                }}>
                  <Text style={{fontWeight:'bold'}}>Persona: {item.nombre} {item.apellidop} {item.apellidom}</Text>\
                  <Text>Carnet de Identidad: {item.ci}</Text>
                  <Text>Carnet de Identidad: {item.id}</Text>

          </View>
      </TouchableOpacity>
    )
  }
  return(
    
    <View style={styles.container} >
            <FlatList
            data={listar}
            renderItem={renderItem}
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




