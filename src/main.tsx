import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import Favourites from "./pages/Favourites";
import { Layout } from "./components/Layout";
import NotFound from "./components/NotFound";
import AddProduct from "./pages/AddProduct";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/AddProduct",
        element: <AddProduct />,
      },
      {
        path: "/ProductDetail/:id",
        element: <ProductDetail />,
      },
      {
        path: "/Favourites",
        element: <Favourites />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
