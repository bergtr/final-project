import React, { useState, useEffect, createContext, useContext } from "react";
import axios from "axios";
import { AuthContext } from "./Auth";
export const TopicContext = createContext();

export const TopicProvider = (props) => {
  const [posts, setPosts] = useState([]);
  const auth = useContext(AuthContext);
  console.log(auth);
    
  useEffect(() => {
    
    const fetchPost = async () => {
      const requestOptions = {
        mode: "no-cors",
        headers: {
          Authorization:
            `Bearer ${auth.authToken}`,
        },
      };
  
      try {
        const response = await axios.get("/topic", requestOptions);
        const posts = await response.data.data.data;
        setPosts(posts);
        console.log(posts);
      } catch (error) {
        console.log(error)
      }
    };

    fetchPost();
    
  },[auth.authToken]);

 

  //"https://learning.anshor.co/api/topic"



  return (
    <TopicContext.Provider value={[posts, setPosts]}>
      {props.children}
    </TopicContext.Provider>
  )
}

