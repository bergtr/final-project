import React, { useState, useEffect, createContext, useContext } from "react";
import { TopicContext } from "./TopicContext";
import { AuthContext } from "./Auth";
import axios from "axios";

export const ReferenceContext = createContext();

export const ReferenceProvider = (props) => {
  const [references, setReference] = useState([]);
  const authToken = useContext(AuthContext);


  useEffect(() => {
    getReference();
  }, []);

 
  //"https://learning.anshor.co/api/topic"

  const getReference = async () => {
    const requestOptions = {
      mode: "no-cors",
      headers: {
        Authorization:
          `Bearer ${authToken}`,
      },
    };

    try {
      const response = await axios.get(`/note`, requestOptions);
      const references = await response.data.data.data;
      setReference(references);
    } catch (error) {
      console.log(error)
    }

  };

  return (
    <ReferenceContext.Provider value={[references, setReference]}>
      {props.children}
    </ReferenceContext.Provider>
  );
};
