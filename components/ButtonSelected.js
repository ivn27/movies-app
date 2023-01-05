import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

export default function ButtonSelected({ title }) {
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
        backgroundColor: '#f61434',
        borderColor: '#f61434',
        borderWidth: 1,
        borderRadius: 12,
        padding: 7.5,
        margin: 7.5,
    }
})