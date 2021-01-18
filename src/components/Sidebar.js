import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <nav className="h-screen w-1/5 bg-white float-right">
      <header className="w-full shadow h-16 bg-white">
        <h1 className="font-bold p-5">Who to Follow</h1>
      </header>
      <div className="container mt-8 flex flex-col content-around">
        <Link className='hover:bg-pinkred hover:text-white' to="/Profile">
          <div className="cursor-pointer p-1 mx-2 my-4 flex flex-row">
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
        </Link>

        <Link className='hover:bg-pinkred hover:text-white' to="/Profile">
          <div className="cursor-pointer p-1 mx-2 my-4 flex flex-row">
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
        </Link>

        <Link className='hover:bg-pinkred hover:text-white' to="/Profile">
          <div className="cursor-pointer p-1 mx-2 my-4 flex flex-row">
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
        </Link>
      </div>
    </nav>
  );
}

export default Sidebar;
