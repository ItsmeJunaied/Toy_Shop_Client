import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';



export const AuthContext= createContext(null);

const auth=getAuth(app);
const user = auth.currentUser;


const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null);
    const [loading,setLoading]=useState(true);
    const createUser=(email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password)

    }
    const signIN=(email,password,user)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }

    const logOut=()=>{
        setLoading(true);
        return signOut(auth);
    }
    useEffect(()=>{
        const unsubscribe= onAuthStateChanged(auth,loggeduser=>{
            console.log('log inned')
            setUser(loggeduser);
            setLoading(false);
        })
        return()=>{
            unsubscribe();
        }
    },[])
    
    const authInfo={
        user,
        createUser,
        signIN,
        logOut,
        loading
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;