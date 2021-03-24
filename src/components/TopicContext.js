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
                    "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvbGVhcm5pbmcuYW5zaG9yLmNvXC9hcGlcL2xvZ2luIiwiaWF0IjoxNjE2NTQ4MzY3LCJleHAiOjE2MTY1NTE5NjcsIm5iZiI6MTYxNjU0ODM2NywianRpIjoiQmdCZUc0RGE5d3h2OHF3SCIsInN1YiI6MywicHJ2IjoiMjNiZDVjODk0OWY2MDBhZGIzOWU3MDFjNDAwODcyZGI3YTU5NzZmNyJ9.I_zS61mnpSm7lmyhomrpOht1rpdvk39mChg3V8lpuUY",
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

