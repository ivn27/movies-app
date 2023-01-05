import {StyleSheet, Text, View, Button} from 'react-native';


import React from 'react';



export default function Header() {
    return (
      <View style={styles.container}>
        <Text style={styles.textHeader}>Series</Text>
        <Text style={styles.textCurrent}>Film</Text>
        <Text style={styles.textHeader}>My List</Text>
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 40,
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 50,
        marginBottom: 15,
    },
    textHeader: {
        color: 'white',
        fontSize: 20,
        fontWeight: '400',
        marginHorizontal: 25,
    },
    textCurrent: {
        color: '#d51330',
        fontSize: 20,
        fontWeight: '400',
        marginHorizontal: 25,
    }
})