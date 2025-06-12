// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, initializeAuth, getReactNativePersistence } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Platform} from "react-native";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC1UYaPHFXkYuZUzSWvOPnz43ZrBMxWfXE",
  authDomain: "reactautenticacion2.firebaseapp.com",
  projectId: "reactautenticacion2",
  storageBucket: "reactautenticacion2.firebasestorage.app",
  messagingSenderId: "492124793126",
  appId: "1:492124793126:web:32ddc082973c8e485239e7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//inicializa la autenticacion con persistencia en AsyncStorage
/* const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage)
});
  */
const auth = getAuth(app);

export { auth, createUserWithEmailAndPassword };

