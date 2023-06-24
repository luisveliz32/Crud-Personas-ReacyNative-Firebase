import  React ,{useState,useEffect} from 'react';
import { View, TextInput,StyleSheet,Button ,Alert,Text} from 'react-native';
import Constants from 'expo-constants'; 

export default  function ListarUsuarios({navigation}){
  
  
  return(
    
    <View style={styles.container} >
            <Text>Listart Usuarios</Text>
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





