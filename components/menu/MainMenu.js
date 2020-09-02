import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView, TouchableHighlight, TouchableOpacity } from 'react-native';
import { FontAwesome } from "@expo/vector-icons";

export default function MainMenu(props){
    const [page, setPage] = useState('Actus');

function navigate(str){
    setPage(str);
    props.navigate(page);
}

    return(
        <View style={{ flex: 1, flexDirection: "row", height: 50, backgroundColor:"#0A565E"}}>
            <TouchableOpacity activeOpacity={0.5} underlayColor="#FEFEFE" onPress={()=>navigate('Actus')}>
                <Text style={{fontSize:30, marginHorizontal: 10 , color: 'white'}}>Actus</Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.5} underlayColor="#FEFEFE" onPress={()=>navigate('Calendrier')}>
                <Text style={{fontSize:30, marginHorizontal: 10 , color: 'white'}}>Calendrier</Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.5} underlayColor="#FEFEFE" onPress={()=>navigate('Communauté')}>
                <Text style={{fontSize:30, marginHorizontal: 10 , color: 'white'}}>Communauté</Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.5} underlayColor="#FEFEFE" onPress={()=>navigate('Chat')}>
                <Text style={{fontSize:30, marginHorizontal: 10 , color: 'white'}}>Chat</Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.5} underlayColor="#FEFEFE" onPress={()=>navigate('Profil')}>
                <Text style={{fontSize:30, marginHorizontal: 10 , color: 'white'}}>Profil</Text>
            </TouchableOpacity>
        </View>
    )
}