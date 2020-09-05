import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import Header from './components/templates/Header';
import ViewActu from './components/actus/ViewActus';
import ViewCommunaute from './components/communaute/ViewCommunaute';
import AgendaCalendar from './components/calendar/AgendaCalendar';
import MyProfil from './components/profil/MyProfil';
import Connect from './components/profil/Connect';

//First color #0A565E


export default function App() {
  const [page,setPage] = useState('Connect');
  const [email, setEmail] = useState('');
  const [password,setPassword] = useState('')


  function profil(_email,_password){
    setEmail(email),
    setPassword(password)
  }
  function navigate(str){
    setPage(str)
  }
  return (
    <View style={styles.container}>
      <Header navigate={navigate}/>
        {page === 'Connect' && <Connect navigate={navigate}/>}
        {page === 'Actus' && <ViewActu/>}
        {page === 'Communauté' && <ViewCommunaute/>}
        {page === 'Calendar' && <AgendaCalendar/>}
        {page === 'MyProfil' && <MyProfil/>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
