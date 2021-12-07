import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  ImageBackground,
  resizeMode,
  TouchableOpacity,
} from "react-native";
import { useState } from "react";

{
  /*
      #514F59 grå 
      #70A288 grön
      #EAE1DF vit
      #E57A44 orange
      #D36135 mörkorange
      */
}

const CryptoCurrencies = () => {
  const [buttonTXT, setButtonTXT] = useState("Ändra från DOLLAR till SEK");
  const [rate, setRate] = useState(9.05);
  const [currencies, setCurrencies] = useState({
    BTC: "$" + 57000,
    ETH: "$" + 4333,
    LRC: "$" + 2.93,
    SOL: "$" + 206,
    ADA: "$" + 1.58,
    DOGE: "$" + 0.212,
  });

  const [textColor, setTextColor] = useState("");
  const setTextToWhite = () => setTextColor("#70A288");
  // const [color, setColor] = useState([]);
 

  const convertCurrencies = () => {
    let dict = { ...currencies };
    for (const [key, value] of Object.entries(dict)) {
      if (value.charAt(0) === "$") {
        dict[key] = parseFloat(value.substring(1)) * rate + " kr";
      } else if (value.charAt(0) !== "$") {
        dict[key] = "$" + parseFloat(value) / rate;
      }
    }
    setCurrencies(dict);
  };

  const bundle = () => {
    convertCurrencies();
    if (buttonTXT === "Ändra från DOLLAR till SEK") {
      setButtonTXT("Ändra från SEK till DOLLAR");
    }
    if (buttonTXT === "Ändra från SEK till DOLLAR") {
      setButtonTXT("Ändra från DOLLAR till SEK");
    }
  };

  const image = {
    uri: "https://images.pexels.com/photos/730564/pexels-photo-730564.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
  };

  const round = (numText) => {
    let res = "";
    if (numText.charAt(0) === "$") {
      res =
        Math.round(
          (parseFloat(numText.substring(1)) * rate + Number.EPSILON) * 100
        ) /
          100 +
        " kr";
    } else if (numText.charAt(0) !== "$") {
      res =
        "$" +
        Math.round((parseFloat(numText) / rate + Number.EPSILON) * 100) / 100;
    }
    return res;
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <View style={styles.top}>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: "5rem",
              color: "#D36135",
              textShadowColor: "rgba(0, 0, 0, 0.75)",
              textShadowOffset: { width: -1, height: 1 },
              textShadowRadius: 10,
            }}
          >
            Crypto Side
          </Text>
        </View>
        <View style={styles.middle}>
          <View style={styles.insideMiddle}>
            <View style={styles.insideMiddleLeft}>
              <Text style={[styles.textStyle, { color: "#70A288" }]}>
                USD/SEK
              </Text>
              <Text style={[styles.textStyle, { color: textColor }]}>
                Bitcoin
              </Text>
              <Text style={[styles.textStyle, { color: textColor }]}>
                Ethereum
              </Text>
              <Text style={[styles.textStyle, { color: textColor }]}>
                Loopring
              </Text>
              <Text style={[styles.textStyle, { color: textColor }]}>
                Solana
              </Text>
              <Text style={[styles.textStyle, { color: textColor }]}>
                Cardano
              </Text>
              <Text style={[styles.textStyle, { color: textColor }]}>
                Dogecoin
              </Text>
            </View>
            <View style={styles.insideMiddleRight}>
              <Text style={[styles.textStyle, { color: "#70A288" }]}>
                {rate + " kr"}{" "}
              </Text>
              <Text style={styles.textStyle}>{round(currencies.BTC)}</Text>
              <Text style={styles.textStyle}>{round(currencies.ETH)}</Text>
              <Text style={styles.textStyle}>{round(currencies.LRC)}</Text>
              <Text style={styles.textStyle}>{round(currencies.SOL)}</Text>
              <Text style={styles.textStyle}>{round(currencies.ADA)}</Text>
              <Text style={styles.textStyle}>{round(currencies.DOGE)}</Text>
            </View>
          </View>
        </View>
        <View style={styles.bottom}>
          {/* <Text>Bottom</Text> */}
          {/* <Button
            title="Ändra färg på namnen"
            onPress={setTextToWhite}
          ></Button> */}
          {/* <TouchableOpacity style={styles.button} onPress={setTextToWhite}>
            <Text style={styles.buttonText}>Ändra färg på namnen</Text>
          </TouchableOpacity> */}
          {/* <Button title="Ändra från DOLLAR till SEK" onPress={bundle}></Button> */}
          <TouchableOpacity style={styles.button} onPress={bundle}>
            <Text style={styles.buttonText}>{buttonTXT}</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
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
    
    justifyContent: "space-around",
    width:"100%",
    backgroundColor:randomRGB(),
    
    
    padding: "20px",
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  top: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  middle: {
    flex: 2,
    padding: "10px",
    alignItems: "center",
  },
  insideMiddle: {
    width: "100%",
    flex: 1,
    padding: "10px",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    backgroundColor: "#EAE1DF",
    borderRadius: 15,
  },
  insideMiddleLeft: {
    flex: 1,
  },
  insideMiddleRight: {
    flex: 1,
  },
  bottom: {
    flex: 1,
    padding: 10,
  },
  textStyle: {
    fontWeight: "bold",
    fontSize: 12,
  },
  button: {
    backgroundColor: "#70A288",
    padding: 5,
    alignItems: "center",
  },
  buttonText: {
    fontSize: 30,
    color: "#EAE1DF",
  },
});
{
  /*
      #514F59 grå 
      #70A288 grön
      #EAE1DF vit
      #E57A44 orange
      #D36135 mörkorange
      */
}

export default CryptoCurrencies;
