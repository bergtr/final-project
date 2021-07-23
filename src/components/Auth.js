import React, { useState, useEffect, createContext } from "react";
import axios from "axios";

export const AuthContext = createContext();
export const useAuth = () => React.useContext(AuthContext);

export const AuthProvider = (props) => {
    useEffect(() => {
        getAuth();
    }, []);

    const [authToken, setAuth] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);

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
            throw new error ('something wrong with your login');
        }
    };

    const login = () => {
      setLoggedIn(true);
    };

    const logout = () => {
      setLoggedIn(false);
    }

    const signIn = () => {
      setLoggedIn(true);
    }

    const authContextValue ={
      authToken,
      loggedIn,
      login,
      logout,
      signIn
    }

    return (
        <AuthContext.Provider value={authContextValue}>
            {props.children}
        </AuthContext.Provider>
    );
};