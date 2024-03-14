import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";

import products from "../data/products.json";

const Navbar = () => {
  const firstProductId = products.products.data.items[0].id;

  return (
    <AppBar position="static" sx={{ backgroundColor: "#027a9c" }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          The Oxygen Oasis
        </Typography>
        <nav>
          <Button
            component={Link}
            to="/"
            sx={{ textDecoration: "none", color: "inherit" }}
          >
            Home
          </Button>
          <Button
            component={Link}
            to="/AddProduct"
            sx={{ textDecoration: "none", color: "inherit" }}
          >
            Add Product
          </Button>

          <Button
            component={Link}
            to={`/ProductDetail/${firstProductId}`}
            sx={{ textDecoration: "none", color: "inherit" }}
          >
            Product Detail
          </Button>

          <Button
            component={Link}
            to="/Favourites"
            sx={{ textDecoration: "none", color: "inherit" }}
          >
            Favourites
          </Button>
        </nav>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

// const Navbar = () => {
//   return (
//     <>
//       <ul>
//         <li>
//           <Link to="/">Home</Link>
//         </li>
//         <li>
//           <Link to="/AddProduct">AddProduct</Link>
//         </li>
//         <li>
//           <Link to="/ProductDetail">ProductDetail</Link>
//         </li>
//         <li>
//           <Link to="/Favourites">Favourites</Link>
//         </li>
//       </ul>
//     </>
//   );
// };

// export default Navbar;
