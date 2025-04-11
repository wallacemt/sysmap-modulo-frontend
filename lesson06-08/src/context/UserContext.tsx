import { createContext } from "react";

const UserContext = createContext("");


function UserProvider({children}: any){
    return (
        <UserContext.Provider value={"Wallace"}>
            {children}
        </UserContext.Provider>
    )
}

export {UserContext, UserProvider}