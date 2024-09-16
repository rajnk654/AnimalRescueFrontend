import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Image Upload library


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBji9QL9j7fKA8rLMj2sD5wTTFU22zoOkY",
    authDomain: "animalrescue-b9713.firebaseapp.com",
    projectId: "animalrescue-b9713",
    storageBucket: "animalrescue-b9713.appspot.com",
    messagingSenderId: "17402870093",
    appId: "1:17402870093:web:a68801080b88e94a121f04",
    measurementId: "G-PEWS5L7LLM"
  };
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const storage = getStorage(app);