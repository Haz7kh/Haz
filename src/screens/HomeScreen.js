import React from 'react';
import { Text, StyleSheet, View, Button, Image, TouchableOpacity} from 'react-native';
import { useState } from 'react';

const HomeScreen = ({ navigation }) => {
  const [color, setColor] = useState([]);
  return (
    //header and the Image
    <View style={{backgroundColor:randomRGB(),width:400,height:650}}>
      <View style={styles.textHome}>
      <Text style={{fontSize: 20,
    fontWeight:"bold",}}>MY APP</Text>
      </View>
       <Image
        style={{width:400,height:200,alignItems:"center",marginTop:-5}}
        source={{
          uri: 'https://ichef.bbci.co.uk/news/976/cpsprodpb/D34A/production/_112809045_kid.chair.jpg',
        }}
      />
     
     <Text> THE MENU:</Text>
      
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
        onPress={() => navigation.navigate('AddBlohE2')}
        
        title="Add Blog" color={randomRGB()}
      />

<Button
        onPress={() => navigation.navigate('contactEl')}
        
        title="CONTACT" color={randomRGB()}
      />

<Button
        onPress={() => navigation.navigate('ContactE2')}
        
        title="CONTACT2" color={randomRGB()}
      />

    </View>

    
    <View>
    </View>
    <View style={styles.btn}>
    <Button
        onPress={() => {
          setColor([...color,randomRGB()])
        }}
        
        title="change the back ground" color={randomRGB()}
      />
      
    </View>
     
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
   
    
    width:200,
   height:80,
   marginTop:20,
   
    
     
    
  }
});

export default HomeScreen;
