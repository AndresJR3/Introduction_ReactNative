import React from "react";
import { View, Text, Image, Button, StyleSheet, SafeAreaView } from "react-native";

export default function AlbumDetailsScreen({ route, navigation }) {
    const { album } = route.params; 

    return (
        <SafeAreaView style={styles.container}>
            <Image source={{ uri: album.image }} style={styles.image} />
            <Text style={styles.title}>{album.title}</Text>
            <Text style={styles.description}>{album.description}</Text>
            <Text style={styles.rating}>Rating: {album.rating}</Text>
            <Button title="Volver" onPress={() => navigation.goBack()} />
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
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
    },
    description: {
        fontSize: 18,
        marginBottom: 20,
    },
    rating: {
        fontSize: 18,
        marginBottom: 20,
    },
});