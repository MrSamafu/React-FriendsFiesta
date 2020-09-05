import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView, TouchableHighlight, TouchableOpacity } from 'react-native';
import firebase from '../utils/firebase';
import LogIn from './LogIn';
import SignIn from './SignIn';

export default function Connect(props) {
    let db = firebase.firestore();
    const [accountState, setAccountState] = useState('LogIn');
    const [email,setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name,setName] = useState('');
    const [firstName, setFirstName] = useState('');
    const [pseudo,setPseudo] = useState('');

    function logIn(){

    }
    function signIn(_email,_password,_name,_firstName,_pseudo){
        setEmail(_email);
        setPassword(_password);
        setName(_name);
        setFirstName(_firstName);
        setPseudo(_pseudo);
        send();
    }
    function send(){
        //envoyer les données sur Firebase
        db.collection("user").doc().set({
            email: email,
            firstname : firstName,
            name: name,
            password: password,
            pseudo: pseudo
        })
        .then(function() {
            setEmail('');
        setPassword('');
        setName('');
        setFirstName('');
        setPseudo('');        
        console.log("Document successfully written!");
        props.navigate('Actus');
        })
        .catch(function(error) {
            alert('Erreur')
            console.error("Error writing document: ", error);
        });
    }
    function accountType(str){
        setAccountState(str);
    }

    return (
        <View style={{ flex: 0.7 }}>
            <View style={{flex: 0.2, justifyContent: 'space-around', flexDirection: 'row'}}>
                <TouchableOpacity onPress={() => accountType('LogIn')} style={{display: 'flex', justifyContent: 'center',flexDirection:'row',alignItems:'center' ,backgroundColor: 'grey', width: '50%',height: 50}}>
                    <Text>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => accountType('SignIn')} style={{display: 'flex', justifyContent: 'center',flexDirection:'row',alignItems:'center' ,backgroundColor: 'grey', width: '50%',height: 50}}>
                    <Text>SignIn</Text>
                </TouchableOpacity>
            </View>
            <View style={{flex:1, alignItems: 'center',}}>
                {accountState === 'LogIn' && <LogIn logIn={logIn} />}
                {accountState === 'SignIn' && <SignIn signIn={signIn} />}
            </View>           
        </View>
    )
}