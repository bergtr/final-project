import axios from "axios";
import { TopicContext } from "./TopicContext";
import { AuthContext } from "./Auth";
import React, { useContext } from "react";
import { useHistory } from "react-router";
import { useForm } from "react-hook-form";

function CreateRefs() {

  
  const  authToken  = useContext(AuthContext);
  const history = useHistory();

  const [posts] = useContext(TopicContext);
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

    axios.post(`/topic/${data.post}/note`, {
      title: data.title,
      desc: data.description,
      url: data.url,
      is_public: '1',

    }, requestOptions)
      .then(function (response) {
        console.log(response);
        alert('success dude!');
        history.push('/');
      })
      .catch(function (error) {
        console.log(error);
        alert(error);
      });

  }

  return (
    <div className="w-main ml-nav border-l border-r bg-lightgray">
      <header className="container h-16 border-r border-b bg-white fixed">
        <h1 className="font-bold p-5 w-full">Create a Post</h1>
      </header>
      <main className="pt-16 h-max">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit(onSubmit)}>
          <input className="shadow appearance-none border rounded w-full mt-1 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-pinkred focus:border-pinkred" type="text" placeholder="Title"  {...register("title", { required: true })} />
          <input className="shadow appearance-none border rounded w-full mt-1 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-pinkred focus:border-pinkred" type="text" placeholder="URL" {...register("url", { required: true })} />
          <textarea id="about" name="about" rows="3" className="shadow appearance-none border rounded w-full py-2 px-3 focus:outline-none focus:ring-pinkred focus:border-pinkred mt-1 block w-full sm:text-sm border-lightgray rounded-md" placeholder="Description" type="text" placeholder="Description" {...register("description", { required: true })} />
          <select className="mt-1 block w-full py-2 px-3 border border-lightgray bg-white rounded-md shadow-sm focus:outline-none focus:ring-pinkred focus:border-pinkred sm:text-sm" {...register("post", { required: true })}>
            {posts.map((post) => (
              <option key={post.id} value={post.id}>{post.title}</option>
            ))}
          </select>
          <input className="cursor-pointer bg-pinkred m-2 text-center hover:bg-white hover:ring-2 hover:ring-pinkred text-white hover:text-pinkred focus:outline-none focus:ring-2 focus:ring-pinkred focus:ring-opacity-50  font-semibold w-1/2 h-8 rounded-full align-middle" type="submit"/>
        </form>
      </main>
    </div>
  );
}

export default CreateRefs;