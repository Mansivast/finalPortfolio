import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyATQqPIv77WecU7s9TwiGM4JM9Fn1tmzL0",
    authDomain: "mansiportfoliov1.firebaseapp.com",
    projectId: "mansiportfoliov1",
    storageBucket: "mansiportfoliov1.appspot.com",
    messagingSenderId: "844245584786",
    appId: "1:844245584786:web:6e0720304a0d87b2c68f4b",
    measurementId: "G-LD9EFSN0J3"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
