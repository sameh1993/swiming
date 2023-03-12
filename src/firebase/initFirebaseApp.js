// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB6xTvo-mAjQWrn77BEQo025POyyhqtxLE",
    authDomain: "my-project-1490178548296.firebaseapp.com",
    projectId: "my-project-1490178548296",
    storageBucket: "my-project-1490178548296.appspot.com",
    messagingSenderId: "596366819255",
    appId: "1:596366819255:web:8334992a207c5be2fe3232"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
export { app, db }

