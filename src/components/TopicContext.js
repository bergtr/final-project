import React, { useState, useEffect, createContext, useContext } from "react";
import axios from "axios";
import { AuthContext } from "./Auth";
export const TopicContext = createContext();

export const TopicProvider = (props) => {
    const [posts, setPosts] = useState([]);

    //const [authToken, setAuth] = useContext(AuthContext);   
    //"https://learning.anshor.co/api/topic"

    const fetchPost = async () => {
        const requestOptions = {
            mode: "no-cors",
            headers: {
                Authorization:
                    `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvYWt1Lm5kYWt0YXUuY29tXC9hcGlcL2xvZ2luIiwiaWF0IjoxNjI1NzEwNTYyLCJleHAiOjE2MjU3MTQxNjIsIm5iZiI6MTYyNTcxMDU2MiwianRpIjoiVkNoWWp0QWI3cGhTRUV0QSIsInN1YiI6MywicHJ2IjoiMjNiZDVjODk0OWY2MDBhZGIzOWU3MDFjNDAwODcyZGI3YTU5NzZmNyJ9.LC0_TQQPUQnGhI6fwdkr4La-zdILwcJuSiD22VjfpJg`,
            },
        };
        const response = await axios.get("/topic", requestOptions);
        const posts = await response.data.data.data;
        setPosts(posts);
    };

    useEffect(() => {
        fetchPost(); 
    }, []);

    return (
        <TopicContext.Provider value={[posts, setPosts]}>
            {props.children}
        </TopicContext.Provider>
    )
}

