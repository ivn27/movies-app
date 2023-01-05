import {StyleSheet, Text, View, Button, Image} from 'react-native';

import test from '../data/max.jpg'

import ButtonSelected from './ButtonSelected';
import ButtonNormal from './ButtonNormal';

export default function ComingSoon() {
    return (
      <View style={styles.container}>
        <Text style={styles.textHeader}>Coming Soon</Text>
        <Image source={test} style={styles.image}/>
        <View style={styles.buttonArea}>
            <ButtonSelected title='All'/>
            <ButtonNormal title='Action'/>
            <ButtonNormal title='Comedy'/>
            <ButtonNormal title='Anime'/>
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    textHeader: {
        color: 'white',
        fontSize: 30,
        fontWeight: '400',
        paddingBottom: 15,
    },
    textCurrent: {
        color: '#d51330',
        fontSize: 20,
        fontWeight: '400',
        marginHorizontal: 25,
    },
    image: {
        width: 300,
        height: 150,
        borderRadius: 24,
    },
    buttonArea: {
        flexDirection: 'row',
        marginVertical: 15,
    }
})