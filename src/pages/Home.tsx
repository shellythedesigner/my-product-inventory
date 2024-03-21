// import ProductCard from "../components/ProductCard";
// import { useProductStore } from "../store/useProductStore";
import { useEffect, useState } from "react";

import { getAllProducts } from "../api/productApi";
import ProductCard from "../components/ProductCard";
import { ProductType } from "../types/products";
import { Box, Grid, Typography } from "@mui/material";

const Home = () => {
  const [products, setProducts] = useState<ProductType[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await getAllProducts();
        // console.log(response.data.data.airModels);
        setProducts(response.data.data.airModels);
        console.log("Fetching Data");
      } catch (err) {
        console.error("Error fetching products:", err);
      }
    };
    fetchProducts();
  }, []);

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "left",
        alignItems: "left",
        flexDirection: "column",
        mt: "30px",
      }}
    >
      <Typography variant="h4" component="h2" gutterBottom>
        Product List
      </Typography>
      <Grid
        container
        justifyContent="left"
        alignItems="left"
        maxWidth="85%"
        margin="auto"
      >
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={product._id}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Home;
