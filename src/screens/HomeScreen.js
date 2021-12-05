import React from 'react';
import { Text, StyleSheet, View, Button, Image, TouchableOpacity} from 'react-native';
import { useState } from 'react';

const HomeScreen = ({ navigation }) => {
  const [color, setColor] = useState([]);
  return (
    <View style={{backgroundColor:randomRGB(),width:400,height:600}}>
      <View style={styles.textHome}>
      <Text style={{fontSize: 20,
    fontWeight:"bold",}}>Home</Text>
      </View>
       <Image
        style={{width:400,height:200,alignItems:"center",marginTop:-5}}
        source={{
          uri: 'https://ichef.bbci.co.uk/news/976/cpsprodpb/D34A/production/_112809045_kid.chair.jpg',
        }}
      />
     
     
      
    <View style={{height:200,width:200,border:2}}>
      <Button
        onPress={() => navigation.navigate('CrypF')}
        
        title="Crypto currency" color={randomRGB()}
      />


<Button
        onPress={() => navigation.navigate('LandEl')}
        
        title="SUBSCRIBE" color={randomRGB()}
      />

<Button
        onPress={() => navigation.navigate('contactEl')}
        
        title="CONTACT" color={randomRGB()}
      />

    </View>

    
    <View>
    </View>
    
      <Button
      style={styles.btn}
        onPress={() => {
          setColor([...color,randomRGB()])
        }}
        
        title="change the back ground" color={randomRGB()}
      />
      <View style={styles.textAbout}>
      <TouchableOpacity 
         onPress ={()=> navigation.navigate('About')}
      >

            <Text> About Us!</Text>
          </TouchableOpacity>
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
  textHome: {
    fontSize: 30,
    fontWeight:"bold",
    marginTop:0,
    borderWidth:1,
    padding:10,
    
   

    
    
  },
  textAbout: {
    fontSize: 30,
    fontWeight:"bold",
    borderWidth:1,
    padding:10,
    marginLeft:0,
    marginTop:81,
    backgroundColor:"#9aa8b5",

    
    
  },
  btn:{
   
    
    width:400,
   height:80,
    marginBottom:40,
    marginLeft:120,
    alignItems:"center",
   justifyContent:"center",
     
    
  }
});

export default HomeScreen;
