import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Post = ({ post }) => {
  const { id, title, body } = post;
  const navigete = useNavigate()
  const handleShowMore =()=>{
navigete(`/posts/${id}`)
  }
  return (
    <div className="bg-orange-300 p-3 space-y-5 font-medium rounded-md flex flex-col">
      <h2>Title : {title}</h2>
      <p className="flex-grow">Description : {body}</p>
      <div className="text-center">
       {/* <Link to={`/posts/${id}`} > <button className="btn btn-neutral">Show More</button></Link> */}
       <button onClick={()=>handleShowMore()} className="btn btn-neutral">Show More</button>

      </div>
    </div>
  );
};

export default Post;
