import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Sidebar() {
  useEffect(() => {
    fetchPost();
  }, []);

  const [suggestedUsers, setSuggestedUsers] = useState([]);

  const fetchPost = async () => {
    const response = await axios.get("https://jsonplaceholder.typicode.com/users?id=1");
    const suggestedUsers = await response.data;
    // console.log(suggestedUsers);
    setSuggestedUsers(suggestedUsers);
  };

  return (
    <nav className="h-screen w-side bg-white">
      <header className="fixed border-b border-l w-side h-16 bg-white">
        <h1 className="font-bold p-5">Suggested Users</h1>
      </header>

      <div className="w-full mt-16 flex flex-col content-around">
        {suggestedUsers.map((suggestedUser) => (
          <Link className="hover:bg-pinkred hover:text-white" to={`/Profile/${suggestedUser.id}`}>
            <div className="cursor-pointer p-1 mx-2 my-4 flex flex-row">
              <img
                src="https://via.placeholder.com/55"
                alt="profile"
                height="55px"
                width="55px"
                className="rounded-full"
              />
              <p className="p-3">
                {suggestedUser.name} <span className>@{suggestedUser.username}</span>
              </p>
            </div>
          </Link>
        ))}
      </div>
    </nav>
  );
}

export default Sidebar;
