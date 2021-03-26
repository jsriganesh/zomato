import React from "react";
import { View,Text, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/Entypo';

export const ShowTopLocation = ()=>{

    var location = "Bangalore, India"

    return(
        <TouchableOpacity style={{flexDirection:'row',paddingVertical:7,alignItems:'center'}}>
            <Icon name="location" size={20} color="black" />
            <Text style={{ borderBottomColor: "black", borderBottomWidth:1.5, fontSize:18,fontFamily:'sans-serif-medium',marginHorizontal:10,}}>{location}</Text>
        </TouchableOpacity>
    )
}