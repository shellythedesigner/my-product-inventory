import ProductCard from "../components/ProductCard";
import { useFavoriteStore } from "../store/useFavouriteStore";
import { Box, Grid, Typography } from "@mui/material";

const Favourites = () => {
  const favorites = useFavoriteStore((state) => state.favorites);

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
        Favorite Products
      </Typography>

      <Grid
        container
        justifyContent="center"
        alignItems="center"
        maxWidth="85%"
        margin="auto"
        spacing={2}
      >
        {favorites.map((product) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Favourites;
