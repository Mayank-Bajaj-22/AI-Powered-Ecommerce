import React, { createContext, useContext, useEffect, useState } from 'react'
import { authDataContext } from './AuthContext';
import axios from 'axios';

export const UserDataContext = createContext();
function UserContext({ children }) {

    let [userData, setUserData] = useState("");
    let { serverUrl } = useContext(authDataContext)

    const getCurrentUser = async () => {
        try {
            let result = await axios.get(serverUrl + "/api/user/getcurrentuser", { withCredentials: true })
            setUserData(result.data)
            console.log(result.data)
        } catch (error) {
            setUserData("")
            console.log(error)
        }
    }

    useEffect(() => {
        getCurrentUser()
    }, [])

    let value = {
        userData, setUserData, getCurrentUser
    }

    return (
        <div>
            <UserDataContext.Provider value={value}>
                {children}
            </UserDataContext.Provider>
        </div>
    )
}

export default UserContext