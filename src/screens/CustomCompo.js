import React, { useState } from "react";
import { StyleSheet, Text, View, Button, ScrollView } from "react-native";

const CustomCompo = () => {
  const [buttonPress, setButtonPress] = useState(false);
  const [buttonText, setButtonText] = useState("Contact Us");

  function pressEvent() {
    setButtonPress(!buttonPress);
    if (buttonPress == true) {
      setButtonText("Contact Us");
    } else {
      setButtonText("Close");
    }
  }

  return (
    <View style={compstyles.papa}>
      <Button color="#E57A44" title={buttonText} onPress={pressEvent} />
      {buttonPress ? (
        <View style={compstyles.yungboi}>
          <ScrollView style={compstyles.miniboi}>
            <Text style={compstyles.boldbois}>
              Telefon:
              <Text style={compstyles.smolbois}> +46(0)70 123 1232</Text>
            </Text>
            <Text style={compstyles.boldbois}>
              Epost:<Text style={compstyles.smolbois}> abc@abc.se </Text>
            </Text>
            <Text style={compstyles.boldbois}>
              Visit us:
              <Text style={compstyles.smolbois}> Liljeholmen, Vårdhuset</Text>
            </Text>
            <Text style={compstyles.boldbois}>For more information</Text>
            <Text>Visit our webpage www.whereismypet.com</Text>
          </ScrollView>
        </View>
      ) : null}
    </View>
  );
};
const randomRGB=()=>{
  const red=Math.floor(Math.random()* 256);
  const green=Math.floor(Math.random()* 256);
  const blue=Math.floor(Math.random()* 256); 

return `rgb(${red},${green},${blue});`

};

const compstyles = StyleSheet.create({
  papa: {
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "#514F59",
    width: "100%",
    height: "40%",
  },
  yungboi: {
    backgroundColor: randomRGB(),
    width: "auto",
    height: "auto",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  miniboi: {
    backgroundColor: "#EAE1DF",
    marginTop: 10,
    padding: 20,
    borderRadius: 10,
  },
  boldbois: {
    fontWeight: "700",
  },
  smolbois: {
    fontWeight: "normal",
  },
});

export default CustomCompo;
