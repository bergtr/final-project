import React, {useContext} from "react";
import { useRouteMatch, Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { TopicContext } from "./TopicContext";
import btn_like from "../assets/btn_like.svg";
import btn_comment from "../assets/btn_comment.svg";

function Profile() {

  const { data:profile } = useFetch(`/profile`);
  console.log(profile);


  const [posts, setPosts] = useContext(TopicContext);
  
  const {routeMatch} = useRouteMatch();
  console.log(routeMatch);

  return (
    <div className='w-main ml-nav border-l border-r bg-lightgray'>
      <header className="h-16  w-full border-b border-r bg-white fixed">
        <h1 className="font-bold p-5">Profile</h1>
      </header>

      <div className=" pt-16 h-max bg-white shadow p-4 h-auto flex">
        <div className="container flex flex-row">
          <img
            src="https://via.placeholder.com/178"
            alt="profile"
            height="178px"
            width="178px"
            className="rounded-full"
          />
          <div className="my-8 p-3">
            <p>
              Username <span className>@username</span>
            </p>
            <p>3 Posts | 123 Followers | 321 Following</p>
            <div className="cursor-pointer bg-pinkred m-2 text-center text-white font-semibold w-1/2 h-8 rounded-full align-middle">
              Edit Profile
            </div>
          </div>
        </div>
      </div>

      <main className="h-max">
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
      </main>
    </div>
  );
}

export default Profile;
