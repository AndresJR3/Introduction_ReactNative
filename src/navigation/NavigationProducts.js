import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProductListingScreen from "../screens/ProductListingScreen";
import DetailsScreenProduct from "../screens/DetailsScreenProduct";

const Stack = createNativeStackNavigator();

export default function NavigationProducts() {
    return (
        <Stack.Navigator initialRouteName="ProductListingScreen">
            <Stack.Screen name="ProductListingScreen" component={ProductListingScreen} />
            <Stack.Screen name="DetailsScreenProduct" component={DetailsScreenProduct} />
        </Stack.Navigator>

    );
}