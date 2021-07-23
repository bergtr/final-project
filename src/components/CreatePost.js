import React from "react";
import { Link } from "react-router-dom";

function CreatePost() {
  return (
    <div className="w-full ml-nav h-screen border-l border-r">
      <header className="container h-16 border-r border-b bg-white fixed">
        <h1 className="font-bold p-5 w-full">Create a Post</h1>
      </header>
      <main className="mt-8 ml-8 pt-16 h-max flex flex-col">
        <Link to="/CreateTopic">
          <div className="cursor-pointer bg-pinkred m-2 text-center text-white font-semibold w-1/2 h-8 rounded-full align-middle">
            Create Topic
          </div>
        </Link>
        <Link to="/CreateRefs">
          <div className="cursor-pointer bg-pinkred m-2 text-center text-white font-semibold w-1/2 h-8 rounded-full align-middle">
            Create Reference
          </div>
        </Link>
      </main>
    </div>
  );
}

export default CreatePost;
