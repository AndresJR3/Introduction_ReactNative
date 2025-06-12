import React from "react";
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity} from "react-native";

export default function Calculadora() {

    /* La función que nos ayuda a programar todo */
    const [valor1, setValor1] = React.useState('');
    const [valor2, setValor2] = React.useState('');
    const [resultado, setResultado] = React.useState('');

    const sumar = () => {
        const res = parseFloat(valor1) + parseFloat(valor2);
        setResultado(res.toString()); 
    };

    const restar = () => {
        const res = parseFloat(valor1) - parseFloat(valor2);
        setResultado(res.toString()); 
    };

    const multiplicar = () => {
        const res = parseFloat(valor1) * parseFloat(valor2);
        setResultado(res.toString());
    };

    const dividir = () => {
        if(parseFloat(valor2) === 0){
            setResultado('No se puede dividir por 0');
        }
        else{
            const res = parseFloat(valor1) / parseFloat(valor2);
            setResultado(res.toString());
        }
    };

    /* Lo que retorna es lo que se ve en la pantalla */
    return(
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Valor 1"
                keyboardType="numeric"
                value={valor1}
                onChangeText={setValor1}
            />
            <TextInput
                style={styles.input}
                placeholder="Valor 2"
                keyboardType="numeric"
                value={valor2}
                onChangeText={setValor2}
            />
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={sumar}>
                    <Text style={styles.buttonText}>Sumar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={restar}>
                    <Text style={styles.buttonText}>Restar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={multiplicar}>
                    <Text style={styles.buttonText}>Multiplicar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={dividir}>
                    <Text style={styles.buttonText}>Dividir</Text>
                </TouchableOpacity>
            </View>
            <Text style={styles.resultado}>Resultado: {resultado}</Text>
        </View>
    )

}
/* Estilos */
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f0f0',
        alignItems: 'center',
        justifyContent: 'center'
    },
    input: {
        width: '80%',
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        marginBottom: 20
    },
    button: {
        backgroundColor: '#007bff',
        padding: 15,
        borderRadius: 5
    },
    buttonText:{
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    resultado:{
        fontSize: 20,
        fontWeight: 'bold',
    }

})