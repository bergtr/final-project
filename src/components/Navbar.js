import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="h-screen w-1/5 bg-white">
      <header className="w-full shadow h-16 bg-white">
        <h1 className="font-bold p-5">App Name</h1>
      </header>
      <div className="container mt-10 flex flex-col content-around">
        <Link to="/">
          <div className="inline-block cursor-pointer m-2 p-2 text-left font-semibold align-middle focus:text-pinkred hover:text-pinkred">
            <svg
              className="inline-block pr-1 fill-current"
              width="45px"
              height="45px"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M8 20H3V10H0L10 0l10 10h-3v10h-5v-6H8v6z" />
            </svg>
            Home
          </div>
        </Link>

        <Link to="/Explore">
          <div className="inline-block cursor-pointer m-2 p-2 text-left font-semibold align-middle focus:text-pinkred hover:text-pinkred">
            <svg
              className="inline-block pr-1 fill-current"
              width="45px"
              height="45px"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zM7.88 7.88l-3.54 7.78 7.78-3.54 3.54-7.78-7.78 3.54zM10 11a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
            </svg>
            Explore
          </div>
        </Link>

        <Link to="/Profile">
          <div className="inline-block cursor-pointer m-2 p-2 text-left font-semibold align-middle focus:text-pinkred hover:text-pinkred">
            <svg
              className="inline-block pr-1 fill-current"
              width="45px"
              height="45px"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M5 5a5 5 0 0 1 10 0v2A5 5 0 0 1 5 7V5zM0 16.68A19.9 19.9 0 0 1 10 14c3.64 0 7.06.97 10 2.68V20H0v-3.32z" />
            </svg>
            Profile
          </div>
        </Link>

        <Link to="/Bookmarks">
          <div className="inline-block cursor-pointer m-2 p-2 text-left font-semibold align-middle hover:text-pinkred">
            <svg
              className="inline-block pr-1 fill-current"
              width="45px"
              height="45px"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M2 2c0-1.1.9-2 2-2h12a2 2 0 0 1 2 2v18l-8-4-8 4V2z" />
            </svg>
            Bookmarks
          </div>
        </Link>

        <Link to="/Settings">
          <div className="inline-block cursor-pointer m-2 p-2 text-left font-semibold align-middle hover:text-pinkred">
            <svg
              className="inline-block pr-1 fill-current"
              width="45px"
              height="45px"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M3.94 6.5L2.22 3.64l1.42-1.42L6.5 3.94c.52-.3 1.1-.54 1.7-.7L9 0h2l.8 3.24c.6.16 1.18.4 1.7.7l2.86-1.72 1.42 1.42-1.72 2.86c.3.52.54 1.1.7 1.7L20 9v2l-3.24.8c-.16.6-.4 1.18-.7 1.7l1.72 2.86-1.42 1.42-2.86-1.72c-.52.3-1.1.54-1.7.7L11 20H9l-.8-3.24c-.6-.16-1.18-.4-1.7-.7l-2.86 1.72-1.42-1.42 1.72-2.86c-.3-.52-.54-1.1-.7-1.7L0 11V9l3.24-.8c.16-.6.4-1.18.7-1.7zM10 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
            </svg>
            Settings
          </div>
        </Link>

        <Link to="/Logout">
          <div className="inline-block cursor-pointer m-2 p-2 pl-4 text-left font-semibold align-middle hover:text-pinkred">
            <svg
              className="inline-block pr-1 fill-current"
              width="45px"
              height="45px"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 225.000000 225.000000"
              preserveAspectRatio="xMidYMid meet"
            >
              {" "}
              <g transform="translate(0.000000,225.000000) scale(0.100000,-0.100000)">
                {" "}
                <path d="M49 2180 l-30 -29 3 -843 c2 -464 7 -850 11 -859 6 -13 561 -331 684 -393 39 -20 62 -20 88 0 22 16 32 102 34 272 l1 82 324 0 c312 0 324 1 350 21 l26 20 0 270 0 269 -75 0 -75 0 0 -215 0 -215 -273 0 -274 0 -7 617 c-6 515 -10 621 -22 634 -8 9 -100 65 -204 125 -141 81 -186 110 -173 116 10 3 228 7 486 7 l467 1 0 -275 0 -275 75 0 75 0 0 328 0 329 -23 21 -23 22 -708 0 -708 0 -29 -30z" />
                <path d="M1722 1588 c-8 -8 -12 -49 -12 -120 l0 -108 -187 -1 c-230 0 -279 -7 -310 -43 -34 -40 -31 -96 6 -138 l29 -33 231 -3 231 -3 0 -112 c0 -104 2 -113 22 -126 19 -12 30 -7 127 59 172 118 358 259 365 277 10 25 -21 52 -229 203 -239 172 -246 175 -273 148z" />
              </g>
            </svg>
            Logout
          </div>
        </Link>

        <div className="cursor-pointer bg-pinkred m-2 text-center text-white font-semibold w-1/2 h-8 rounded-full align-middle">
          Create Post
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
