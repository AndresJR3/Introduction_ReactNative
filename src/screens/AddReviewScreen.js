import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, SafeAreaView } from "react-native";
import 'react-native-get-random-values'; // generar valores random
import { v4 as uuidv4 } from 'uuid'; // controlar el id, generar el identificador único

export default function AddReviewScreen({ route, navigation }) {
    const { movie, setReviews } = route.params;
    
    const [user, setUser] = useState('');
    const [comment, setComment] = useState('');
    const [rating, setRating] = useState('');
    
    const addReview = () => {
        const newReview = {
            id: uuidv4(),
            user,
            comment,
            rating: parseFloat(rating)
        };
        
        setReviews(prevReviews => [...prevReviews, newReview]);
        navigation.goBack();
    };
    
    return (
        <SafeAreaView style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Usuario"
                value={user}
                onChangeText={setUser}
            />
            <TextInput
                style={styles.input}
                placeholder="Comentario"
                value={comment}
                onChangeText={setComment}
                multiline
            />
            <TextInput
                style={styles.input}
                placeholder="Calificación (0-10)"
                value={rating}
                onChangeText={setRating}
                keyboardType="numeric"
            />
            <Button title="Agregar Reseña" onPress={addReview} />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        padding: 10,
    },
    button: {
        backgroundColor: "#2196F3",
        padding: 10,
        borderRadius: 5,
        marginBottom: 20,
    },
});