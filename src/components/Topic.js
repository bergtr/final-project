import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { ReferenceContext } from "./ReferenceContext";
import { useRouteMatch } from "react-router-dom";

function Topic() {
  const [references, setReference] = useContext(ReferenceContext);
  
  const match = useRouteMatch();
  console.log(match);

  return (
    <div className="container">
      <header className="w-full shadow h-16 bg-white">
        <h1 className="font-bold p-5">Home</h1>
      </header>
      <div className="bg-white w-full mx-auto p-2">
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
        <h1 className="font-semibold mt-2">Title</h1>
        <p className="text-lg">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit esse et
          error non unde veniam alias, nesciunt laboriosam laudantium pariatur
          fuga odio accusantium quo beatae debitis nostrum voluptatum a animi.
        </p>
      </div>
      <header className="w-full shadow h-16 bg-white my-2">
        <h1 className="font-bold p-5">Reference</h1>
      </header>
      {references.map((reference) => (
        <div className="bg-white w-full shadow mx-auto m-2 p-2 hover:bg-pinkred hover:text-white cursor-pointer">
          <h3 className="font-semibold">{reference.title}</h3>
          <p>{reference.description}</p>
          <a href="#">{reference.url}</a>
        </div>
      ))}
    </div>
  );
}

export default Topic;
