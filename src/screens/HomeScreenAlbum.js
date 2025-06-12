import React, {useState} from "react";
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet, SafeAreaView, Button, ButtonContainer } from "react-native";

const initialAlbums = [
    {
        id: '1',
        title: 'Ultimamente',
        description:'Canción de Humbe que la neta si está chida',
        rating: 5,
        image: 'https://cdn-p.smehost.net/sites/a8928da38df6414aae98564041b07ae0/wp-content/uploads/2022/04/Humbe-Tour-1-1046x588.png'
    },
    {
        id: "2",
        title: "Astroworld",
        description: "El aclamado álbum de Travis Scott, lanzado en 2018, que incluye éxitos como 'Sicko Mode' y 'Stargazing'.",
        rating: 5,
        image: "https://cdn-p.smehost.net/sites/a8928da38df6414aae98564041b07ae0/wp-content/uploads/2018/09/TRAVIS-SCOTT-ASTROWORLD-HEADER-1046x588.jpg"
    },
    {
        id: "3",
        title: "DAMN.",
        description: "El cuarto álbum de estudio de Kendrick Lamar, lanzado en 2017, que ganó el Premio Pulitzer de Música.",
        rating: 5,
        image: "https://i.etsystatic.com/9673968/r/il/9b60af/2047457878/il_1588xN.2047457878_qfzi.jpg"
    },
    {
        id: "4",
        title: "Scorpion",
        description: "El quinto álbum de estudio de Drake, lanzado en 2018, conocido por sus éxitos 'God's Plan' y 'In My Feelings'.",
        rating: 5,
        image: "https://upload.wikimedia.org/wikipedia/en/9/90/Scorpion_by_Drake.jpg"
    },
    {
        id: "5",
        title: "After Hours",
        description: "El cuarto álbum de estudio de The Weeknd, lanzado en 2020, que incluye el éxito mundial 'Blinding Lights'.",
        rating: 5,
        image: "https://musica.news/wp-content/uploads/2020/02/The-Weeknd-con-la-cara-ensangrentada-en-la-portada-de-After-hours.jpg"
    }
];

export default function HomeScreenAlbum({ navigation }) {

    const [albums, setAlbums] = useState(initialAlbums);

    const deleteAlbum = (id) => {
        setAlbums(albums.filter(album => album.id !== id));
    }


    const renderAlbum = ({ item }) => (
        <TouchableOpacity style={style.card} onPress={() => navigation.navigate('AlbumDetail', { album: item })}>
            <Image source={{ uri: item.image }} style={style.image} />
            <Text style={style.title}>{item.title}</Text>
            <View style={style.buttonContainer}>
                <TouchableOpacity style={style.editButton} onPress={() => navigation.navigate('EditAlbum', { album : item, setAlbums})}>
                    <Text style={style.buttonText}>Editar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={style.deleteButton} onPress={() => deleteAlbum(item.id)}>
                    <Text style={style.buttonText}>Eliminar</Text>
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    );
    
    return (
        <SafeAreaView style={style.container}>
            <FlatList
                data={albums}
                renderItem={renderAlbum}
                keyExtractor={(item) => item.id.toString()} 
            />
            <TouchableOpacity style={style.addButton} onPress={() => navigation.navigate('AddAlbum', { setAlbums })}>
                <Text style={style.addButtonText}>Agregar Album</Text>
            </TouchableOpacity>

        </SafeAreaView>
    );
}


const style = StyleSheet.create({
    container : {
        flex: 1,
        backgroundColor: "#fff",
        padding: 10,
    },
    card : {
        marginBottom: 20,
        backgroundColor: "#f0f0f0",
        borderRadius: 10,
        overflow: "hidden",
        borderColor: "#add",
        borderWidth: 1,
    },
    image : {
        width: "100%",
        height: 150,
    },
    title : {
        fontSize: 18,
        fontWeight: "bold",
        padding: 10,
    },
    buttonContainer:{
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 10,
    },
    editButton: {
        backgroundColor: "#4CAF50",
        padding: 10,
        borderRadius: 5,
    },
    deleteButton:{
        backgroundColor:"#F44336",
        padding: 10,
        borderRadius: 5,
    },
    buttonText:{
        color: "#fff",
        fontWeight: "bold",
        textAlign: "center",
    },  
    addButton:{
        backgroundColor:"#2196F3",
        padding: 10,
        borderRadius: 5,
        marginBottom: 20
    },
    addButtonText:{
        color: "#fff",
        textAlign: "center",
        fontWeight: "bold"
    }
});