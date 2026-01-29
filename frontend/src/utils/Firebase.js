import { getAuth, GoogleAuthProvider } from "firebase/auth"
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
    authDomain: "vnytra-d215e.firebaseapp.com",
    projectId: "vnytra-d215e",
    storageBucket: "vnytra-d215e.firebasestorage.app",
    messagingSenderId: "530168537355",
    appId: "1:530168537355:web:2819d9276e79f2c098420e"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider()

export { auth, provider }