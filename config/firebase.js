import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import Constants from 'expo-constants';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';


/* 
  Constants.manifest2.extra.expoClient.extra; <--Forma de acceder a la autenticacion
*/
export const firebaseConfig = {
  apiKey: Constants.manifest2.extra.expoClient.extra.apiKey,
  authDomain: Constants.manifest2.extra.expoClient.extra.authDomain,
  projectId: Constants.manifest2.extra.expoClient.extra.projectId,
  storageBucket: Constants.manifest2.extra.expoClient.extra.storageBucket,
  messagingSenderId: Constants.manifest2.extra.expoClient.extra.messagingSenderId,
  appId: Constants.manifest2.extra.expoClient.extra.appId,
}

const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});

export const database = getFirestore();

