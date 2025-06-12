import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, SafeAreaView } from "react-native";

export default function EditReviewScreen({ route, navigation }) {
    const { review, setReviews } = route.params;
    
    const [user, setUser] = useState(review.user);
    const [comment, setComment] = useState(review.comment);
    const [rating, setRating] = useState(review.rating.toString());
    
    const editReview = () => {
        const updatedReview = {
            ...review,
            user,
            comment,
            rating: parseFloat(rating)
        };
        
        setReviews(prevReviews => 
            prevReviews.map(r => r.id === review.id ? updatedReview : r)
        );
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
            <Button title="Editar Reseña" onPress={editReview} />
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