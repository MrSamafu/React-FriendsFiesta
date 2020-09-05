import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import { FontAwesome } from "@expo/vector-icons";


export default function Actu(){

    return(
        <View style={{backgroundColor: "#F1F1F1", width: "95%" , borderRadius: 10,marginVertical: 2}}>
            <View style={{display: 'flex',alignItems: 'center'}}>
                <Image style={{width: 250, height: 250, marginVertical: 10}} source={{
                uri: 'https://reactnative.dev/img/tiny_logo.png',
                }}/>
            </View>
            <Text style={{marginHorizontal: 10, marginVertical:10}}>Soirée blabla</Text>
            <View style={{display: 'flex', justifyContent:"space-around", flexDirection: 'row'}}>
                <TouchableOpacity style={{borderColor: '#C5C5C5', borderWidth:1, width: '50%',display: 'flex', alignItems: 'center', borderBottomStartRadius: 10, borderTopColor: "#F1F1F1"}}>
                    <FontAwesome name='heart-o' size={20}/>
                </TouchableOpacity>
                <TouchableOpacity style={{borderColor: '#C5C5C5', borderWidth:1, width: '50%',display: 'flex', alignItems: 'center', borderBottomEndRadius: 10, borderTopColor: "#F1F1F1"}}>
                    <FontAwesome name='comments' size={20}/>
                </TouchableOpacity>
            </View>
        </View>
    )
}