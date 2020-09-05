import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView, TouchableHighlight, TouchableOpacity } from 'react-native';
import {Input, Button} from 'react-native-elements';
import firebase from '../utils/firebase'

export default function LogIn(props) {
    
    function navigate(str){
        props.navigate(str);
    }

    return (
        <View style={{flex: 1,width: '75%', alignItems: 'flex-start'}}>
            <Input placeholder='Email'/>
            <Input placeholder='Mot de passe'/>
            <Button title= 'Se connecter' onPress={() => navigate('Actus')}/>
        </View>

    )
}