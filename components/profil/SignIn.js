import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView, TouchableHighlight, TouchableOpacity } from 'react-native';
import {Input, Button} from 'react-native-elements';
import  firebase from '../utils/firebase'

export default function SignIn(props){
    const [email,setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password2,setPassword2] =useState('');
    const [name,setName] = useState('');
    const [firstName, setFirstName] = useState('');
    const [pseudo,setPseudo] = useState('');


    function sendDataToConnect(){
        if(password !== password2){
            alert("Confimation du mot de passe différent");
        }
        else{
            props.signIn(email,password,name,firstName,pseudo);
        }
    }
    return(
        <View style={{flex: 1,width: '75%'}}>
            <Text>SignIn</Text>
            <Input placeholder='Email' onChangeText={(str)=>setEmail(str)}/>
            <Input placeholder='Nom' onChangeText={(str)=>setName(str)}/>
            <Input placeholder='Prenom' onChangeText={(str)=>setFirstName(str)}/>
            <Input placeholder='Pseudo' onChangeText={(str)=>setPseudo(str)}/>
            <Input placeholder='Mot de passe' onChangeText={(str)=>setPassword(str)}/>
            <Input placeholder='Verification du mot de passe' onChangeText={(str)=>setPassword2(str)}/>
            <Button title="Créer son compte" onPress={() => sendDataToConnect()}/>
        </View>
    )
}