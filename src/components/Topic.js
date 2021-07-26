import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { ReferenceContext } from "./ReferenceContext";
import { useForm } from "react-hook-form";
import { TopicContext } from "./TopicContext";
import { Link, useRouteMatch, useHistory } from "react-router-dom";
import { AuthContext, useAuth } from "./Auth";
import Reference from "./Reference";

function Topic() {

  const [comments, setComments] = useState([]);
  const [references, setReference] = useState([]);
  //const [posts, setPosts] = useState([]);
  const { authToken } = useAuth()
  const [posts] = useContext(TopicContext);

  useEffect(() => {
    getReference();
    getComments();
  }, [])

  const getReference = async () => {

    try {
      const requestOptions = {
        mode: "no-cors",
        headers: {
          Authorization:
            `Bearer ${authToken}`,
        },
      };
      const response = await axios.get(`/note`, requestOptions);
      const references = await response.data.data.data;
      setReference(references);
    } catch (error) {
      console.log(error)
    }
  };

  const getComments = async () => {

    try {
      const requestOptions = {
        mode: "no-cors",
        headers: {
          Authorization:
            `Bearer ${authToken}`,
        },
      };
      const response = await axios.get(`${currentTopic[0].id}/comment`, requestOptions);
      setComments(response.data.data);
    } catch (error) {
      console.log(error)
    }
  };

  const { register, handleSubmit, formState: { errors } } = useForm();


  const match = useRouteMatch();
  console.log(match);
  const topicReference = references.filter(reference => reference.topic_id == match.params.id)
  const currentTopic = posts.filter(post => post.id == match.params.id);
  const isReferenced = topicReference.length > 0;
  const isCommented = comments.length > 0;
  const isLoaded = currentTopic.length > 0;

  const history = useHistory();

  const onSubmit = data => {
    console.log(data);
    const requestOptions = {
      mode: "no-cors",
      headers: {
        Authorization:
          `Bearer ${authToken}`,
      },
    };
    axios.post(`/topic/${currentTopic[0].id}/comment`, {
      content: data.content,
    }, requestOptions)
      .then(function (response) {
        console.log(response);
        alert('success!');
        history.push(`/topic/${currentTopic[0].id}/comment`)
      })
      .catch(function (error) {
        console.log(error);
        alert(error);
      });
  };

  return (
    <div className="w-main h-screen ml-nav border-l border-r bg-lightgray">
      <header className="w-full shadow h-16 bg-white">
        <h1 className="font-bold p-5">Topic</h1>
      </header>
      <div className="bg-white w-full mx-auto p-3">
        <div className="flex flex-row mt-6">
          <img
            src="https://via.placeholder.com/55"
            alt="profile"
            height="55px"
            width="55px"
            className="rounded-full"
          />
          <p className="p-3">
            Username <span>@username</span>
          </p>
        </div>
        {isLoaded ?
          <div>
            <h1 className="font-semibold mt-2">{currentTopic[0].title}</h1>
            <p className="text-lg">
              {currentTopic[0].description}
            </p>
          </div>
          : <h1>Loading</h1>
        }
      </div>
      <header className="w-full shadow h-16 bg-white my-2 flex justify-between">
        <h1 className="font-bold p-5">Reference</h1>
        <Link to="/CreateRefs">
          <div className="cursor-pointer bg-pinkred  m-4 mt-4 mr-16 w-auto h-8 rounded-full align-right">
            <p className="p-1 px-1 text-white font-semibold">Add Reference</p>
          </div>
        </Link>
      </header>
      {isReferenced
        ? topicReference.map((reference) => (
          <div className="bg-white w-full shadow mx-auto m-2 p-3 hover:bg-pinkred hover:text-white cursor-pointer" key={reference.id}>
            <h3 className="font-semibold">{reference.title}</h3>
            <p>{reference.description}</p>
            <a href="#">{reference.url}</a>
          </div>
        ))
        : <p className="m-2">Oops, this topic doesnt have any reference yet</p>
      }
      <header className="w-full shadow h-16 bg-white my-2 flex justify-between">
        <h1 className="font-bold p-5">Comment</h1>
        <Link to="/CreateRefs">
        </Link>
      </header>

      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit(onSubmit)}>
        <textarea id="about" name="about" rows="3" className="shadow appearance-none border rounded w-full py-2 px-3 focus:outline-none focus:shadow-outline focus:ring-pinkred focus:border-pinkred mt-1 block w-full sm:text-sm border-gray-300 rounded-md" placeholder="Add your comment here" {...register("content", { required: true })} />
        <button className="cursor-pointer mt-2 bg-pinkred text-white font-bold text-lg hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-pinkred focus:ring-opacity-50  font-semibold w-1/2 h-8 rounded-full align-middle" type="submit">Comment</button>
      </form>

      {isCommented
        ? comments.map((comment) => (
          <div className="bg-white w-full shadow mx-auto m-2 p-3" key={comment.id}>
            <h3 className="font-semibold">{comment.users.username}</h3>
            <p>{comment.content}</p>
          </div>
        ))
        : <p className="m-2">Oops, this topic doesnt have any comments yet</p>
      }
    </div>
  );
}

export default Topic;
