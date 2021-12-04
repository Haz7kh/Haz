import React from 'react';
import { Text, StyleSheet, View, Button, Image } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={{backgroundColor:"#fccc",width:400,height:600}}>
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
        source={{ uri:"https://ichef.bbci.co.uk/news/976/cpsprodpb/D34A/production/_112809045_kid.chair.jpg"}}  
      
      />
       <Image
        style={{width:400,height:400,alignItems:"center",marginTop:-55}}
        source={{
          uri: 'https://ichef.bbci.co.uk/news/976/cpsprodpb/D34A/production/_112809045_kid.chair.jpg',
        }}
      />
     
     
      <View style={styles.btn}>
      <Button
        onPress={() => navigation.navigate('Login')}
        
        title="sign in"
      />
      
       
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    fontWeight:"bold",
    marginTop:7,
    borderWidth:1,
    padding:10,
    marginLeft:0,
    width:400,
    height:50,
    backgroundColor:"coral"

    
    
  },
  btn:{
    backgroundColor:"coral",
   width:150,
   height:50,
   margin:40,
   marginLeft:120,
   alignItems:"center"
  }
});

export default HomeScreen;
