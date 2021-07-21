import React, { useState, useEffect, createContext, useContext } from "react";
import { TopicContext } from "./TopicContext";
import { AuthContext } from "./Auth";
import axios from "axios";

export const ReferenceContext = createContext();

export const ReferenceProvider = (props) => {
  const [references, setReference] = useState([]);

  useEffect(() => {
    getReference();
  },[]);

  
  //const [authToken, setAuth] = useContext(AuthContext)
  const [currentTopic, setTopics] = useContext(TopicContext);
  //"https://learning.anshor.co/api/topic"

  const getReference = async () => {

    try {
      const requestOptions = {
        mode: "no-cors",
        headers: {
          Authorization:
            `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvYWt1Lm5kYWt0YXUuY29tXC9hcGlcL2xvZ2luIiwiaWF0IjoxNjI2ODI3NzIzLCJleHAiOjE2MjY4MzEzMjMsIm5iZiI6MTYyNjgyNzcyMywianRpIjoiUnBiUFF5TVY4U3d1NWhTdyIsInN1YiI6MywicHJ2IjoiMjNiZDVjODk0OWY2MDBhZGIzOWU3MDFjNDAwODcyZGI3YTU5NzZmNyJ9.jyuAIc13XDBbiHvHFJc-TwqRJvwfAlnUwGUqD9G9ufs`,
        },
      };
      const response = await axios.get(`/note`, requestOptions);
      const references = await response.data.data.data;
      setReference(references);
    } catch (error) {
      console.log(error)
    }
    
  };

  return (
    <ReferenceContext.Provider value={[ references, setReference]}>
      {props.children}
    </ReferenceContext.Provider>
  );
};
