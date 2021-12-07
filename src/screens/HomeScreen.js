import React from 'react';
import { Text, StyleSheet, View, Button, Image, ImageBackground, TouchableOpacity} from 'react-native';
import { useState } from 'react';

const image = { uri: "https://reactjs.org/logo-og.png" };

const HomeScreen = ({ navigation }) => {
  const [color, setColor] = useState([]);
  return (
    //header and the Image
    <View style={styles.container}>

      <ImageBackground source={image} resizeMode="cover" style={styles.headerImage}>
      <View style={styles.textHome}>
      
      <Text style={{color: "white",textAlign: "center", fontSize: 20, fontWeight:"bold",}}>OUR APP</Text>      
    <View style={styles.textAbout}>
      <TouchableOpacity 
        onPress ={()=> navigation.navigate('About')}
      > <Text>About Us!</Text>
      </TouchableOpacity>

    </View>

    </View>
      </ImageBackground>

      
     
     <Text style={styles.menuText}>MENU:</Text>
      
    <View style={styles.buttonContainer}>
      <Button
        onPress={() => navigation.navigate('CrypF')}
        
        title="Crypto Currency" color={randomRGB()}
      />
      </View>

<View style={styles.buttonContainer}>
<Button
        onPress={() => navigation.navigate('LandEl')}
        
        title="SUBSCRIBE" color={randomRGB()}
      />
</View>


<View style={styles.buttonContainer}>
<Button
        onPress={() => navigation.navigate('AddBlohE2')}
        
        title="Add Blog" color={randomRGB()}
      />
</View>

<View style={styles.buttonContainer}>
<Button
        onPress={() => navigation.navigate('contactEl')}
        
        title="CONTACT" color={randomRGB()}
      />
</View>

<View style={styles.buttonContainer}>
<Button
        onPress={() => navigation.navigate('ContactE2')}
        
        title="CONTACT 2" color={randomRGB()}
      />
</View>

<View style={styles.buttonContainer}>
<Button
        onPress={() => navigation.navigate('HundF')}
        
        title="KlappaHund" color={randomRGB()}
      />
</View>


    

  
    <View style={styles.btn}>
    <Button
        onPress={() => {
          setColor([...color,randomRGB()])
        }}
        
        title="change color buttons" color={randomRGB()}
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
  textHome: {
    fontSize: 30,
    fontWeight:"bold",
    marginTop:50,
    padding:50,
    width: "100%",

  },
  textAbout: {
    fontSize: 50,
    width: 100,
    alignSelf: "flex-end",
    fontWeight:"bold",
    borderWidth:1,
    padding:10,
    marginLeft:0,
    marginTop:81,
    backgroundColor:"#9aa8b5",
    textAlign: "center",
    
  },
  btn:{
    width:200,
   height:80,
   alignSelf: "center",
   marginTop: 20,

  },
  container: {
    backgroundColor: "#514F59",
    width: "100%",
    height: "100%",
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: "center",
    },
  buttonContainer: {

    padding: 15,
    flexDirection: "column",

  },
  menuText: {
    fontSize: 30,
    marginTop: 30,
    color: "white",
    textAlign: "center",
  },
  headerImage: {
    width: "100%",
    }
  
});

export default HomeScreen;
