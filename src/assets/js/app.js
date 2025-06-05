import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithCredential,signInWithRedirect, onAuthStateChanged , signOut, getRedirectResult} from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

// Import the functions you need from the SDKs you need
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD-kJUghAGDIAF6TvvoH6ePXbw4yYLqra0",
  authDomain: "e-lyceum173.web.app",
  projectId: "e-lyceum173",
  storageBucket: "e-lyceum173.firebasestorage.app",
  messagingSenderId: "1043664514681",
  appId: "1:1043664514681:web:0decf1168193bba9c2aea8",
  measurementId: "G-SM1L8RVPNG"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider()
// provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
provider.setCustomParameters({
  login_hint: 'example@lyceum173.kyiv.ua',
  hd: 'lyceum173.kyiv.ua',
   prompt: 'consent select_account'
})

const analytics = getAnalytics(app);

export {auth, provider, onAuthStateChanged,GoogleAuthProvider,signInWithCredential, signInWithRedirect, getRedirectResult, signOut}