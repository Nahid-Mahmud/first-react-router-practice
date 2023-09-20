import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <nav className="m-10">
        <Link className="mr-10" to="/">Home</Link>
        <Link className="mr-10" to="/about">About</Link>
        <Link className="mr-10" to="/contact">Contact Us</Link>
        <Link className="mr-10" to={"/users"}>Users</Link>
        <Link className="mr-10" to={'/posts'} >Posts</Link>
      </nav>
    </div>
  );
};

export default Header;
