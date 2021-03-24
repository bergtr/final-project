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
          "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvbGVhcm5pbmcuYW5zaG9yLmNvXC9hcGlcL2xvZ2luIiwiaWF0IjoxNjE2NTQ4MzY3LCJleHAiOjE2MTY1NTE5NjcsIm5iZiI6MTYxNjU0ODM2NywianRpIjoiQmdCZUc0RGE5d3h2OHF3SCIsInN1YiI6MywicHJ2IjoiMjNiZDVjODk0OWY2MDBhZGIzOWU3MDFjNDAwODcyZGI3YTU5NzZmNyJ9.I_zS61mnpSm7lmyhomrpOht1rpdvk39mChg3V8lpuUY",
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
