import React from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { useState } from 'react';

const AddBlogText = () => {
  const [oldText, setOldText] = useState("This is my first blog");
  const [newText, setNewText] = useState("");

  return (
    <View style={addBlog.container}>
      <View style={addBlog.section}>
        <Text style={addBlog.header}>My Post</Text>
        <View style={addBlog.section_A}>
          <Text style={addBlog.textCss}>{oldText}</Text>
          <View style={addBlog.inputContainer}>
            <TextInput placeholder="Update Post"
              multiline="true"
              onChangeText={setNewText}
              style={addBlog.textInput}>
            </TextInput>
            <Button color="#70A288" title="Submit" onPress={() => setOldText(newText)}></Button>
          </View>
        </View>
      </View>
    </View >
  );
};
const randomRGB=()=>{
  const red=Math.floor(Math.random()* 256);
  const green=Math.floor(Math.random()* 256);
  const blue=Math.floor(Math.random()* 256); 

return `rgb(${red},${green},${blue});`

};

const addBlog = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: randomRGB(),
    alignItems: "center",
    justifyContent: "center"
  },

  section: {
    width: "90%",
    height: "90%",
    alignItems: "center",
    backgroundColor: "#e3e3e3",
    borderRadius: 30,
  },

  header: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 30,
    color: "#E57A44",
  },

  section_A: {
    width: "70%",
    height: "80%",
    marginTop: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: "#D36135",
    justifyContent: "space-between",
  },

  inputContainer: {
    width: "100%",
    height: "100px",
    justifyContent: "flex-end",
  },

  textInput: {
    width: "100%",
    height: "100%",
    marginTop: 8,
    backgroundColor: "lightblue",
  },
  textCss: {
    fontSize: 18,
  }
});

export default AddBlogText;