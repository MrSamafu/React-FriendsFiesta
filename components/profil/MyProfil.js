import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { Card, Avatar } from 'react-native-elements';
import { FontAwesome } from "@expo/vector-icons";


export default function MyProfil(props) {

    return (
        <View style={{ flex: 1, alignItems: 'center', marginVertical: 5 }}>
            <View style={{ flex: 0.3, flexDirection: 'row', justifyContent: 'space-around', backgroundColor: '#F1F1F1', borderRadius: 15, width: '95%', alignItems: 'center' }}>
                <View>
                    <Avatar
                        rounded
                        size={150}
                        source={{
                            uri:
                                'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
                        }}
                    />

                </View>
                <View>
                    <Text style={styles.profilText}>{props.name}</Text>
                    <Text style={styles.profilText}>{props.firstName}</Text>
                    <Text style={styles.profilText}>{props.pseudo}</Text>
                    <Text style={styles.profilText}>{props.email}</Text>
                    <Text style={styles.profilText}>PhoneNumber</Text>
                </View>
            </View>
            <View style={{display: 'flex', alignItems: 'flex-end',width: '95%'}}>
                <TouchableOpacity style={{ borderColor: '#C5C5C5', borderWidth: 1, display: 'flex', alignItems: 'center', borderBottomEndRadius: 10, borderTopColor: "#F1F1F1" }}>
                    <FontAwesome name='pencil' />
                </TouchableOpacity>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    profilText: {
        marginVertical: 5
    }
})
