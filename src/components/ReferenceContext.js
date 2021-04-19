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
  const [authToken, setAuth] = useContext(AuthContext)
  //"https://learning.anshor.co/api/topic"

  const getReference = async () => {
    const requestOptions = {
      mode: "no-cors",
      headers: {
        Authorization:
          `Bearer ${authToken}`,
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
