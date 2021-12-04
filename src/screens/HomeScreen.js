import React from 'react';
import { Text, StyleSheet, View, Button, Image, } from 'react-native';
import { useState } from 'react';

const HomeScreen = ({ navigation }) => {
  const [color, setColor] = useState([]);
  return (
    <View style={{backgroundColor:randomRGB(),width:400,height:600}}>
      <View style={styles.text}>
      <Text style={{fontSize: 20,
    fontWeight:"bold",}}>Home</Text>
      </View>
      <View style={{width:140,height:100,marginTop:-45,marginLeft:255}}>
      <Button
      
      title="About us !"
      onPress={() => navigation.navigate('About')}
      
      
    />
      </View>
      
       <Image
        style={{width:400,height:200,alignItems:"center",marginTop:-55}}
        source={{
          uri: 'https://ichef.bbci.co.uk/news/976/cpsprodpb/D34A/production/_112809045_kid.chair.jpg',
        }}
      />
     
     
      
    <View style={{height:40,width:160}}>
      <Button
        onPress={() => navigation.navigate('CrypF')}
        
        title="Crypto currency"
      />
      
       
    </View>
    <View style={styles.btn}>
      <Button
        onPress={() => {
          setColor([...color,randomRGB()])
        }}
        
        title="change the back ground"
      />
      
       
    </View>

    </View>
  );
  
};
const randomRGB=()=>{
  const red=Math.floor(Math.random()* 256);
  const green=Math.floor(Math.random()* 256);
  const blue=Math.floor(Math.random()* 256); 

return `rgb(${red},${green},${blue});`

};
const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    fontWeight:"bold",
    marginTop:0,
    borderWidth:1,
    padding:10,
    marginLeft:0,
    width:400,
    height:50,
    backgroundColor:"#F9F4F4",

    
    
  },
  btn:{
    color:"white",
    backgroundColor:"#D6E9D8",
   width:170,
   height:80,
   margin:40,
   marginLeft:120,
   alignItems:"center",
   borderWidth:2,
   borderRadius:20,
  }
});

export default HomeScreen;
