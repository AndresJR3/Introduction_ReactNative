import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreenMovie";
import MovieDetailsScreen from "../screens/DetailsScreenMovie";
import ReviewScreen from "../screens/ReviewScreen";
import AddMovieScreen from "../screens/AddMovieScreen";
import EditMovieScreen from "../screens/EditMovieScreen";
import AddReviewScreen from "../screens/AddReviewScreen";
import EditReviewScreen from "../screens/EditReviewScreen";

const Stack = createNativeStackNavigator();

export default function NavigationMovie() {
    return (
        <Stack.Navigator initialRouteName="Movie">
            <Stack.Screen name="Movie" component={HomeScreen}/>
            <Stack.Screen name="MovieDetail" component={MovieDetailsScreen} />
            <Stack.Screen name="ReviewScreen" component={ReviewScreen} />
            <Stack.Screen name="AddMovie" component={AddMovieScreen} />
            <Stack.Screen name="EditMovie" component={EditMovieScreen} />
            <Stack.Screen name="AddReview" component={AddReviewScreen} />
            <Stack.Screen name="EditReview" component={EditReviewScreen} />
        </Stack.Navigator>
    );
}