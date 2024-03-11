import ProductCard from "../components/ProductCard";
import products from "../data/products.json";
import { Box, Grid, Typography } from "@mui/material";

const Home = () => {
  const productsArray = products.products.data.items;
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
        {productsArray.map((product) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
            <ProductCard
              // key={products.id}
              imageUrl={product.imageUrl}
              productName={product.productName}
              price={product.price}
              brief={product.brief}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Home;
