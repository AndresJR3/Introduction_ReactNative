import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, SafeAreaView} from "react-native";

export default function EditMovieScreen({ route, navigation}){
    const {movie, setMovies} = route.params;
    const [title, setTitle] = useState(movie.title);
    const [description, setDescription] = useState(movie.description);
    const [rating, setRating] = useState(movie.rating.toString());
    const [image, setImage] = useState(movie.image);
    const [year, setYear] = useState(movie.year.toString());
    const [category, setCategory] = useState(movie.category);

    const editMovie = () => {
        const updateMovie = {
            ...movie,
            title,
            description,
            rating: parseFloat(rating),
            image,
            year,
            category
        };
        setMovies(prevMovies => prevMovies.map(m => m.id === movie.id ? updateMovie : m)); //encontrar cual quiero actualizar dentro del mismo album
        navigation.goBack(); //regresar a la pantalla anterior
    };

    return (
        <SafeAreaView style={styles.container}>
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
                keyboardType="numeric" //para que el teclado sea numerico
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
                keyboardType="numeric" //para que el teclado sea numerico
            />
            <TextInput
                style={styles.input}
                placeholder="Categoria"
                value={category}
                onChangeText={setCategory}
            />
            <Button title="Editar Pelicula" onPress={editMovie} />
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
    button:{
        backgroundColor: "#2196F3",
        padding: 10,
        borderRadius: 5,
        marginBottom: 20
    },
});