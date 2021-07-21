import React, { useState, useEffect, createContext, useContext } from "react";
import axios from "axios";
import { AuthContext } from "./Auth";
export const ProfileContext = createContext();

export const ProfileProvider = (props) => {
    const [profile, setProfile] = useState([]);

    const authToken = useContext(AuthContext);   
    //"https://learning.anshor.co/api/topic"

    const fetchPost = async () => {
        const requestOptions = {
            mode: "no-cors",
            headers: {
                Authorization:
                    `Bearer ${authToken}`,
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