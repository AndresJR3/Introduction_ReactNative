/* 
    Practica
Desarrollo una aplicación, que haga la conversión de pesos mexicanos a otras 6 monedas internacionales
dependiendo de la que eliga el usuario con solo picando el botón.


    Tarea
Investigacion en libreta.
Lo que es React Navigation (lo que tiene la platica)
*/
import react from "react";
import { TextInput,Button, Text, View, TouchableOpacity, StyleSheet} from "react-native";


export default function CambioMoneda(){

    const [pesosMexicanos, setPesosMexicanos] = react.useState('');
    const [resultado, setResultado] = react.useState('');
    
    const mx = () => {
        const res = parseFloat(pesosMexicanos) * 1;
        setResultado(res.toString());
    }
    const dllr = () => {
        const res = parseFloat(pesosMexicanos) * 0.050;
        setResultado(res.toString());
    }
    const eu = () => {
        const res = parseFloat(pesosMexicanos) * 0.046;
        setResultado(res.toString());
    }
    const lib = () => {
        const res = parseFloat(pesosMexicanos) * 0.039;
        setResultado(res.toString());
    }
    const yen = () => {
        const res = parseFloat(pesosMexicanos) * 7.50;
        setResultado(res.toString());
    }
    const cad = () => {
        const res = parseFloat(pesosMexicanos) * 0.072;
        setResultado(res.toString());
    }


    return (
        <View style={styles.container}>
            <Text style={styles.title}>Conversor de Moneda</Text>
            <TextInput
                style={styles.input}
                placeholder="Pesos Mexicanos"
                keyboardType="numeric"
                value={pesosMexicanos}
                onChangeText={setPesosMexicanos}
            />
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={mx}>
                    <Text style={styles.buttonText}> Pesos Mexicanos</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={dllr}>
                    <Text style={styles.buttonText}>Dólares</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={eu}>
                    <Text style={styles.buttonText}>Euros</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={lib}>
                    <Text style={styles.buttonText}>Libras</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={yen}>
                    <Text style={styles.buttonText}>Yenes</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={cad}>
                    <Text style={styles.buttonText}>Canadian</Text>
                </TouchableOpacity>
            </View>
            <Text style={styles.resultado}>Resultado: {resultado}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 20,
        marginTop: 50,
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    input: {
        width: '80%',
        height: 40,
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        backgroundColor: '#fff',
        marginBottom: 20,
    },
    buttonContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        width: '100%',
    },
    button: {
        backgroundColor: 'green',
        padding: 10,
        borderRadius: 5,
        margin: 5,
        width: '30%',
        textAlign: 'center',
        alignItems: 'center',

    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    resultado: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 20,
    },
});