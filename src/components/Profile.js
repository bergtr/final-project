import React from "react";
import btn_like from "../assets/btn_like.svg";
import btn_comment from "../assets/btn_comment.svg";

function Profile() {
  return (
    <div>
      <header className="w-full shadow h-16 bg-white">
        <h1 className="font-bold p-5">Profile</h1>
      </header>
      <div className="bg-white shadow p-4 h-auto flex">
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
      <header className="w-full shadow h-16 bg-white">
        <h1 className="font-bold p-5">Home</h1>
      </header>
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
        <article className="flex flex-col m-1">
          <h2 className="font-semibold m-2">Title</h2>
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
          <p className="mt-2">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore
            aliquam quam, enim deleniti tenetur qui quibusdam commodi! Maxime
            ipsam adipisci quisquam hic iusto, similique quidem, porro dicta
            quam autem rem. Lorem ipsum dolor sit amet consectetur, adipisicing
            elit. Vel, consectetur inventore nemo sed, incidunt, omnis commodi
            officiis vero amet sunt dolore eaque dolores facere odit qui unde.
            Quisquam, perspiciatis et.
          </p>
        </article>
      </div>
      <header className="w-full shadow h-16 bg-white">
        <h1 className="font-bold p-5">Home</h1>
      </header>
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
        <article className="flex flex-col m-1">
          <h2 className="font-semibold m-2">Title</h2>
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
          <p className="mt-2">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore
            aliquam quam, enim deleniti tenetur qui quibusdam commodi! Maxime
            ipsam adipisci quisquam hic iusto, similique quidem, porro dicta
            quam autem rem. Lorem ipsum dolor sit amet consectetur, adipisicing
            elit. Vel, consectetur inventore nemo sed, incidunt, omnis commodi
            officiis vero amet sunt dolore eaque dolores facere odit qui unde.
            Quisquam, perspiciatis et.
          </p>
        </article>
      </div>
      <header className="w-full shadow h-16 bg-white">
        <h1 className="font-bold p-5">Home</h1>
      </header>
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
        <article className="flex flex-col m-1">
          <h2 className="font-semibold m-2">Title</h2>
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
          <p className="mt-2">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore
            aliquam quam, enim deleniti tenetur qui quibusdam commodi! Maxime
            ipsam adipisci quisquam hic iusto, similique quidem, porro dicta
            quam autem rem. Lorem ipsum dolor sit amet consectetur, adipisicing
            elit. Vel, consectetur inventore nemo sed, incidunt, omnis commodi
            officiis vero amet sunt dolore eaque dolores facere odit qui unde.
            Quisquam, perspiciatis et.
          </p>
        </article>
      </div>
    </div>
  );
}

export default Profile;
