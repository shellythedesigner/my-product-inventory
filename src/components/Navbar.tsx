import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/AddProduct">AddProduct</Link>
        </li>
        <li>
          <Link to="/ProductDetail">ProductDetail</Link>
        </li>
        <li>
          <Link to="/Favourites">Favourites</Link>
        </li>
      </ul>
    </>
  );
};

export default Navbar;
