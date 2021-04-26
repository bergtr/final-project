import React, { useState, useEffect, createContext } from "react";
import axios from "axios";

export const AuthContext = createContext();

export const AuthProvider = (props) => {
    // useEffect(() => {
    //     getAuth();
    // }, []);

    const [authToken, setAuth] = useState([]);
    const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvbGVhcm5pbmcuYW5zaG9yLmNvXC9hcGlcL2xvZ2luIiwiaWF0IjoxNjE5Mzk4ODQyLCJleHAiOjE2MTk0MDI0NDIsIm5iZiI6MTYxOTM5ODg0MiwianRpIjoiZlhtWjQzTWVHQmRwaUxnWiIsInN1YiI6MTMsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.UAZzfFBtCaIFsl101Vwa9swkbyaTG-6isGGZ28zTFHQ';
    setAuth(token);
    //"https://learning.anshor.co/api/topic"

    // const getAuth = async () => {

    //     const reqBody = {
    //         username: 'antonx',
    //         password: 'password'
    //     }
    //     try {
    //         const response = await axios.post('/login', reqBody)
    //         const authToken = await response.data.data.token;
    //         console.log(authToken);
    //         setAuth(authToken);
    //     } catch (error) {
    //         throw new error ('something wrong with your login')
    //     }
    // };

    return (
        <AuthContext.Provider value={[authToken, setAuth]}>
            {props.children}
        </AuthContext.Provider>
    );
};