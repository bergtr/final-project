import axios from "axios";

import { TopicContext } from "./TopicContext";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";

function CreateRefs() {

    const [posts, setPosts] = useContext(TopicContext);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);

        const requestOptions = {
            mode: "no-cors",
            headers: {
              Authorization:
                `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvbGVhcm5pbmcuYW5zaG9yLmNvXC9hcGlcL2xvZ2luIiwiaWF0IjoxNjE5NjM1MzUyLCJleHAiOjE2MTk2Mzg5NTIsIm5iZiI6MTYxOTYzNTM1MiwianRpIjoibzJsN2FoT0FUeEh6aWF3RSIsInN1YiI6MTQsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.85W2AgYcJmPRO_9wKHN_pZLbhwxFvmJyrzDHksuI1Eo`,
            },
          };
      
          axios.post(`/topic/${data.post}/note`, {
            title: data.title,
            desc: data.description,
            url : data.url,
            is_public: '1',
          }, requestOptions)
            .then(function (response) {
              console.log(response);
            })
            .catch(function (error) {
              console.log(error);
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
                    <textarea id="about" name="about" rows="3" class="shadow appearance-none border rounded w-full py-2 px-3 focus:outline-none focus:ring-pinkred focus:border-pinkred mt-1 block w-full sm:text-sm border-lightgray rounded-md" placeholder="Description" type="text" placeholder="Description" {...register("description", { required: true })} />
                    <select class="mt-1 block w-full py-2 px-3 border border-lightgray bg-white rounded-md shadow-sm focus:outline-none focus:ring-pinkred focus:border-pinkred sm:text-sm" {...register("post", { required: true })}>
                        {posts.map((post) => (
                            <option value={post.id}>{post.title}</option>
                        ))}
                    </select>
                    <input className="cursor-pointer bg-pinkred m-2 text-center hover:bg-white hover:ring-2 hover:ring-pinkred text-white hover:text-pinkred focus:outline-none focus:ring-2 focus:ring-pinkred focus:ring-opacity-50  font-semibold w-1/2 h-8 rounded-full align-middle" type="submit" />
                </form>
            </main>
        </div>
    );
}

export default CreateRefs;