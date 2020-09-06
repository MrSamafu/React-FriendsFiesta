import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView, TouchableHighlight, TouchableOpacity } from 'react-native';
import firebase from '../utils/firebase';
import LogIn from './LogIn';
import SignIn from './SignIn';

export default function Connect(props) {
    let db = firebase.firestore();
    const [accountState, setAccountState] = useState('LogIn');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [firstName, setFirstName] = useState('');
    const [pseudo, setPseudo] = useState('');

    function signIn(_email, _password, _name, _firstName, _pseudo) {
        setEmail(_email);
        setPassword(_password);
        setName(_name);
        setFirstName(_firstName);
        setPseudo(_pseudo);
        createAccount();
    }
    function login(_email,_password) {
        setEmail(_email);
        setPassword(_password);

        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then((response) => {
                const uid = response.user.uid
                const usersRef = db.collection('users')
                usersRef
                    .doc(uid)
                    .get()
                    .then(firestoreDocument => {
                        if (!firestoreDocument.exists) {
                            alert("Aucun compte ne correspond")
                            return;
                        }
                        const user = firestoreDocument.data()
                        props.navigate('MyProfil', {user})
                    })
                    .catch(error => {
                        alert(error)
                    });
            })
            .catch(error => {
                alert(error)
            })
    }
    function createAccount() {
        //envoyer les données sur Firebase
        firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then((response) => {
                const uid = response.user.uid
                const data = {
                    id: uid,
                    email,
                    name,
                    firstName,
                    pseudo
                };
                const usersRef = db.collection('users')
                usersRef
                    .doc(uid)
                    .set(data)
                    .then(() => {
                        props.navigate('MyProfil', {user: data})
                    })
                    .catch((error) => {
                        alert(error)
                    });
            })
            .catch((error) => {
                alert(error)
            });
    }
    function accountType(str) {
        setAccountState(str);
    }

    return (
        <View style={{ flex: 0.7 }}>
            <View style={{ flex: 0.2, justifyContent: 'space-around', flexDirection: 'row' }}>
                <TouchableOpacity onPress={() => accountType('LogIn')} style={{ display: 'flex', justifyContent: 'center', flexDirection: 'row', alignItems: 'center', backgroundColor: 'grey', width: '50%', height: 50 }}>
                    <Text>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => accountType('SignIn')} style={{ display: 'flex', justifyContent: 'center', flexDirection: 'row', alignItems: 'center', backgroundColor: 'grey', width: '50%', height: 50 }}>
                    <Text>SignIn</Text>
                </TouchableOpacity>
            </View>
            <View style={{ flex: 1, alignItems: 'center', }}>
                {accountState === 'LogIn' && <LogIn login={login} />}
                {accountState === 'SignIn' && <SignIn signIn={signIn} />}
            </View>
        </View>
    )
}