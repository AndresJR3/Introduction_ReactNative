import React, {useState} from "react";
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet, SafeAreaView } from "react-native";

const initialMovies = [
    {
        id: '1',
        title: 'Iron Man',
        year:'2004',
        rating: 10,
        description:'The iron man who is a billionaire and a genius who builds a suit to save the world',
        category:'Accion, Aventura',
        image:'https://img2.rtve.es/i/?w=1600&i=1685615057917.jpg',
    },
    {
        id: '2',
        title: 'Capitan America',
        year: '2015',
        rating: 8,
        description: 'A soldier who becomes a super heroe to save the world from a powerful enemy during World War II with the help of his friends',
        category: 'Accion, Aventura',
        image: 'https://wpcdn.us-midwest-1.vip.tn-cloud.net/www.honolulumagazine.com/content/uploads/2021/01/s3-cap011.jpg'
    },
    {
        id: "3",
        title: "Spider-Man: Across the Spider-Verse",
        year: "2023",
        rating: 9,
        description: "Miles Morales se embarca en una nueva aventura a través del multiverso, enfrentándose a nuevas amenazas y aliados inesperados.",
        category: "Animacion-Accion",
        image: "https://media.es.wired.com/photos/647a13d588218b01bf4a1c5f/16:9/w_1920,c_limit/Spider-Man-Across-The-Spider-Verse-Monitor-Culture.jpg"
    },
    {
        id: "4",
        title: "Inception",
        year: "2010",
        rating: 8,
        description: "Un ladrón con la habilidad de entrar en los sueños de las personas es reclutado para implantar una idea en la mente de un empresario.",
        category: "Ciencia ficción, Suspenso",
        image: "https://images.squarespace-cdn.com/content/v1/5ec686197f8b2976074846c2/1618809593080-N5PB8CWYOW3OPDE2TT6E/Feature+3-1.png?format=2500w"
    },
    {
        id: "5",
        title: "Get Out",
        year: "2017",
        rating: 7,
        description: "Un joven afroamericano visita la casa de los padres de su novia blanca y descubre un oscuro secreto que pone en riesgo su vida.",
        category: "Terror, Suspenso",
        image: "https://i0.wp.com/codigoespagueti.com/wp-content/uploads/2017/06/get-out.jpg?fit=1280%2C720&ssl=1"
    },
    {
        id: "6",
        title: "The Dark Knight",
        year: "2008",
        rating: 9,
        description: "Batman se enfrenta a su mayor enemigo, el Joker, quien desata el caos en Gotham con su impredecible y letal forma de justicia.",
        category: "Acción, Crimen",
        image: "https://media.gq.com.mx/photos/5be9cd19d1a6deb6ed7c8bf4/master/w_1600,c_limit/the_dark_knight_860.jpg"
    },
    {
        id: "7",
        title: "Interstellar",
        year: "2014",
        rating: 8,
        description: "Un grupo de astronautas viaja a través de un agujero de gusano en busca de un nuevo hogar para la humanidad.",
        category: "Ciencia ficción, Drama",
        image: "https://2.bp.blogspot.com/-Ezjj3Ih9eog/VWdJXjEXGPI/AAAAAAAACnA/Vk-fayxGzto/s1600/interstellar-wallpaper.jpg"
    },
    {
        id: "8",
        title: "Whiplash",
        year: "2014",
        rating: 10,
        description: "Un joven baterista de jazz se enfrenta a un instructor despiadado en su intento por alcanzar la grandeza.",
        category: "Drama, Música",
        image: "https://images.squarespace-cdn.com/content/v1/5c350fe2fcf7fd3c33439e30/1567014398701-NAL04TDMAWVCN0F0JDSV/Movie%2B-%2BWhiplash.jpg?format=1000w"
    },
    {
        id: "9",
        title: "John Wick",
        year: "2014",
        rating: 7,
        description: "Un exasesino a sueldo regresa al mundo del crimen para vengar la muerte de su perro, un último regalo de su difunta esposa.",
        category: "Acción, Suspenso",
        image: "https://i0.wp.com/www.iconvsicon.com/wp-content/uploads/2019/07/john-wick-3-4k-3d-featured.png?w=800&ssl=1"
    },
    {
        id: "10",
        title: "Parasite",
        year: "2019",
        rating: 8,
        description: "Una familia pobre se infiltra en la vida de una familia rica con consecuencias inesperadas y fatales.",
        category: "Drama, Suspenso",
        image: "https://lookingback.com.mx/wp-content/uploads/2019/11/Parasite_1200_th.jpg"
    }
]


export default function HomeScreenMovie({ navigation }) {
    
    const [movies, setMovies] = useState(initialMovies); /* cambiamos el nombre dado a que se utiliza en anadir movie, entonces cambiamos el nombre para que inicie la aplicacion con las peliculas iniciales */

    const deleteMovie = (id) => {
        setMovies(movies.filter(movie => movie.id !== id));
    }
    
    const renderMovie = ({ item }) => (
        <TouchableOpacity style={style.card} onPress={() => navigation.navigate('MovieDetail', { movie: item })}>
            <Text style={style.title}>{item.title}</Text>
            <Image source={{ uri: item.image }} style={style.image} />

            <View style={style.buttonContainer}>
                <TouchableOpacity style={style.editButton} onPress={() => navigation.navigate('EditMovie', { movie : item, setMovies})}>
                    <Text style={style.buttonText}>Editar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={style.deleteButton} onPress={() => deleteMovie(item.id)}>
                    <Text style={style.buttonText}>Eliminar</Text>
                </TouchableOpacity>
            </View>

        </TouchableOpacity>
    );

    return (
        <SafeAreaView style={style.container}>
            <FlatList
                data={movies}
                renderItem={renderMovie}
                keyExtractor={(item) => item.id.toString()} 
            />
            <TouchableOpacity style={style.addButton} onPress={() => navigation.navigate('AddMovie', { setMovies })}>
                <Text style={style.addButtonText}>Agregar Pelicula</Text>
            </TouchableOpacity>

        </SafeAreaView>
    );
}

const style = StyleSheet.create({
    container : {
        flex: 11,
        backgroundColor: "#fff",
        padding: 10,
    },
    card : {
        marginBottom: 20,
        backgroundColor: "white",
        borderRadius: 20,
        overflow: "hidden",
        borderWidth: 1,
        marginHorizontal: 10,
    },
    image : {
        width: "100%",
        height: 150,
    },
    title : {
        fontSize: 18,
        fontWeight: "bold",
        padding: 10,
        alignContent: "center",
        textAlign: "center",
        color: "#333",
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