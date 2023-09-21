import React from "react";
import { Link, useLoaderData, useNavigate } from "react-router-dom";

const SinglePosts = () => {
  const postData = useLoaderData();
  const { id, title, body } = postData;
  const navigate = useNavigate()
  const handleClick = ()=>{
    navigate(-1)
  }
  return (
    <div className="bg-green-300 p-3 space-y-5 font-medium rounded-md flex w-80 mx-auto flex-col">
      <h2>Title : {title}</h2>
      <p className="flex-grow">Description : {body}</p>
      <div className="text-center">
      {/* <Link to={`/posts/`} > <button className="btn btn-neutral">Back</button></Link> */}
      <button className="btn btn-neutral" onClick={()=>handleClick()}>Go back</button>
      </div>
    </div>
  );
};

export default SinglePosts;
