import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { AuthContext } from "./Auth";
import { TopicContext } from "./TopicContext";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import btn_like from "../assets/btn_like.svg";
import btn_comment from "../assets/btn_comment.svg";

function Explore() {


  const [posts] = useContext(TopicContext);
  const authToken = useContext(AuthContext);
  
  const [searchResult, setSearchResult] = useState([]);
  const isSearching = searchResult.length > 0;
  console.log(searchResult);


  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => {
    console.log(data);

    const requestOptions = {
      mode: "no-cors",
      headers: {
        Authorization:
          `Bearer ${authToken[0]}`,
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
          <form onSubmit={handleSubmit(onSubmit)} className='flex flex-row'>
            <input
              className="inline-block w-full h-8 rounded-full p-2 mt-8"
              type="text"
              placeholder="search something here"
              {...register("search")}
            />
            <button type="submit" className="inline-block bg-red-400 hover:text-pinkred rounded text-white p-2 pl-4 pr-4 my-8 ml-2">
              <p className="font-semibold text-xs">Search</p>
            </button>
          </form>
        </div>

        {
          isSearching ?
            searchResult.map((searchResults) => (
              <div className="p-6 mb-2 bg-white hover:bg-pinkred hover:text-white" key={searchResults.id}>
                <div className=''>
                  <div className="flex flex-row">
                    <p className="p-3">
                      Username <span>@username</span>
                    </p>
                  </div>
                  <Link to={`/Topic/${searchResults.id}`}>
                    <article className="flex flex-col m-1">
                      <h2 className="font-semibold m-2">{searchResults.title}</h2>
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
                      <p className="mt-2">{searchResults.description}</p>
                    </article>
                  </Link>
                </div>
              </div>
            ))
            :

            posts.map((post) => (
              <div key={post.id} className='p-6 mb-2 bg-white hover:bg-pinkred hover:text-white'>
                <div className='flex flex-row'>
                  <img
                    src='https://via.placeholder.com/55'
                    alt='profile'
                    height='55px'
                    width='55px'
                    className='rounded-full'
                  />
                  <p className='p-3'>
                    Username <span>username</span>
                  </p>
                </div>
                <Link key={post.id} to={`/Topic/${post.id}`}>
                  <article className='flex flex-col m-1'>
                    <h2 className='font-semibold m-2'>{post.title}</h2>
                    <div>
                      <img
                        className='inline-block p-1'
                        height='32px'
                        width='32px'
                        src={btn_like}
                        alt=''
                      />
                      <p className='inline-block p-1'>123</p>
                      <img
                        className='inline-block p-1'
                        height='32px'
                        width='32px'
                        src={btn_comment}
                        alt=''
                      />
                      <p className='inline-block p-1'>234</p>
                    </div>
                  </article>
                </Link>
              </div>
            ))
        }
      </main>
    </div>
  );
}

export default Explore;
