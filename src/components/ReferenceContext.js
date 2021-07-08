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
    const requestOptions = {
      mode: "no-cors",
      headers: {
        Authorization:
          `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvYWt1Lm5kYWt0YXUuY29tXC9hcGlcL2xvZ2luIiwiaWF0IjoxNjI1NzEwNTYyLCJleHAiOjE2MjU3MTQxNjIsIm5iZiI6MTYyNTcxMDU2MiwianRpIjoiVkNoWWp0QWI3cGhTRUV0QSIsInN1YiI6MywicHJ2IjoiMjNiZDVjODk0OWY2MDBhZGIzOWU3MDFjNDAwODcyZGI3YTU5NzZmNyJ9.LC0_TQQPUQnGhI6fwdkr4La-zdILwcJuSiD22VjfpJg`,
      },
    };
    const response = await axios.get(`/note`, requestOptions);
    const references = await response.data.data.data;
    console.log(references);
    console.log(currentTopic);
    setReference(references);
  };

  return (
    <ReferenceContext.Provider value={[ references, setReference]}>
      {props.children}
    </ReferenceContext.Provider>
  );
};
