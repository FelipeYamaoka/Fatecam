import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Cabecalho = ({ titulo }) => {
    return (
        <View>
            <Text style={styles.cabecalho}>{titulo}</Text>
        </View>
    )
}

export default Cabecalho;


const styles = StyleSheet.create({
    cabecalho: {
        fontSize: 20,
        paddingTop: 10,
        backgroundColor: "#1A237E",
        color: "#FFF",
        textAlign: 'center',
        fontWeight: 'bold'
    }
})