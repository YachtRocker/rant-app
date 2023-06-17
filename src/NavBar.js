import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="nav-links">
      <Link to="/">Home </Link>
      <Link to="./About">About </Link>
      <Link to="#">Old Stuff </Link>
      <Link to="#">Contact</Link>
    </div>
  );
};

export default NavBar;
