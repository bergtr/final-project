import React, { useState, useEffect, createContext, useContext } from "react";
import { TopicContext } from "./TopicContext";
import { AuthContext } from "./Auth";
import axios from "axios";

export const ReferenceContext = createContext();

export const ReferenceProvider = (props) => {
  useEffect(() => {
    getReference();
  }, []);

  const [references, setReference] = useState([]);
  //const [authToken, setAuth] = useContext(AuthContext)
  const [currentTopic, setTopics] = useContext(TopicContext);
  //"https://learning.anshor.co/api/topic"

  const getReference = async () => {
    const requestOptions = {
      mode: "no-cors",
      headers: {
        Authorization:
          `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvbGVhcm5pbmcuYW5zaG9yLmNvXC9hcGlcL2xvZ2luIiwiaWF0IjoxNjE4OTAxMDk4LCJleHAiOjE2MTg5MDQ2OTgsIm5iZiI6MTYxODkwMTA5OCwianRpIjoiNG9uT1BtYVB4M2tCYjNOUiIsInN1YiI6MTMsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.RHfBBvWsN5HKsKdSRGrJydTxua5hksVgmz9smn4a7jg`,
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
