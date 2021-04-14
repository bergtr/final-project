import React, { useState, useEffect, createContext } from "react";
import axios from "axios";
export const TopicContext = createContext();

export const TopicProvider = props => {
    useEffect(() => {
        fetchPost(); 
    }, []);

    const [posts, setPosts] = useState([]);

    //"https://learning.anshor.co/api/topic"

    const fetchPost = async () => {
        const requestOptions = {
            mode: "no-cors",
            headers: {
                Authorization:
                    "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvbGVhcm5pbmcuYW5zaG9yLmNvXC9hcGlcL2xvZ2luIiwiaWF0IjoxNjE4MzgzNjA0LCJleHAiOjE2MTgzODcyMDQsIm5iZiI6MTYxODM4MzYwNCwianRpIjoiTDJ5aXZrNVFvemxuNG5rWSIsInN1YiI6MTMsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.q9RPz_OTmPHHo9EnlnwfKMmnqzEDhKU_JoyUli94mxk",
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

