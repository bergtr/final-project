import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { TopicContext } from "./TopicContext";
import { ProfileContext } from "./ProfileContext";
import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import btn_like from "../assets/btn_like.svg";
import btn_comment from "../assets/btn_comment.svg";
import { AuthContext } from "./Auth";

function Profile() {

  const [profile, setProfile] = useState([]);
  
  //"https://learning.anshor.co/api/topic"

  const authToken = useContext(AuthContext);

  const fetchPost = async () => {

    try {
      const requestOptions = {
        mode: "no-cors",
        headers: {
          Authorization:
            `Bearer ${authToken[0]}`,
        },
      };
      const response = await axios.get("/profile", requestOptions);

      console.log(response.data.data);
      setProfile(response.data.data);
    } catch (error) {
      console.log(error)
    }

  };

  useEffect(() => {
    fetchPost();
  }, []);

  const [posts] = useContext(TopicContext);

  console.log(profile);


  return (
    <div className='w-main ml-nav border-l border-r bg-lightgray'>
      <header className="h-16  w-full border-b border-r bg-white fixed">
        <h1 className="font-bold p-5">Profile</h1>
      </header>

      <div className=" pt-16 h-max bg-white shadow p-4 h-auto flex">
        <div className="container flex flex-row">
          <div className="my-8 p-3">
            <div>
              <p className="font-semibold">
                {profile.display_name}
              </p>
              <p>3 Posts | 123 Followers | 321 Following</p>
            </div>

            <div className="cursor-pointer bg-pinkred m-2 text-center text-white font-semibold w-1/2 h-8 rounded-full align-middle">
              Edit Profile
            </div>
          </div>
        </div>
      </div>

      <main className="h-max">

        <div>
          {posts.map((post) => (
            <div className="p-6 mb-2 bg-white">
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
      </main>
    </div>
  );
}

export default Profile;
