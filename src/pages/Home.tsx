// import ProductCard from "../components/ProductCard";
// import { useProductStore } from "../store/useProductStore";
import { useEffect, useState } from "react";

import { getAllProducts } from "../api/productApi";
import ProductCard2 from "../components/ProductCard";
import { ProductType } from "../types/products";
import { Box, Grid, Typography } from "@mui/material";

const Home = () => {
  const [products, setProducts] = useState<ProductType[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await getAllProducts();
        setProducts(response.data);
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
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        mt: "30px",
      }}
    >
      <Typography variant="h4" component="h2" gutterBottom>
        Product List
      </Typography>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        maxWidth="85%"
        margin="auto"
      >
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
            <ProductCard2
              image={product.image}
              title={product.title}
              description={product.description}
              price={product.price}
              rating={product.rating}
              category={product.category}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Home;
