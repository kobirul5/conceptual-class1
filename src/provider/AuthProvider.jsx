import React, { createContext } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import auth from '../firebase/firebase.init';

export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {

    
    const googleProvider = new GoogleAuthProvider()
    const githubProvider = new GithubAuthProvider()

    const googleWithLogin = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => { console.log(result) })
            .catch(error => {
                console.log("Error", error)
            })
    }

    const githubWithLogin = () => {
        signInWithPopup(auth, githubProvider)
        .then(result=>{
            console.log(result)
        })
        .catch(error => {
            console.log("Error", error)
        })
    }

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