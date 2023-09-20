import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const User = ({ user }) => {
  // console.log(user);
  const { name, id, email, phone } = user;
  return (
    <>
      <div className="bg-slate-400 p-10 items-center justify-center flex flex-col">
        <h1>{id}</h1>
        <h2>{name}</h2>
        <p>{email}</p>
        <p>{phone}</p>
        <Link to={`/users/${id}`}><button className="btn btn-primary">Click Here for details</button></Link>
      </div>
    </>
  );
};

User.propTypes = {};

export default User;
