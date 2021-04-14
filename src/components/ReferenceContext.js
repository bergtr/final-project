import React, { useState, useEffect, createContext, useContext } from "react";
import { TopicContext } from "./TopicContext";
import axios from "axios";

export const ReferenceContext = createContext();

export const ReferenceProvider = (props) => {
  useEffect(() => {
    getReference();
  }, []);

  const [references, setReference] = useState([]);
  const [posts, setPosts] = useContext(TopicContext)
  //"https://learning.anshor.co/api/topic"

  const getReference = async () => {
    const requestOptions = {
      mode: "no-cors",
      headers: {
        Authorization:
          "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvbGVhcm5pbmcuYW5zaG9yLmNvXC9hcGlcL2xvZ2luIiwiaWF0IjoxNjE4MzgzNjA0LCJleHAiOjE2MTgzODcyMDQsIm5iZiI6MTYxODM4MzYwNCwianRpIjoiTDJ5aXZrNVFvemxuNG5rWSIsInN1YiI6MTMsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.q9RPz_OTmPHHo9EnlnwfKMmnqzEDhKU_JoyUli94mxk",
      },
    };
    const response = await axios.get('/note', requestOptions);
    const references = await response.data.data.data;
    console.log(references);
    setReference(references);
  };

  return (
    <ReferenceContext.Provider value={[ references, setReference]}>
      {props.children}
    </ReferenceContext.Provider>
  );
};
