import { createContext, useState } from "react";

export const UserContext = createContext()


export function UserProvider({children}){
    
    const [user,setUser]=useState({})
    const obj={
        user, 
        setUser
    }
    
    return(
        <UserContext.Provider value={obj}>
            {children} 
        </UserContext.Provider>
    )
}