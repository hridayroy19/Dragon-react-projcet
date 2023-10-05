/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../provider/Authprovider";
import { Navigate, useLocation } from "react-router-dom";


const PrivetRout = ({children}) => {
 const {user}=useContext(AuthContext)
 
    const location = useLocation  ()
    console.log(location.pathname)


 if( user){
    return children
 }



    return <Navigate state={location.pathname} to={"/login"}></Navigate>
     
};

export default PrivetRout;