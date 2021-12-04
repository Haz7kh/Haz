import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, TextInput, View,Image } from 'react-native';


const SignIn=()=> {
  
 
  var TextInputValue="";
  const handleChangeText = () => console.log(TextInputValue)
  
  return (
    <View style={styles.container}>
      <View style={{backgroundColor:'#765FAF',
      width:390,
      height:90,
      alignItems:"center",
      justifyContent:"center"
      
      }}>
      <Text style={{fontSize:16,fontWeight:"bold"}}> my page</Text>
      </View>
      <View style={{backgroundColor:"#9F8FC7",width:390,height:400,alignItems:"center",
      justifyContent:"center"}}>
        <Image 
      style={{width:100,height:150,margin:10}}
      source={{uri:"https://cdn-japantimes.com/wp-content/uploads/2019/09/p10-schley-helloworld-a-20190919.jpg"}}
      />
        
      <TextInput placeholder="user name"onChangeText={handleChangeText}
     style={{width:200,height:20, backgroundColor:"#e6ffff",}} ></TextInput>


<TextInput placeholder="password"onChangeText={handleChangeText}
     style={{width:200,height:20, backgroundColor:"#e6ffff",margin:10}} ></TextInput>
     
     <Button title="sign in" >

</Button>

      </View>
     
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width:390,
    height:100,
    backgroundColor: '#FAF0E6',
    
  
  },
  
});


export default SignIn
