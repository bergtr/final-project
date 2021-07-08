import React, { Suspense, useContext, useEffect, useState } from "react";
import Feeds from "./Feeds.js";
import useFetch from "../hooks/useFetch";
import { TopicContext } from "./TopicContext";
import { Link, useRouteMatch } from "react-router-dom";
import btn_like from "../assets/btn_like.svg";
import btn_comment from "../assets/btn_comment.svg";

function Home() {
  const [posts, setPosts] = useState([]);
  const [feeds, setFeeds] = useState(null)
  //const { data: posts, loading } = useFetch(`/topic`);
  setFeeds(posts?.data?.data?.data ?? null)

  return (
    <div className="w-main ml-nav border-l border-r bg-lightgray">
      <header className="container h-16 border-r border-b bg-white fixed">
        <h1 className="font-bold p-5 w-full">Home</h1>
      </header>
      <main className="pt-16 h-max">
          <div>
            {feeds.map((post) => (
              <div
                key={post.id}
                className="p-6 mb-2 bg-white hover:bg-pinkred hover:text-white"
              >
                <div className="flex flex-row">
                  <img
                    src="https://via.placeholder.com/55"
                    alt="profile"
                    height="55px"
                    width="55px"
                    className="rounded-full"
                  />
                  <p className="p-3">
                    Username <span>@username</span>
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
      </main>
    </div>
  );
}

export default Home;
