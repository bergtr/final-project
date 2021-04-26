import React, { useState, useEffect, createContext, useContext } from "react";
import useFetch from "../hooks/useFetch";
import { TopicContext } from "./TopicContext";
import { AuthContext } from "./Auth";
import axios from "axios";

export const ReferenceContext = createContext();

export const ReferenceProvider = (props) => {
  // const [references, setReference] = useState([]);

  // useEffect(() => {
  //   getReference();
  // },[]);

  
  // //const [authToken, setAuth] = useContext(AuthContext)
  // //"https://learning.anshor.co/api/topic"

  // const getReference = async () => {
  //   const requestOptions = {
  //     mode: "no-cors",
  //     headers: {
  //       Authorization:
  //         `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvbGVhcm5pbmcuYW5zaG9yLmNvXC9hcGlcL2xvZ2luIiwiaWF0IjoxNjE5NDI0NTAzLCJleHAiOjE2MTk0MjgxMDMsIm5iZiI6MTYxOTQyNDUwMywianRpIjoiSGdtQzJmV3g4T3I4TVNaSCIsInN1YiI6MTMsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.IhS2IX_g8uqXKuke36gy2ylEE9bdbXFooeaGWxFonDo`,
  //     },
  //   };
  //   const response = await axios.get(`/note`, requestOptions);
  //   const references = await response.data.data.data;
  //   console.log(references);
  //   console.log(currentTopic);
  //   setReference(references);
  // };

  const { data:references } = useFetch(`/note`);

  return (
    <ReferenceContext.Provider value={[references]}>
      {props.children}
    </ReferenceContext.Provider>
  );
};
