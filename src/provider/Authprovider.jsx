/* eslint-disable react/prop-types */
import { createContext, useEffect } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";
import { useState } from "react";
// import { useLocation } from "react-router-dom";


 export const AuthContext=createContext(null)
 const auth = getAuth(app);

const Authprovider = ({children}) => {

    const[user,setUser]=useState(null)



   
const CreateUser = (email,password) =>{
return createUserWithEmailAndPassword(auth,email,password);

}


const sigIn = (email, password) =>{
    return signInWithEmailAndPassword(auth,email,password)
}




const logout =()=>{
    return signOut(auth);
}






useEffect(()=>{

    const unSubscribe = onAuthStateChanged(auth,currentUer =>{

        console.log("user in the auth state chanfed" , currentUer);
        setUser(currentUer);
    })
    return()=>{
        unSubscribe();
    }
},[])



const AuthInfo ={
user,
CreateUser,
sigIn,
logout


}

    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Authprovider;