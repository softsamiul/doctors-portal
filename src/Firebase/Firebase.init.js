import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebase.config";

const firebaseAppInIt = () =>{
    initializeApp(firebaseConfig);
}

export default firebaseAppInIt;