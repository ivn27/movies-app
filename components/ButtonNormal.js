import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';


import React from 'react';




export default function ButtonNormal({ title }) {
    return (
        <TouchableOpacity
            style={styles.button} 
        >
            <Text style={{color: 'white'}}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#14151b',
        borderColor: '#14151b',
        borderWidth: 1,
        borderRadius: 12,
        padding: 7.5,
        margin: 7.5,
    }
})