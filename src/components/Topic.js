import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { ReferenceContext } from "./ReferenceContext";
import { TopicContext } from "./TopicContext";
import { useRouteMatch } from "react-router-dom";

function Topic() {
  useEffect(() => {
  }, [])

  const [references] = useContext(ReferenceContext);
  const [topics] = useContext(TopicContext);

  const match = useRouteMatch();
  console.log(match);
  const topicReference = references.filter(reference => reference.topic_id == match.params.id)
  const currentTopic = topics.filter(topic => topic.id == match.params.id);
  const isReferenced = topicReference.length > 0;

  console.log(isReferenced)
  

  return (
    <div className="w-main ml-nav border-l border-r bg-lightgray">
      <header className="w-full shadow h-16 bg-white">
        <h1 className="font-bold p-5">Home</h1>
      </header>
      <div className="bg-white w-full mx-auto p-3">
        <div className="flex flex-row mt-6">
          <img
            src="https://via.placeholder.com/55"
            alt="profile"
            height="55px"
            width="55px"
            className="rounded-full"
          />
          <p className="p-3">
            Username <span className>@username</span>
          </p>
        </div>
        <h1 className="font-semibold mt-2">{currentTopic[0].title}</h1>
        <p className="text-lg">
         {currentTopic[0].description}
        </p>
      </div>
      <header className="w-full shadow h-16 bg-white my-2">
        <h1 className="font-bold p-5">Reference</h1>
      </header>
      {isReferenced 
      ? topicReference.map((reference) => (
        <div className="bg-white w-full shadow mx-auto m-2 p-3 hover:bg-pinkred hover:text-white cursor-pointer" key={reference.id}>
          <h3 className="font-semibold">{reference.title}</h3>
          <p>{reference.description}</p>
          <a href="#">{reference.url}</a>
        </div>
      ))
      : `Oops, this topic doesnt have references yet` 
      }
    </div>
  );
}

export default Topic;
