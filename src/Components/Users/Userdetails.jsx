import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const Userdetails = () => {
  const user = useLoaderData();
  const { id, name, username, email, address } = user;
  const {city,street,suite,zipcode,geo} = address
  const {lat,lng}=geo
  console.log(user);
  return (
    <div className="bg-slate-400 flex flex-col items-center p-5 w-fit mx-auto rounded-md my-20">
      <p>{id}</p>
      <p>{name}</p>
      <p>{username}</p>
      <p>{email}</p>
      <p>{city}</p>
      <p>{street}</p>
      <p>{suite}</p>
      <p>{zipcode}</p>
      <p>geo location : Lat: {lat}, lng : {lng}</p>
      <Link to={`/users`} > <button className="btn btn-neutral">Back</button></Link>
    </div>
  );
};

export default Userdetails;
