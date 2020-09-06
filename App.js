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
  const [name,setName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [pseudo,setPseudo] = useState('');

  function profil(_email,_password){
    setEmail(email),
    setPassword(password)
  }
  function navigate(str,data){
    if(data !== null){
      setEmail(data.user.email);
      setFirstName(data.user.firstName);
      setName(data.user.name);
      setPseudo(data.user.pseudo);
    
    }
    setPage(str)
  }
  return (
    <View style={styles.container}>
      <Header navigate={navigate}/>
        {page === 'Connect' && <Connect navigate={navigate}/>}
        {page === 'Actus' && <ViewActu/>}
        {page === 'Communauté' && <ViewCommunaute/>}
        {page === 'Calendar' && <AgendaCalendar/>}
        {page === 'MyProfil' && <MyProfil email={email} name={name} firstName={firstName} pseudo={pseudo}/>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
