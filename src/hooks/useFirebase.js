import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { useEffect, useState } from 'react';
import firebaseAppInIt from '../Firebase/Firebase.init';
firebaseAppInIt();
const useFirebase = () => {
    const [isLoading, setIsLoading]  = useState(true);
    const [user, setUser] = useState({})
    const auth = getAuth();

    // create new user
    const createNewUser = (email, password) => {
        setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
        })
        .finally(()=>setIsLoading(false));
    }

    // login with email pass
    const loginWithCustomUser = (email, password) => {
        setIsLoading(true)
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        })
        .finally(()=>setIsLoading(false));
    }

    // get current user
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
            //   const uid = user.uid;

            setUser(user)

              // ...

            } else {
              // User is signed out
              // ...
            }
          });
          setIsLoading(false)
        return () => unsubscribe;
    },[])

    // Log out 
    const logOut = () => {
        setIsLoading(true)
        signOut(auth).then(() => {
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
          })
          .finally(()=>setIsLoading(false));
    }


    return {
        user,
        createNewUser,
        loginWithCustomUser,
        isLoading,
        logOut
    }

}

export default useFirebase;