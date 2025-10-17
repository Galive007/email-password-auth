// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBSzQzfv84CmOEAlC4vQYU-baze_Ee5BLA",
    authDomain: "email-password-auth-93221.firebaseapp.com",
    projectId: "email-password-auth-93221",
    storageBucket: "email-password-auth-93221.firebasestorage.app",
    messagingSenderId: "983710918335",
    appId: "1:983710918335:web:af9d4017874912adc7c80a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);