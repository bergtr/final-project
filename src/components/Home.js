import React, { useContext, useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";
import { TopicContext } from "./TopicContext";
import { AuthContext, useAuth } from "./Auth";
import axios from "axios";
import { UserContext } from "./UserContext";
import { Link } from "react-router-dom";
import btn_like from "../assets/btn_like.svg";
import btn_comment from "../assets/btn_comment.svg";

function Home() {
	const [posts, setPosts] = useState([]);

	const auth = useContext(AuthContext);

	//"https://learning.anshor.co/api/topic"

	useEffect(() => {
		const fetchPost = async () => {
			const requestOptions = {
				mode: "no-cors",
				headers: {
					Authorization: `Bearer ${auth.authToken}`,
				},
			};

			try {
				const response = await axios.get("/topic", requestOptions);
				const posts = await response.data.data.data;
				setPosts(posts);
				console.log(posts);
			} catch (error) {
				console.log(error);
			}
		};
		fetchPost();
	}, [auth]);

	// const [posts] = useContext(TopicContext);

	return (
		<div className='w-main ml-nav border-l border-r bg-lightgray'>
			<header className='container h-16 border-r border-b bg-white fixed'>
				<h1 className='font-bold p-5 w-full'>Home</h1>
			</header>
			<main className='pt-16 h-max'>
				{posts.map((post) => (
					<div
						key={post.id}
						className='p-6 mb-2 bg-white hover:bg-pinkred hover:text-white'
					>
						<div className='flex flex-row'>
							<img
								src='https://via.placeholder.com/55'
								alt='profile'
								height='55px'
								width='55px'
								className='rounded-full'
							/>
							<p className='p-3'>
								<span>Display Name</span>
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
								<p className='mt-2'>{post.description}</p>
							</article>
						</Link>
					</div>
				))}
			</main>
		</div>
	);
}

export default Home;
