import React, { useState, useEffect, createContext, useContext } from "react";
import axios from "axios";
import { AuthContext } from "./Auth";
export const TopicContext = createContext();

export const TopicProvider = props => {
    useEffect(() => {
        fetchPost(); 
    }, []);

    //const [authToken, setAuth] = useContext(AuthContext);
    const [posts, setPosts] = useState([]);
    
    //"https://learning.anshor.co/api/topic"

    const fetchPost = async () => {
        const requestOptions = {
            mode: "no-cors",
            headers: {
                Authorization:
                    `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvbGVhcm5pbmcuYW5zaG9yLmNvXC9hcGlcL2xvZ2luIiwiaWF0IjoxNjE4OTAxMDk4LCJleHAiOjE2MTg5MDQ2OTgsIm5iZiI6MTYxODkwMTA5OCwianRpIjoiNG9uT1BtYVB4M2tCYjNOUiIsInN1YiI6MTMsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.RHfBBvWsN5HKsKdSRGrJydTxua5hksVgmz9smn4a7jg`,
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

