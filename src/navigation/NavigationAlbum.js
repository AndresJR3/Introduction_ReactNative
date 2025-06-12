import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreenAlbum";
import AlbumDetailsScreen from "../screens/DetailsScreenAlbum";
import AddAlbumScreen from "../screens/AddAlbumScreen";
import EditAlbumScreen from "../screens/EditAlbumScreen";

const Stack = createNativeStackNavigator();

export default function NavigationAlbum() {
    return (
        <Stack.Navigator initialRouteName="Album">
            <Stack.Screen name="Album" component={HomeScreen}/>
            <Stack.Screen name="AlbumDetail" component={AlbumDetailsScreen} />
            <Stack.Screen name="AddAlbum" component={AddAlbumScreen} />
            <Stack.Screen name="EditAlbum" component={EditAlbumScreen} />
        </Stack.Navigator>
    );
}