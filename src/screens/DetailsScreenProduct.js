import React from "react";
import { View, Text, Image, Button, StyleSheet, SafeAreaView, ScrollView } from "react-native";

export default function DetailsScreenProduct({ route, navigation }) {
    const { product } = route.params; 

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <Image source={{ uri: product.image }} style={styles.image} />
                <Text style={styles.title}>{product.title}</Text>
                <Text style={styles.price}>${product.price}</Text>
                <Text style={styles.category}>Categoría: {product.category}</Text>
                <Text style={styles.description}>{product.description}</Text>
                <Text style={styles.rating}>
                    Rating: {product.rating?.rate || 'N/A'} 
                    {product.rating?.count && ` (${product.rating.count} reseñas)`}
                </Text>
                <Button title="Volver" onPress={() => navigation.goBack()} />
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    scrollContainer: {
        alignItems: "center",
        padding: 20,
    },
    image: {
        width: '80%',
        height: 300,
        marginBottom: 20,
        resizeMode: "contain",
        borderRadius: 10,
    },
    title: {
        fontSize: 22,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 15,
        color: "#333",
    },
    price: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#2196F3",
        marginBottom: 10,
    },
    category: {
        fontSize: 16,
        color: "#666",
        marginBottom: 15,
        fontStyle: "italic",
    },
    description: {
        fontSize: 16,
        lineHeight: 24,
        textAlign: "justify",
        marginBottom: 20,
        color: "#444",
    },
    rating: {
        fontSize: 16,
        marginBottom: 30,
        color: "#666",
        textAlign: "center",
    },
});