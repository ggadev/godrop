import React, {createContext, useContext, useEffect, useState} from 'react';
import {useCookies} from 'react-cookie';
import {useAddNotification} from "./NotificationContext.jsx";
import axios from "axios";
import {API_URL} from "../data/variables.js";

export const AuthContext = createContext();

export function AuthProvider({children}) {
    const [cookies, setCookie, removeCookie] = useCookies('token');
    const [user, setUser] = useState(null);

    const addNotification = useAddNotification();


    useEffect(() => {
        if(cookies.user) {
            setUser(cookies.user);
        }
    }, [cookies.user]);

    function getToken() {
        if(user && user.token) {
            return user.token;
        }
        return null;
    }

    function updateBalance(newBalance) {
        console.log(newBalance);
        if(user && user['user_balance']) {
            setUser(prevState => ({
                ...prevState,
                user_balance: newBalance
            }))
        }
    }

    function login(userData) {
        const userObject = {
            ...userData.result,
            token: userData.token
        }
        setUser(userObject);

        const cookieOptions = {
            expires: new Date(new Date().getTime() + 1000 * 60 * 60 * 24)
        }

        setCookie('user', JSON.stringify(userObject), cookieOptions);
    }

    function logout() {
        const userName = user['user_name'];
        setUser(null);
        removeCookie('user', {path:'/'});
        addNotification({title: `Goodbye ${userName}!`, desc: "You've been logged out.", status: 'success'});
    }

    return (
        <AuthContext.Provider value={{user, login, logout, getToken, updateBalance}}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContext;