import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";

import { useFavoriteStore } from "../store/useFavouriteStore";
import { Link } from "react-router-dom";
import { ProductType } from "../types/products";

interface ProductCardProps {
  product: ProductType;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const isFavorite = useFavoriteStore((state) =>
    state.favorites.some((fav) => fav._id === product._id)
  );
  return (
    <Card sx={{ margin: "20px", width: "280px" }}>
      <CardMedia
        sx={{ height: 150 }}
        image={product.imageUrl}
        title={product.productName}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product.productName}
        </Typography>
        <Typography variant="body2" color="#a7a7a7">
          {product.brief}
        </Typography>
        <Box mt={2}>
          <Typography variant="body1">CAD {product.price}</Typography>
        </Box>
      </CardContent>
      <CardActions>
        <IconButton
          aria-label="add to favorites"
          onClick={() => {
            if (isFavorite) {
              useFavoriteStore.getState().removeFromFavorites(product);
            } else {
              useFavoriteStore.getState().setToFavorites(product);
            }
          }}
        >
          <FavoriteIcon sx={{ color: isFavorite ? "#ff3c3c" : "#c1c1c1" }} />
        </IconButton>
        <Link to={`/ProductDetail/${product._id}`}>
          <Button size="small" sx={{ color: "#027a9c" }}>
            Learn More
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};
export default ProductCard;
