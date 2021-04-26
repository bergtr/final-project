import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { AuthContext } from "./Auth";
import { TopicContext } from "./TopicContext";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import btn_like from "../assets/btn_like.svg";
import btn_comment from "../assets/btn_comment.svg";

function Explore() {

  //const [authToken, setAuth] = useContext(AuthContext);

  const [posts, setPosts] = useContext(TopicContext);
  const [searchResult, setSearchResult] = useState(posts)
  console.log(searchResult);

  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => {
      console.log(data);

      const requestOptions = {
          mode: "no-cors",
          headers: {
            Authorization:
              `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvbGVhcm5pbmcuYW5zaG9yLmNvXC9hcGlcL2xvZ2luIiwiaWF0IjoxNjE5NDA4NjY1LCJleHAiOjE2MTk0MTIyNjUsIm5iZiI6MTYxOTQwODY2NSwianRpIjoiZWZFeHYyc042QWtvUHRSNyIsInN1YiI6MTMsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.11MX6Bj-puCSdlnmFjAOMA4LA8u1UQtuXEgpq9k6T6M`,
          },
        };
    
        axios.get(`/topic?search=${data.search}`, requestOptions)
          .then(function (response) {
            console.log(response);
            const result = response.data.data.data;
            console.log(result);
            setSearchResult(result);
          })
          .catch(function (error) {
            console.log(error);
          });
  }

  return (
    <div className='w-main ml-nav border-l border-r bg-lightgray'>
      <header className="h-16  w-full border-b border-r bg-white fixed">
        <h1 className="font-bold p-5">Explore</h1>
      </header>
      <main className="pt-16 h-max">
        <div className="bg-black shadow p-4 h-32">
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              className="inline-block w-80 h-8 rounded-full p-2 mt-8"
              type="text"
              placeholder="search something here"
              {...register("search")} 
            />
            <button type="submit" className="inline-block bg-red-400 hover:text-pinkred rounded text-white p-2 pl-4 pr-4 my-8 ml-2">
              <p className="font-semibold text-xs">Search</p>
            </button>
          </form>
        </div>

        {searchResult.map((post) => (
          <div className="p-6 mb-2 bg-white" key={post.id}>
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

          </div>
        ))}
      </main>
    </div>
  );
}

export default Explore;
