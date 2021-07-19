import React from "react";
//import { AuthContext } from "./Auth";
import { useForm } from "react-hook-form";
import axios from 'axios';

function CreateTopic() {


  //const [title, setTitle] = useState('');
  //const [description, setDescription] = useState('');


  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => {
    console.log(data);

    const requestOptions = {
      mode: "no-cors",
      headers: {
        Authorization:
          `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvYWt1Lm5kYWt0YXUuY29tXC9hcGlcL2xvZ2luIiwiaWF0IjoxNjI2Njc2Njk4LCJleHAiOjE2MjY2ODAyOTgsIm5iZiI6MTYyNjY3NjY5OCwianRpIjoiSkRkU1pBUWNFM0oyVFdNSCIsInN1YiI6MywicHJ2IjoiMjNiZDVjODk0OWY2MDBhZGIzOWU3MDFjNDAwODcyZGI3YTU5NzZmNyJ9.SRwZmXjSAa4lDUjYAjc1-XIyfn7L1m3PjrIrcNWs7Lg`,
      },
    };
    axios.post('/topic', {
      title: data.title,
      is_public: '1',
      description: data.description
    }, requestOptions)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className="w-main ml-nav border-l border-r bg-lightgray">
      <header className="container h-16 border-r border-b bg-white fixed">
        <h1 className="font-bold p-5 w-full">Create a Post</h1>
      </header>
      <main className="pt-16 h-max">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit(onSubmit)}>
          <input type="text" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-pinkred focus:border-pinkred" placeholder="Title"  {...register("title", { required: true })} />
          <textarea id="about" name="about" rows="3" className="shadow appearance-none border rounded w-full py-2 px-3 focus:outline-none focus:shadow-outline focus:ring-pinkred focus:border-pinkred mt-1 block w-full sm:text-sm border-gray-300 rounded-md" placeholder="Description" {...register("description", { required: true })} />
          <input className="cursor-pointer bg-pinkred m-2 text-center hover:bg-white hover:ring-2 hover:ring-pinkred text-white hover:text-pinkred focus:outline-none focus:ring-2 focus:ring-pinkred focus:ring-opacity-50  font-semibold w-1/2 h-8 rounded-full align-middle" type="submit" />
        </form>
      </main>
    </div>
  );
}

export default CreateTopic;