import React from "react";
import { View, Text, FlatList, Image, TouchableOpacity,TextInput, StyleSheet, SafeAreaView, Button } from "react-native";
import { useState } from "react";
import 'react-native-get-random-values'; // generar valores random
import { v4 as uuidv4 } from 'uuid'; //controlar el id, generar el identificador unico

export default function AddMovieScreen ({route, navigation}){
    const {setMovies} = route.params;
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [rating, setRating] = useState('');
    const [image, setImage] = useState('');
    const [year, setYear] = useState('');
    const [category, setCategory] = useState('');
    
    const addMovie = () => {
        const newMovie = {
            id: uuidv4(),
            title,
            description,
            rating: parseFloat(rating),
            image,
            year,
            category
        };

        setMovies(prevMovies =>[...prevMovies, newMovie]);
        navigation.goBack();
    }

    return(
        <SafeAreaView>
            <TextInput
                style={styles.input}
                placeholder="Titulo"
                value={title}
                onChangeText={setTitle}
            />
            <TextInput
                style={styles.input}
                placeholder="Descripcion"
                value={description}
                onChangeText={setDescription}
            />
            <TextInput
                style={styles.input}
                placeholder="Calificacion"
                value={rating}
                onChangeText={setRating}
            />
            <TextInput
                style={styles.input}
                placeholder="Imagen URL"
                value={image}
                onChangeText={setImage}
            />
            <TextInput
                style={styles.input}
                placeholder="Año"
                value={year}
                onChangeText={setYear}
            />
            <TextInput
                style={styles.input}
                placeholder="Categoria"
                value={category}
                onChangeText={setCategory}
            />
            <Button title="Agregar Pelicula" onPress={addMovie} />
        </SafeAreaView>
    );

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
    button:{
        backgroundColor: "#2196F3",
        padding: 10,
        borderRadius: 5,
        marginBottom: 20,
    },
})