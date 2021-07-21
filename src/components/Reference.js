import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "./Auth";
import { useRouteMatch, Link } from "react-router-dom";
import axios from "axios";

function Reference() {


  const [references, setReference] = useState([]);
  const authToken = useContext(AuthContext);

  useEffect(() => {
    const getReference = async () => {

      try {
        const requestOptions = {
          mode: "no-cors",
          headers: {
            Authorization:
              `Bearer ${authToken[0]}`,
          },
        };
        const response = await axios.get(`/note`, requestOptions);
        const references = await response.data.data.data;
        setReference(references);
      } catch (error) {
        console.log(error)
      }
    };
    getReference();
  }, [authToken]);

  const match = useRouteMatch();
  console.log(match);
  const topicReference = references.filter(reference => reference.topic_id == match.params.id)
  const isReferenced = topicReference.length > 0;

  return (
    <div className="w-main h-full ml-nav border-l border-r bg-lightgray">
      <header className="w-full shadow h-16 bg-white my-2 flex justify-between">
        <h1 className="font-bold p-5">Reference</h1>
        <Link to="/CreateRefs">
          <div className="cursor-pointer bg-pinkred  m-4 mt-4 mr-16 w-auto h-8 rounded-full align-right">
            <p className="p-1 px-1 text-white font-semibold">Add Reference</p>
          </div>
        </Link>
      </header>
      {isReferenced
        ? topicReference.map((reference) => (
          <div className="bg-white w-full shadow mx-auto m-2 p-3 hover:bg-pinkred hover:text-white cursor-pointer" key={reference.id}>
            <h3 className="font-semibold">{reference.title}</h3>
            <p>{reference.description}</p>
            <a href="#">{reference.url}</a>
          </div>
        ))
        : <p className="m-2">Oops, this topic doesnt have any reference yet</p>
      }
    </div>
  );
}

export default Reference;