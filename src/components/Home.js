import React, { useContext, useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";
import { TopicContext } from "./TopicContext";
import axios from "axios";
//import { ProfileContext } from "./ProfileContext";
import { Link } from "react-router-dom";
import btn_like from "../assets/btn_like.svg";
import btn_comment from "../assets/btn_comment.svg";

function Home() {

  const [posts, setPosts] = useState([]);

//const [authToken, setAuth] = useContext(AuthContext);   
//"https://learning.anshor.co/api/topic"

const fetchPost = async () => {

  try {
    const requestOptions = {
        mode: "no-cors",
        headers: {
            Authorization:
                `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvYWt1Lm5kYWt0YXUuY29tXC9hcGlcL2xvZ2luIiwiaWF0IjoxNjI2ODI3NzIzLCJleHAiOjE2MjY4MzEzMjMsIm5iZiI6MTYyNjgyNzcyMywianRpIjoiUnBiUFF5TVY4U3d1NWhTdyIsInN1YiI6MywicHJ2IjoiMjNiZDVjODk0OWY2MDBhZGIzOWU3MDFjNDAwODcyZGI3YTU5NzZmNyJ9.jyuAIc13XDBbiHvHFJc-TwqRJvwfAlnUwGUqD9G9ufs`,
        },
    };
    const response = await axios.get("/topic", requestOptions);
    const posts = await response.data.data.data;
    setPosts(posts);
    console.log(posts)
  } catch (error) {
    console.log(error);
  }

};


  useEffect(() => {
		fetchPost();
	}, []);

	//const [posts] = useContext(TopicContext);


  
	return (
		<div className='w-main ml-nav border-l border-r bg-lightgray'>
			<header className='container h-16 border-r border-b bg-white fixed'>
				<h1 className='font-bold p-5 w-full'>Home</h1>
			</header>
			<main className='pt-16 h-max'>
				{posts.map((post) => (
					<div key={post.id} className='p-6 mb-2 bg-white hover:bg-pinkred hover:text-white'>
						<div className='flex flex-row'>
							<img
								src='https://via.placeholder.com/55'
								alt='profile'
								height='55px'
								width='55px'
								className='rounded-full'
							/>
							<p className='p-3'>
								Username <span className>username</span>
							</p>
						</div>
						<Link key={post.id} to={`/Topic/${post.id}`}>
							<article className='flex flex-col m-1'>
								<h2 className='font-semibold m-2'>{post.title}</h2>
								<div>
									<img
										className='inline-block p-1'
										height='32px'
										width='32px'
										src={btn_like}
										alt=''
									/>
									<p className='inline-block p-1'>123</p>
									<img
										className='inline-block p-1'
										height='32px'
										width='32px'
										src={btn_comment}
										alt=''
									/>
									<p className='inline-block p-1'>234</p>
								</div>
							</article>
						</Link>
					</div>
				))}
			</main>
		</div>
	);
}

export default Home;
