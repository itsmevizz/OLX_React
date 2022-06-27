import React,{ createContext, useState } from "react";


export const fireBaseCotext = createContext(null)
export const authContext = createContext(null)


export default function Context({children}){
    const [user, setUser]= useState(null)

    return(
        <authContext.Provider value={{user, setUser}}>
            {children}
        </authContext.Provider>
    )
}