import React, { useState, useEffect, createContext, useContext } from "react";
import axios from "axios";
//import { AuthContext } from "./Auth";
export const ProfileContext = createContext();

export const ProfileProvider = (props) => {
    const [profile, setProfile] = useState([]);

    //const [authToken, setAuth] = useContext(AuthContext);   
    //"https://learning.anshor.co/api/topic"

    const fetchPost = async () => {
        const requestOptions = {
            mode: "no-cors",
            headers: {
                Authorization:
                    `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvYWt1Lm5kYWt0YXUuY29tXC9hcGlcL2xvZ2luIiwiaWF0IjoxNjI2Njc2Njk4LCJleHAiOjE2MjY2ODAyOTgsIm5iZiI6MTYyNjY3NjY5OCwianRpIjoiSkRkU1pBUWNFM0oyVFdNSCIsInN1YiI6MywicHJ2IjoiMjNiZDVjODk0OWY2MDBhZGIzOWU3MDFjNDAwODcyZGI3YTU5NzZmNyJ9.SRwZmXjSAa4lDUjYAjc1-XIyfn7L1m3PjrIrcNWs7Lg`,
            },
        };
        const response = await axios.get("/profile", requestOptions);

        console.log(response.data);
        setProfile(response.data);
    };

    useEffect(() => {
        fetchPost(); 
    }, []);

    return (
        <ProfileContext.Provider value={[profile, setProfile]}>
            {props.children}
        </ProfileContext.Provider>
    )
}