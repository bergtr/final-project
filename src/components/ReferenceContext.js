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
          `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvbGVhcm5pbmcuYW5zaG9yLmNvXC9hcGlcL2xvZ2luIiwiaWF0IjoxNjE5NDA4NjY1LCJleHAiOjE2MTk0MTIyNjUsIm5iZiI6MTYxOTQwODY2NSwianRpIjoiZWZFeHYyc042QWtvUHRSNyIsInN1YiI6MTMsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.11MX6Bj-puCSdlnmFjAOMA4LA8u1UQtuXEgpq9k6T6M`,
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
