import React from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView } from 'react-native';
import Actu from './Actu'

export default function ViewActus(){

    return(
<View style={{flex: 1,alignItems: "center"}}>
    <ScrollView alwaysBounceVertical showsVerticalScrollIndicator={false} >
        <Actu/>
        <Actu/>
        <Actu/>
        <Actu/>
        <Actu/>
        <Actu/>

    </ScrollView>
</View>
    )
}