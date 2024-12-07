import { createContext, useContext } from "react";
import { useLocalStorage } from "../util";

const UserContext = createContext()

const UserProvider = props => {
    const [user, setUser] = useLocalStorage('taskytrack_user', null)//useState(null)
    
    const updateUser = user =>{
        setUser(user)
    }

    const value = {
        user,
        updateUser,
    }

    return (
        <UserContext.Provider value={value}>{props.children}</UserContext.Provider>
    )
}

const useUser = () => {
    const context = useContext(UserContext)
    if(context === undefined){
        throw new Error('User must be used withina a UserProvider')
    }
    return context
}

export {UserProvider, useUser}

