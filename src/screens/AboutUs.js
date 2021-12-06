import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const AboutUs = () => {
  const Team = [
    {name:'Ella',key:'1'},
    {name:'Fredrik ',key:'2'},
    {name:'Emair ',key:'3'},
    {name:'Khaled',key:'4'}
  ];

  return (
    <View>
    <FlatList style={{marginLeft:5,marginTop:20,backgroundColor:"coral", height:50,width:150,borderWidth:1}}
         data ={Team} 
         renderItem ={({item})=>{
          return(
              <View style={{ height:50,width:70}}>
                  <Text style={{marginLeft:10}}>{item.name}
              </Text>
              </View>
          
          )
         }
         }/>
         </View>
  );
};



export default AboutUs;
