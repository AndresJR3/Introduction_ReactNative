import react from "react";
import { TextInput,Button, Text, View} from "react-native";

/* Crear la vista para el registro de una red social donde te soliciten:
	- Name
	- Lastname
	- Age
	- Address
	- Username
	- Mail
	- Password

La vista debe tener el texto de lo que solicita y enseguida el input con su placeholder. Al presionar el botón va a enviar dos logs a la consola
 */

export default function SocialMediaLog(){
    return(
        <View>
            <Text>Name</Text>
            <TextInput placeholder="Name"/>
            <Text>Lastname</Text>
            <TextInput placeholder="Lastname"/>
            <Text>Age</Text>
            <TextInput placeholder="Age"/>
            <Text>Address</Text>
            <TextInput placeholder="Address"/>
            <Text>Username</Text>
            <TextInput placeholder="Username"/>
            <Text>Mail</Text>
            <TextInput placeholder="Mail"/>
            <Text>Password</Text>
            <TextInput placeholder="Password"/>
            <Button title="Register" onPress={() => {
                console.log('Usuario Registrado');
                console.log('Siuuuu');
            }} />
            
        </View>
    )

}



