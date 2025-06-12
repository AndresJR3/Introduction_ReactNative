import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';


import SocialMediaLog from './src/components/SocialMediaLog';
import LoginForm from './src/components/LoginForm';
import Saludar from './src/components/Saludar';
import Contador from './src/components/Contador';
import Calculadora from './src/components/Calculadora';
import CambioMoneda from './src/components/CambioMoneda';

import NavigationStack from './src/navigation/NavigationStack';
import NavigationTab from './src/navigation/NavigationTap';
import NavigationAlbum from './src/navigation/NavigationAlbum';
import NavigationMovie from './src/navigation/NavigationMovie';
import ProductListingScreen from './src/screens/ProductListingScreen';
import NavigationProducts from './src/navigation/NavigationProducts';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreenP from './src/screens/HomeScreenP';
import LoginScreen from './src/screens/LoginScreen';

const Stack = createNativeStackNavigator();


export default function App() {
  return (

    /* <NavigationContainer >
      <NavigationMovie/>
    </NavigationContainer> */

      /* <NavigationContainer>
        <NavigationProducts />
      </NavigationContainer> */

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Login' component={LoginScreen} />
        <Stack.Screen name='Home' component={HomeScreenP} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
