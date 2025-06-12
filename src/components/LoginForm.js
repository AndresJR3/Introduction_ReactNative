import react from "react";
import { TextInput,Button, Text, View } from "react-native";

export default function LoginForm() {
    return(
    <View>
        <TextInput placeholder="Email"/>
        <TextInput placeholder="Password" />
        <Button title="Login" onPress={() => console.log('Login')} />
    </View>
    )
}



