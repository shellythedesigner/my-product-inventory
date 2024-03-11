// Display a list of products  (name, description, price, image) card
// which has a button for adding to favourite and view details.

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";

interface ProductCardProps {
  imageUrl: string;
  productName: string;
  brief: string;
  price: string;
}
export default function ProductCard({
  imageUrl,
  productName,
  brief,
  price,
}: ProductCardProps) {
  return (
    <Box>
      <Card
        sx={{
          width: "280px",
          margin: "20px",
        }}
      >
        <CardMedia sx={{ height: 150 }} image={imageUrl} title={productName} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {productName}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {brief}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {price}
          </Typography>
        </CardContent>
        <CardActions>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <Button size="small" sx={{ color: "#027a9c" }}>
            More Information
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
}
