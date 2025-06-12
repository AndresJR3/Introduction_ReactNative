import React, { useState } from "react";
import { StyleSheet, Text, View, Button, TouchableOpacity} from "react-native";

/* Creamos la funcion */
export default function Contador() {
    const [count, setCount]  = React.useState(0);
    return(
        <View style={styles.container}>
            <Text>Contador: {count}</Text>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={[styles.button, styles.incrementButton]} onPress={() => setCount(count + 1)}>
                    <Text style={styles.buttonText}>+</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button, styles.decrementButton]} onPress={() => setCount(count - 1)}>
                    <Text style={styles.buttonText}>-</Text>
                </TouchableOpacity>
            </View>
        </View>
    )

}

/* Creamos los estilos */
const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#f0f0f0',
        alignItems: 'center',
        justifyContent: 'center'
    },
    text:{
        color: 'blue',
        fontSize: 20
    },
    title:{
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#333'
    },
    buttonContainer:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        paddingHorizontal: 30
    },
    button:{
        backgroundColor: '#007bff',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        marginHorizontal: 5
    },
    buttonText:{
        color: '#fff',
        fontSize: 16,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    incrementButton:{
        backgroundColor: '#28a745'
    },
    decrementButton:{
        backgroundColor: 'red'
    }


});