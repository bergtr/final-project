import React from "react";
import { useForm } from "react-hook-form";
import { useHistory, Link } from "react-router-dom";
import { useAuth } from "./Auth";

function Login() {
  const history = useHistory();
  const { login } = useAuth();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => {
    console.log(data);
    login();
    history.push('/');
  }
  console.log(errors);

  return (
    <div className="w-full flex flex-wrap">
      <div className="w-full md:w-1/2 flex flex-col">

        <div className="flex flex-col justify-center md:justify-start my-auto pt-8 md:pt-0 px-8 md:px-24 lg:px-32">
          <p class="text-center text-3xl">Welcome.</p>
          <form className="flex flex-col pt-3 md:pt-8" onSubmit={handleSubmit(onSubmit)}>

            <div className="flex flex-col pt-4">
              <label className="text-lg">Username</label>
              <input type="text" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-pinkred focus:border-pinkred" placeholder="Username" {...register("Username", { required: true, maxLength: 80 })} />
            </div>

            <div className="flex flex-col pt-4">
              <label className="text-lg">Password</label>
              <input type="password" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-pinkred focus:border-pinkred" placeholder="Password" {...register("Password", { required: true, min: 6, maxLength: 100 })} />
            </div>

            <button className="bg-pinkred text-white font-bold text-lg hover:bg-gray-700 p-2 mt-8" type="submit">Login</button>
          </form>
          <div class="text-center pt-12 pb-12">
            <p>Don't have an account? <Link to='/Register' class="underline font-semibold">Register here.</Link></p>
          </div>
        </div>

      </div>

      <div class="w-1/2 shadow-2xl">
        <img class="object-cover w-full h-screen hidden md:block" alt='fun pics' src="https://source.unsplash.com/IXUM4cJynP0" />
      </div>

    </div>

  );
}

export default Login;