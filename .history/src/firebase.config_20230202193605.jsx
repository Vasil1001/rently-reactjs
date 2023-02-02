// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyAIVn3kGeBt8L8yVkdDgL3cKMAAQIxw_N4",
    authDomain: "rently-marketplace-react.firebaseapp.com",
    projectId: "rently-marketplace-react",
    storageBucket: "rently-marketplace-react.appspot.com",
    messagingSenderId: "586946782621",
    appId: "1:586946782621:web:f4f56399609b56f777bb74",
    measurementId: "G-BGCV802MTT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);