
import { NavLink } from "react-router-dom";
import "./Header.css"

const Header = () => {
  return (
    <div>
      <nav className="m-10">
        <NavLink className="mr-10 nav-links" to="/">Home</NavLink>
        <NavLink className="mr-10 nav-links" to="/about">About</NavLink>
        <NavLink className="mr-10 nav-links" to="/contact">Contact Us</NavLink>
        <NavLink className="mr-10 nav-links" to={"/users"}>Users</NavLink>
        <NavLink className="mr-10 nav-links" to={'/posts'} >Posts</NavLink>
      </nav>
    </div>
  );
};

export default Header;
