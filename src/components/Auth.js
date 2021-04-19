import React, { useState, useEffect, createContext } from "react";
import axios from "axios";

export const AuthContext = createContext();

export const AuthProvider = (props) => {
    useEffect(() => {
        getAuth();
    }, []);

    const [authToken, setAuth] = useState([]);
    //"https://learning.anshor.co/api/topic"

    const getAuth = async () => {

        const reqBody = {
            username: 'antonx',
            password: 'password'
        }
        try {
            const response = await axios.post('/login', reqBody)
            const authToken = await response.data.data.token;
            console.log(authToken);
            setAuth(authToken);
        } catch (error) {
            throw new error ('something wrong with your login')
        }
    };

    return (
        <AuthContext.Provider value={[authToken, setAuth]}>
            {props.children}
        </AuthContext.Provider>
    );
};