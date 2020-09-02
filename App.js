import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import Header from './components/templates/Header';
import ViewActu from './components/actus/ViewActus';
import ViewCommunaute from './components/communaute/ViewCommunaute';

//First color #0A565E


export default function App() {
  const [page,setPage] = useState('Actus');

  function navigate(str){
    setPage(str)
  }
  return (
    <View style={styles.container}>
      <Header navigate={navigate}/>
      {page === 'Actus' && <ViewActu/>}
      {page === 'Communauté' && <ViewCommunaute/>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
