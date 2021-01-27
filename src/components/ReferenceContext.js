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
          "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvbGVhcm5pbmcuYW5zaG9yLmNvXC9hcGlcL2xvZ2luIiwiaWF0IjoxNjExNzIzNDc2LCJleHAiOjE2MTE3MjcwNzYsIm5iZiI6MTYxMTcyMzQ3NiwianRpIjoienJ2eVNQbnFHelk1d3pCaiIsInN1YiI6MywicHJ2IjoiMjNiZDVjODk0OWY2MDBhZGIzOWU3MDFjNDAwODcyZGI3YTU5NzZmNyJ9.OEeslIbgAtp1WLRRMh3R9214daPYFfqYgx9k9XQ5Epw",
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
