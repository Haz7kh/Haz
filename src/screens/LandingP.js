//Landing P component from group 7

import { StatusBar } from "expo-status-bar";
import React, { cloneElement } from "react";

import {
    StyleSheet,
    Text,
    TextInput,
    View,
    Button,
    Image,
    Alert,
} from "react-native";

import { useState } from "react"; //

const LandingP = ({navigation}) => {
    const [name, setName] = useState("Name");
    const [email, setEmail] = useState("Email");

    return ( 
        <View style = { styles.container } >
        <View style = { styles.header } >
        {/* <Image style = { styles.banner }
        source = { require("../assets/flowers.png") }
        />  */}
        <Text style = { styles.title } > Subscribe to our Newsletter! </Text>
         </View> 
         <View style = { styles.inputBox } >
        <TextInput style = { styles.input }
        placeholder = "Name"
        onChangeText = {
            (text) => setName(text) }
        /> 
        <TextInput style = { styles.input }
        placeholder = "Email"
        onChangeText = {
            (text2) => setEmail(text2) }
        /> 
        </View>

        <View>
        <Button title = "Subscribe" color = "#E57A44"
        onPress = {
            () =>
            alert(
                "Thanks for subscribing " +
                name +
                "! The E-mail address you entered was " +
                email
            )
        } >
        </Button> 
        </View>

        <StatusBar style = "auto" />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#514F59",
        width: "100%",
        
        alignItems: "center",
        justifyContent: "center",
    },
    header: {
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        color: "#000",
        backgroundColor: "#514F59",
    },
    title: {
        fontWeight: "bold",
        fontSize: "30px",
        backgroundColor: "#514F59",
        color: "#EAE1DF",
        margin: 3,
        padding: 10
    },
    inputBox: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#514F59",
        padding:15
    },

    input: {
        backgroundColor: "#fff",
        width: "170px",
        height: "25px",
        borderRadius: 10,
        margin: 15,
        padding: 10,
        borderWidth : 1
    },
    // button: {
    //     backgroundColor:"#E57A44",
        
    // }
    // banner: {
    //     width: "300px",
    //     height: "55px",
    //     backgroundColor: "#514F59",
    // },
});

export default LandingP;