import React, { useState, useEffect, createContext, useContext } from "react";
import axios from "axios";
import { AuthContext } from "./Auth";
export const TopicContext = createContext();

export const TopicProvider = (props) => {

  useEffect(() => {
    fetchPost();
  },[]);

  const [posts, setPosts] = useState([]);
  const authToken = useContext(AuthContext);
  console.log(authToken);   

  //"https://learning.anshor.co/api/topic"

  const fetchPost = async () => {
    const requestOptions = {
      mode: "no-cors",
      headers: {
        Authorization:
          `Bearer ${authToken[0]}`,
      },
    };

    try {
      const response = await axios.get("/topic", requestOptions);
      const posts = await response.data.data.data;
      setPosts(posts);
    } catch (error) {
      console.log(error)
    }

  };

  return (
    <TopicContext.Provider value={[posts, setPosts]}>
      {props.children}
    </TopicContext.Provider>
  )
}

