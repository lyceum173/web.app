import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged , signOut} from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCNn8n_u8gURaacoDCP6Wo6o4ZpJGLdF_c",
  authDomain: "auth-lyceum173.web.app",
  projectId: "auth-lyceum173",
  storageBucket: "auth-lyceum173.firebasestorage.app",
  messagingSenderId: "171877473995",
  appId: "1:171877473995:web:55c62158d7db7c44f7054e",
  measurementId: "G-MRVK2QBQHB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider
const analytics = getAnalytics(app);

export {auth, provider, onAuthStateChanged, signInWithPopup, signOut}