import React, { useState, useEffect, createContext } from "react";
import axios from "axios";

export const AuthContext = createContext();

export const AuthProvider = (props) => {
    useEffect(() => {
        getAuth();
    }, []);

    const [authToken, setAuth] = useState('');
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

    // const getAuth = () =>{
    //   setAuth('eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvYWt1Lm5kYWt0YXUuY29tXC9hcGlcL2xvZ2luIiwiaWF0IjoxNjI2ODU1NDU0LCJleHAiOjE2MjY4NTkwNTQsIm5iZiI6MTYyNjg1NTQ1NCwianRpIjoicndBQXAxQURQYUhBMWpkaSIsInN1YiI6MywicHJ2IjoiMjNiZDVjODk0OWY2MDBhZGIzOWU3MDFjNDAwODcyZGI3YTU5NzZmNyJ9.sY7MvvuqjFOu6vxIQ4D_UjQjilJO6QOFcieRmK_XgTE')
    // }

    return (
        <AuthContext.Provider value={[authToken, setAuth]}>
            {props.children}
        </AuthContext.Provider>
    );
};