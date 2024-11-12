import React, { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithPopup } from 'firebase/auth';
import auth from '../firebase/firebase.init';
import { useActionData } from 'react-router-dom';

export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    
    const googleProvider = new GoogleAuthProvider()
    const githubProvider = new GithubAuthProvider()

    const googleWithLogin = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => { setUser(result.user) })
            .catch(error => {
                console.log("Error", error)
            })
    }

    const githubWithLogin = () => {
        signInWithPopup(auth, githubProvider)
        .then(result=>{
            setUser(result.user)
        })
        .catch(error => {
            console.log("Error", error)
        })
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser=>{
            console.log(currentUser)
        })
        return unsubscribe()
    },[user])

    const authInfo = {
        googleWithLogin,
        githubWithLogin
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;