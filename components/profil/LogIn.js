import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView, TouchableHighlight, TouchableOpacity } from 'react-native';
import {Input, Button} from 'react-native-elements';
import firebase from '../utils/firebase'

export default function LogIn(props) {
    const [email,setEmail] = useState('');
    const [password, setPassword] = useState('');

    function login(){
        props.login(email,password);
    }

    return (
        <View style={{flex: 1,width: '75%', alignItems: 'flex-start'}}>
            <Input placeholder='Email' keyboardType='email-address' autoCapitalize='none' autoCompleteType='email' textContentType='emailAddress' onChangeText = {(str) => setEmail(str)}/>
            <Input placeholder='Mot de passe' autoCapitalize='none' secureTextEntry={true} autoCompleteType="password" textContentType='password' onChangeText = {(str) => setPassword(str)}/>
            <Button title= 'Se connecter' onPress={() => login()}/>
        </View>

    )
}