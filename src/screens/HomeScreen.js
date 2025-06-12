import React from "react";
import { Button, Text, View, TouchableOpacity, StyleSheet} from "react-native";

export default function HomeScreen(props){
    
    const {navigation} = props;

    const goToSettings = () =>{
        navigation.navigate("Settings");
    }

    return(
        <View>
            <Text>Esta es la homeScreen</Text>
            <Text>Esta es la homeScreen</Text>
            <Text>Esta es la homeScreen</Text>
            <Text>Esta es la homeScreen</Text>
            <Button onPress={goToSettings} title="Go to Settings"/>

        </View>

    )

}