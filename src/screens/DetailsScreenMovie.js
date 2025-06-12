import React from "react";
import { View, Text, Image, Button, StyleSheet, SafeAreaView } from "react-native";

export default function MovieDetailsScreen({ route, navigation }) {
    const { movie } = route.params;

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>{movie.title}</Text>
            <Image source={{ uri: movie.image }} style={styles.image} />
            <Text style={styles.description}>{movie.description}</Text>
            <Text style={styles.rating}>Rating: {movie.rating}</Text>
            <Text style={styles.category}>Category: {movie.category}</Text>
            <Text style={styles.year}>Year: {movie.year}</Text>
            
            <Button title="Volver" onPress={() => navigation.goBack()} />
            <Button 
                title="Ver Reseñas" 
                onPress={() => navigation.navigate("ReviewScreen", { movie })} 
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
    },
    image: {
        width: '75%',
        height: 320,
        marginBottom: 20,
        borderRadius: 10,
    },
    title: {
        fontSize: 26,
        fontWeight: "bold",
        marginBottom: 10,
    },
    description: {
        fontSize: 18,
        textAlign: "center",
        marginBottom: 20,
    },
    rating: {
        fontSize: 18,
        fontWeight: "600",
        marginBottom: 10,
    },
    category: {
        fontSize: 16,
        marginBottom: 10,
    },
    year: {
        fontSize: 16,
        marginBottom: 20,
    },
});
