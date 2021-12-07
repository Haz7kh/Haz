import React, { useState } from "react";
import { StyleSheet, View, Image, TouchableOpacity, Text } from "react-native";

const KlappaHund = (props) => {
  const [klappaHund, setKlappaHund] = useState(true);
  const [buttonTXT, setButtonTXT] = useState("Klappa hund / Ta tillbaka klapp");

  return (
    <View style={styles.container}>
      {klappaHund ? (
        <Image
          style={styles.image}
          source={{
            uri: "https://i.kym-cdn.com/photos/images/newsfeed/001/300/817/89b.jpg",
          }}
        />
      ) : null}

      <TouchableOpacity
        style={[styles.button, { backgroundColor: props.myColor }]}
        onPress={() => setKlappaHund(!klappaHund)}
      >
        <Text style={[styles.buttonText]}>{buttonTXT}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },

  image: {
    width: 250,
    height: 250,
    resizeMode: "center",
  },
  button: {
    backgroundColor: "#70A288",
    padding: 5,
    alignItems: "center",
  },
  buttonText: {
    fontSize: 20,
    color: "#EAE1DF",
  },
});

export default KlappaHund;
