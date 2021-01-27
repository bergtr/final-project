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
                    "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvbGVhcm5pbmcuYW5zaG9yLmNvXC9hcGlcL2xvZ2luIiwiaWF0IjoxNjExNzIzNDc2LCJleHAiOjE2MTE3MjcwNzYsIm5iZiI6MTYxMTcyMzQ3NiwianRpIjoienJ2eVNQbnFHelk1d3pCaiIsInN1YiI6MywicHJ2IjoiMjNiZDVjODk0OWY2MDBhZGIzOWU3MDFjNDAwODcyZGI3YTU5NzZmNyJ9.OEeslIbgAtp1WLRRMh3R9214daPYFfqYgx9k9XQ5Epw",
            },
        };
        const response = await axios.get("/feeds", requestOptions);
        const posts = await response.data.data.data;
        //console.log(posts);
        setPosts(posts);
    };

    return (
        <TopicContext.Provider value={[posts, setPosts]}>
            {props.children}
        </TopicContext.Provider>
    )
}

