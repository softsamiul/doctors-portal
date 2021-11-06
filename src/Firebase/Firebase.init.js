import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebase.config";

const firebaseAppInIt = () =>{
    return initializeApp(firebaseConfig);
}

export default firebaseAppInIt;