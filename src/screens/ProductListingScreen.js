import React, { useEffect, useState } from "react";
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet, SafeAreaView, ActivityIndicator } from "react-native";

const ProductListingScreen = ({ navigation }) => {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        getProducts();
    }, []);

    const getProducts = () => {
        const URL = "https://fakestoreapi.com/products";
        
        fetch(URL)
        .then((res) => {
            if (!res.ok) {
                throw new Error("Error al obtener los productos");
            }
            return res.json();
        })
        .then((data) => {
            setProducts(data);
            setIsLoading(false);
        }).catch((error) => {
            console.error("Error:", error);
            setError(error.message);
            setIsLoading(false);
        });
    }

    const renderProduct = ({ item }) => (
        <TouchableOpacity 
            style={styles.card} 
            onPress={() => navigation.navigate('DetailsScreenProduct', { product: item })}
        >
            <Image source={{ uri: item.image }} style={styles.image} />
            <Text style={styles.title}>{item.title}</Text>
        </TouchableOpacity>
    );

    if (isLoading) {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color="#0000ff" />
                <Text style={styles.loadingText}>Cargando productos...</Text>
            </View>
        );
    }

    if (error) {
        return (
            <View style={styles.errorContainer}>
                <Text style={styles.errorText}>Error: {error}</Text>
            </View>
        );
    }

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.headerTitle}>Aplicación de Productos</Text>
            <FlatList
                data={products}
                renderItem={renderProduct}
                keyExtractor={(item) => item.id.toString()}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.listContainer}
            />
        </SafeAreaView>
    );
};

export default ProductListingScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        padding: 10,
    },
    headerTitle: {
        fontSize: 24,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 20,
        color: "#333",
    },
    listContainer: {
        paddingBottom: 20,
    },
    card: {
        marginBottom: 20,
        backgroundColor: "#f9f9f9",
        borderRadius: 10,
        overflow: "hidden",
        borderColor: "#ddd",
        borderWidth: 1,
        elevation: 2,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
    },
    image: {
        width: "100%",
        height: 200,
        resizeMode: "contain",
        backgroundColor: "#fff",
    },
    title: {
        fontSize: 16,
        fontWeight: "bold",
        padding: 15,
        textAlign: "center",
        color: "#333",
    },
    loadingContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
    },
    loadingText: {
        marginTop: 10,
        fontSize: 16,
        color: "#666",
    },
    errorContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
        padding: 20,
    },
    errorText: {
        color: "red",
        fontSize: 18,
        textAlign: "center",
    },
});