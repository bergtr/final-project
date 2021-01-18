import React from "react";
import { Link } from "react-router-dom";
function Settings_Sidebar() {
  return (
    <nav className="container h-screen w-2/5 mt-8 flex flex-col content-around">
      <Link className="hover:bg-pinkred hover:text-white" to="/settings/username">
        <div className=" h-auto flex flex-row mx-4 my-8">
          <p>Change Username</p>
          <h3 className="font-bold ml-40">{">"}</h3>
        </div>
      </Link>
      <Link className="hover:bg-pinkred hover:text-white" to="/settings/password">
        <div className="h-auto flex flex-row mx-4 my-8 ">
          <p>Change Password</p>
          <h3 className="font-bold ml-40">{">"}</h3>
        </div>
      </Link>
      <Link className="hover:bg-pinkred hover:text-white" to="/settings/email">
        <div className="h-auto flex flex-row mx-4 my-8 ">
          <p>Change Email</p>
          <h3 className="font-bold ml-44">{">"}</h3>
        </div>
      </Link>
    </nav>
  );
}

export default Settings_Sidebar;
