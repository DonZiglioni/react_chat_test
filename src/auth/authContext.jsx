import { createContext, useState, useEffect, useContext } from "react";
import { account } from "../appwriteConfig";
import { useNavigate } from "react-router-dom";
import { ID } from 'appwrite'
const authContext = createContext()

export const AuthProvider = ({ children }) => {
    const navigate = useNavigate();

    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState(null)

    useEffect(() => {
        getUserOnLoad()
    }, [])

    const getUserOnLoad = async () => {
        try {
            const userData = await account.get();
            setUser(userData);
        } catch (error) {
            console.log(error);
        }
        setLoading(false)
    }

    const handleUserLogin = async (e, credentials) => {
        e.preventDefault()
        try {
            const res = await account.createEmailSession(credentials.email, credentials.password);
            console.log("LOGGING IN", res);
            const userData = await account.get();
            setUser(userData);
            navigate("/room");
        } catch (error) {
            console.log(error);
        }
    }

    const handleUserLogout = async () => {
        try {
            await account.deleteSession('current');
            setUser(null);
        } catch (error) {
            console.log(error);
        }
    }

    const handleUserSignup = async (e, credentials) => {
        e.preventDefault()

        if (credentials.password !== credentials.passwordDub) {
            alert("Passwords Do Not Match")
            return;
        }
        try {
            const res = await account.create(ID.unique(), credentials.email, credentials.password, credentials.username);
            console.log("CREATED", res);
            await account.createEmailSession(credentials.email, credentials.password);
            const userData = await account.get();
            setUser(userData);
            navigate("/room");
        } catch (error) {
            console.log(error);
        }
    }

    const contextData = {
        user,
        handleUserLogin,
        handleUserLogout,
        handleUserSignup,
    }
    return (
        <authContext.Provider value={contextData}>
            {loading ? <p>Loading...</p> : children}
        </authContext.Provider>
    )
}

export const useAuth = () => {
    return useContext(authContext)
}

export default authContext