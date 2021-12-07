//ContactComponent component from group 7
import React from "react";
import { Button, StyleSheet, Switch, Text, View, Model, ScrollView, Platfrom, SafeAreaView, TextInput, Image } from "react-native";

const Contact = (navigation) => {
   

    const [number1, onChangeNumber1] = React.useState(null);
    const [number2, onChangeNumber2] = React.useState(null);
    const [number3, onChangeNumber3] = React.useState(null);

    return ( 
        <View style = {
            { width: '15%', height: '50%', backgroundColor: '#EAE1DF ' }
        } >
        <View style = {styles.container} >
     
        <Text style = { styles.title}> Contact Us </Text>  

        <br />


        <View style = {
            { flex: 1, backgroundColor: "#fff" }
        } >
        < TextInput style = { styles.input }
        onChangeText2 = { onChangeNumber1 }
        value = { number1 }
        placeholder = "Enter your Name"
        keyboardType = "numeric" />
        </View>

        <View style = {
            { width: 5, height: 5, backgroundColor: '#fff' }
        }
        />


        <View style = {
            { flex: 1, backgroundColor: "#fff" }
        } >
        <TextInput style = { styles.input }
        onChangeText2 = { onChangeNumber2 }
        value = { number2 }
        placeholder = "Enter your email"
        keyboardType = "numeric" />
        </View>

        <View style = {
            { width: 5, height: 5, backgroundColor: '#fff' }
        }
        />

        <View style = {
            { flex: 1, backgroundColor: "#fff" }
        } >
        <TextInput style = { styles.input3 }
        onChangeText3 = { onChangeNumber3 }
        value = { number3 }
        multiline = { true }
        numberOfLines = { 30 }
        placeholder = "Enter your message"
        keyboardType = "numeric" />
        </View> 
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
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: randomRGB(),
        flexDirection: "column", 
      

    },
    input: {
        backgroundColor: "#fff",
        width: "170px",
        height: "30px",
        borderRadius: 10,
        margin: 15,
        padding: 5,
        borderWidth : 1
    },
    title: {
        fontWeight: "bold",
        fontSize: "25px",
        color: "#514F59",
        margin: 3,
        padding: 3
    },
    input3: {
        borderWidth: 1,
        height: 200,
        textAlignVertical: 'top',
        backgroundColor: "#fff",
        width: "170px",
        height: "100px",
        borderRadius: 10,
        padding: 10,
        margin:12,
    },
});

export default Contact;