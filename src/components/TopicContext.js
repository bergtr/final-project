import React, { useState, useEffect, createContext, useContext } from "react";
import axios from "axios";
import { AuthContext } from "./Auth";
export const TopicContext = createContext();

export const TopicProvider = props => {
    useEffect(() => {
        fetchPost(); 
    }, []);

    const [authToken, setAuth] = useContext(AuthContext);
    const [posts, setPosts] = useState([]);

    //"https://learning.anshor.co/api/topic"

    const fetchPost = async () => {
        const requestOptions = {
            mode: "no-cors",
            headers: {
                Authorization:
                    `Bearer ${authToken}`,
            },
        };
        const response = await axios.get("/topic", requestOptions);
        const posts = await response.data.data.data;
        setPosts(posts);
    };

    return (
        <TopicContext.Provider value={[posts, setPosts]}>
            {props.children}
        </TopicContext.Provider>
    )
}

