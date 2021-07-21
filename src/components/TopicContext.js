import React, { useState, useEffect, createContext, useContext } from "react";
import axios from "axios";
import { AuthContext } from "./Auth";
export const TopicContext = createContext();

export const TopicProvider = (props) => {
  const [posts, setPosts] = useState([]);

  //const [authToken, setAuth] = useContext(AuthContext);   
  //"https://learning.anshor.co/api/topic"

  const fetchPost = async () => {

    try {
      const requestOptions = {
        mode: "no-cors",
        headers: {
          Authorization:
            `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvYWt1Lm5kYWt0YXUuY29tXC9hcGlcL2xvZ2luIiwiaWF0IjoxNjI2ODI3NzIzLCJleHAiOjE2MjY4MzEzMjMsIm5iZiI6MTYyNjgyNzcyMywianRpIjoiUnBiUFF5TVY4U3d1NWhTdyIsInN1YiI6MywicHJ2IjoiMjNiZDVjODk0OWY2MDBhZGIzOWU3MDFjNDAwODcyZGI3YTU5NzZmNyJ9.jyuAIc13XDBbiHvHFJc-TwqRJvwfAlnUwGUqD9G9ufs`,
        },
      };
      const response = await axios.get("/topic", requestOptions);
      const posts = await response.data.data.data;
      setPosts(posts);
    } catch (error) {
      console.log(error)
    }

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

