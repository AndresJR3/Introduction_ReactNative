import React, { useState} from "react";
import { View, TextInput, Button, StyleSheet, SafeAreaView} from "react-native";

export default function EditAlbumScreen({ route, navigation}){
    const { album, setAlbums} = route.params;
    const [title, setTitle] = useState(album.title);
    const [description, setDescription] = useState(album.description);
    const [rating, setRating] = useState(album.rating.toString());
    const [image, setImage] = useState(album.image);

    const editAlbum = () => {
        const updateAlbum = {
           //operadores de propagación
            ...album,
            title,
            description,
            rating: parseFloat(rating),
            image
        };
        setAlbums(prevAlbums => prevAlbums.map(a => a.id === album.id ? updateAlbum : a)); //encontrar cual quiero actualizar dentro del mismo album
        navigation.goBack(); //regresar a la pantalla anterior
    }
    
    return(
        <SafeAreaView style={styles.container}>
            <TextInput
                style = {styles.input}
                placeholder = "Titulo"
                value={title}
                onChangeText={setTitle}
            />
            <TextInput
                style = {styles.input}
                placeholder = "Descripcion"
                value={description}
                onChangeText={setDescription}
            />
            <TextInput
                style = {styles.input}
                placeholder = "Calificacion"
                value={rating}
                onChangeText={setRating}
                keyboardType="numeric" //para que el teclado sea numerico
            />
            <TextInput
                style = {styles.input}
                placeholder = "Imagen URL"
                value={image}
                onChangeText={setImage}
            />
            <Button title="Editar Album" onPress={editAlbum} />
        </SafeAreaView>
    );
}

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