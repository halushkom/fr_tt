import React, {useEffect, useState, createContext} from "react";
import firebaseConfig from './firebaseConf';

export const AuthContext = createContext();

export const Authenticated = ({children}) => {
    const [authUser, setAuthUser] = useState(null)
    useEffect(()=>{
        firebaseConfig.auth().onAuthStateChanged((user)=>{
            setAuthUser(user)
        })
    }, [])

    return(
        <AuthContext.Provider value={{ authUser }}>
            {children}
        </AuthContext.Provider>
    )
}
//export default AuthContext;