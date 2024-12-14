import { createContext, useContext, useState } from "react";
import { useLocalStorage } from "../util";

const UserContext = createContext()

const UserProvider = props => {
    const [user, setUser] = useLocalStorage('taskytrack_user', null)//useState(null)
    const [userData, setUserData] =  useState(null)//useState(null)
    
    const updateUser = user =>{
        setUser(user)
    }
    const updateUserData = userData =>{
        setUserData(userData)
    }

    const value = {
        user,
        updateUser,
        userData,
        updateUserData,
    }

    return (
        // <UserContext.Provider value={value}>{{user, setUser, userData, setUserData}}</UserContext.Provider>
        <UserContext.Provider value={value}>{props.children}</UserContext.Provider>
    )
}

const useUser = () => {
    // const context = useContext(UserContext)
    // if(context === undefined){
    //     throw new Error('User must be used withina a UserProvider')
    // }
    // return context
    return useContext(UserContext)
}

export {UserProvider, useUser}

