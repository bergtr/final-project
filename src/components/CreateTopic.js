import React from "react";
import { useForm } from "react-hook-form";
function CreateTopic() {

  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <div className="w-main ml-nav border-l border-r bg-lightgray">
      <header className="container h-16 border-r border-b bg-white fixed">
        <h1 className="font-bold p-5 w-full">Create a Post</h1>
      </header>
      <main className="pt-16 h-max">
        <form onSubmit={handleSubmit(onSubmit)}>
          <input type="text" placeholder="Title" {...register("Title", { required: true })} />
          <input type="text" placeholder="Description" {...register("Description", { required: true })} />
          <input type="submit" />
        </form>
      </main>
    </div>
  );
}

export default CreateTopic;