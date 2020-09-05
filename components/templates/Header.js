import React from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView } from 'react-native';
import { FontAwesome } from "@expo/vector-icons";
import MainMenu from '../menu/MainMenu';

export default function Header(props) {

    return (
        <View style={{flex:0.2, heignt: 100}}>
            <View style={{ flex: 1, justifyContent: 'space-between', flexDirection: "row", alignItems: 'center', backgroundColor: '#0A565E', marginTop: 30 }}>
                <FontAwesome name="bars" size={35} color='white' style={{ marginHorizontal: 5 }} />
                <FontAwesome name="search" size={35} color='white' style={{ marginHorizontal: 5 }} />
            </View>
            <View style={{height: 50}}>
                <ScrollView horizontal bounce showsHorizontalScrollIndicator={false} style={{backgroundColor: '#0A565E'}}>
                    <MainMenu navigate={props.navigate} />
                </ScrollView>
            </View>
        </View>
    )
}
