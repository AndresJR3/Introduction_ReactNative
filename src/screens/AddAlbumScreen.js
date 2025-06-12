import react from "react";
import { View, Text, FlatList, TextInput, Image, TouchableOpacity, StyleSheet, SafeAreaView, Button } from "react-native";
import { useState } from "react";
import 'react-native-get-random-values'; // generar valores random
import { v4 as uuidv4 } from 'uuid'; //controlar el id, generar el identificador unico

export default function AddAlbumScreen ({route, navigation}){
    const {setAlbums} = route.params;
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [rating, setRating] = useState('');
    const [image, setImage] = useState('');

    const addAlbum = () => {
        const newAlbum = {
            id: uuidv4(),
            title,
            description,
            rating: parseFloat(rating),
            image
        };

        setAlbums(prevAlbums =>[...prevAlbums, newAlbum]);
        navigation.goBack();
    }

    return(
        <SafeAreaView style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Titulo"
                value="{title}"
                onChangeText={setTitle}
            />
            <TextInput
                style={styles.input}
                placeholder="description"
                value="{description}"
                onChangeText={setDescription}
            />
            <TextInput
                style={styles.input}
                placeholder="Calificacion"
                value="{rating}"
                onChangeText={setRating}
            />
            <TextInput
                style={styles.input}
                placeholder="Imagen URL"
                value="{image}"
                onChangeText={setImage}
            />
            <Button title="Agregar Album" onPress={addAlbum} />
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    container:{
        flex: 1,
        padding: 10,
    },
    input:{
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        padding: 10,
    },

});