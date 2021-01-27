import React, { useState, useEffect, useContext } from "react";
import { TopicContext } from "./TopicContext";
import { Link } from "react-router-dom";
import btn_like from "../assets/btn_like.svg";
import btn_comment from "../assets/btn_comment.svg";

function Explore() {

  const [posts, setPosts] = useContext(TopicContext);

  return (
    <div>
      <header className="w-full h-16 bg-white">
        <h1 className="font-bold p-5">Explore</h1>
      </header>
      <div className="bg-black shadow p-4 h-32 flex">
        <span className="w-auto flex justify-end items-center text-gray-500 p-2">
          <i className="material-icons text-3xl">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" />
            </svg>
          </i>
        </span>
        <input
          className="w-full h-8 rounded-full p-2 mt-8"
          type="text"
          placeholder="search something here"
        />
        <button className="bg-red-400 hover:bg-red-300 rounded text-white p-2 pl-4 pr-4">
          <p className="font-semibold text-xs">Search</p>
        </button>
      </div>
      <div className="p-6 mb-2 bg-white">
        {posts.map((post) => (
          <div>
            <div className="flex flex-row">
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
            <Link to={`/Topic/${post.id}`}>
              <article className="flex flex-col m-1">
                <h2 className="font-semibold m-2">{post.title}</h2>
                <div>
                  <img
                    className="inline-block p-1"
                    height="32px"
                    width="32px"
                    src={btn_like}
                    alt=""
                  />
                  <p className="inline-block p-1">123</p>
                  <img
                    className="inline-block p-1"
                    height="32px"
                    width="32px"
                    src={btn_comment}
                    alt=""
                  />
                  <p className="inline-block p-1">234</p>
                </div>
                <p className="mt-2">{post.description}</p>
              </article>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Explore;
