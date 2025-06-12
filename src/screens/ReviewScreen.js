import React, { useState } from "react";
import { SafeAreaView, Text, FlatList, View, StyleSheet, Button, TouchableOpacity } from "react-native";

// Base de datos local de reseñas
const initialReviews = {
    "Iron Man": [
        { id: "1", user: "Carlos", comment: "Una película increíble con mucha acción.", rating: 9 },
        { id: "2", user: "María", comment: "Me encanta la historia de Tony Stark.", rating: 8 }
    ],
    "Capitan America": [
        { id: "3", user: "Luis", comment: "Un clásico de los superhéroes.", rating: 8 }
    ],
    "Spider-Man: Across the Spider-Verse": [
        { id: "4", user: "Ana", comment: "Visualmente espectacular, una obra maestra.", rating: 10 }
    ],
    "Inception": [
        { id: "5", user: "Pedro", comment: "Una trama compleja pero fascinante.", rating: 9 }
    ],
    "Get Out": [
        { id: "6", user: "Sofía", comment: "Una crítica social muy impactante.", rating: 8 }
    ],
    "The Dark Knight": [
        { id: "7", user: "Javier", comment: "El mejor villano de todos los tiempos.", rating: 10 }
    ],
    "The Matrix": [
        { id: "8", user: "Laura", comment: "Una película que redefine el género de ciencia ficción.", rating: 9 }
    ],
    "Interstellar": [
        { id: "9", user: "Diego", comment: "Una experiencia cinematográfica única.", rating: 9 }
    ],
    "Whiplash":[
        { id: "10", user: "Valeria", comment: "Una historia conmovedora y visualmente impresionante.", rating: 8 }
    ],
    "John Wick":[
        { id: "11", user: "Andrés", comment: "Acción pura y un gran desarrollo de personajes.", rating: 8 }
    ],
    "Parasite":[
        { id: "12", user: "Fernanda", comment: "Una crítica social muy impactante.", rating: 9 }
    ]
};

export default function ReviewScreen({ route, navigation }) {
    const { movie } = route.params;
    const [movieReviews, setMovieReviews] = useState(initialReviews[movie.title] || []);

    const deleteReview = (id) => {
        setMovieReviews(prevReviews => prevReviews.filter(review => review.id !== id));
        alert("Reseña eliminada con éxito.");
    };

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Reseñas de {movie.title}</Text>
            
            <FlatList
                data={movieReviews}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.reviewCard}>
                        <Text style={styles.user}>{item.user}</Text>
                        <Text style={styles.rating}>Calificación: {item.rating}/10</Text>
                        <Text style={styles.comment}>{item.comment}</Text>
                        <View style={styles.buttonRow}>
                            <TouchableOpacity onPress={() => navigation.navigate('EditReview', { 
                                review: item, 
                                setReviews: (updater) => {
                                    setMovieReviews(updater);
                                } 
                            })}>
                                <Text style={{ color: "blue", textAlign: "center", marginRight: 20 }}>Editar</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => deleteReview(item.id)}>
                                <Text style={{ color: "red", textAlign: "center" }}>Eliminar</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                )}
                ListEmptyComponent={
                    <Text style={styles.emptyText}>No hay reseñas para esta película</Text>
                }
            />
            
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.addButton} onPress={() => navigation.navigate('AddReview', { 
                    movie, 
                    setReviews: (updater) => {
                        setMovieReviews(updater);
                    } 
                })}>
                    <Text style={{ color: "blue", textAlign: "center" }}>Agregar Reseña</Text>
                </TouchableOpacity>
                <Button title="Volver" onPress={() => navigation.goBack()} />
                <Button title="Volver a Películas" onPress={() => navigation.popToTop()} />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: "#fff",
    },
    title: {
        fontSize: 22,
        fontWeight: "bold",
        marginBottom: 10,
        textAlign: "center",
        marginTop: 20,
    },
    reviewCard: {
        padding: 15,
        marginBottom: 10,
        backgroundColor: "#f8f8f8",
        borderRadius: 15,
        borderWidth: 1,
        marginHorizontal: 10,
    },
    user: {
        fontSize: 18,
        fontWeight: "bold",
        textAlign: "center",
    },
    rating: {
        fontSize: 16,
        textAlign: "center",
        marginTop: 5,
    },
    comment: {
        fontSize: 16,
        marginTop: 5,
        textAlign: "center",
    },
    buttonRow: {
        flexDirection: "row",
        justifyContent: "center",
        marginTop: 10,
    },
    buttonContainer: {
        alignItems: "center",
        marginVertical: 20,
        flexDirection: "column",
        gap: 10,
    },
    addButton: {
        marginBottom: 10,
    },
    emptyText: {
        textAlign: "center",
        marginTop: 20,
        fontSize: 16,
        color: "#777",
    }
});