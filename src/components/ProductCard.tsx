import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";

interface Product {
  id: string;
  name: string;
  brief: string;
  price: number;
  description: string;
  file: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Box>
      <Card
        sx={{
          margin: "20px",
          //   width: "280px",
          //   margin: "20px",
        }}
      >
        <CardMedia
          sx={{ height: 150 }}
          image={product.file}
          title={product.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {product.name}
          </Typography>
          <Typography variant="body2" color="#a7a7a7">
            {product.brief}
          </Typography>
          <Box mt={2}>
            <Typography variant="body1">{product.price}</Typography>
          </Box>
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
};

export default ProductCard;

// const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
//   return (
//     <div>
//       <h3>{product.name}</h3>
//       <p>{product.brief}</p>
//       <p>{product.price}</p>
//       <p>{product.description}</p>
//       {/* Display the image */}
//     </div>
//   );
// };

// origin:
// import Card from "@mui/material/Card";
// import CardActions from "@mui/material/CardActions";
// import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
// import Button from "@mui/material/Button";
// import Typography from "@mui/material/Typography";
// import FavoriteIcon from "@mui/icons-material/Favorite";
// import IconButton from "@mui/material/IconButton";
// import Box from "@mui/material/Box";

// interface ProductCardProps {
//   imageUrl: string;
//   productName: string;
//   brief: string;
//   price: string;
// }

// export default function ProductCard({
//   imageUrl,
//   productName,
//   brief,
//   price,
// }: ProductCardProps) {
//   return (
//     <Box>
//       <Card
//         sx={{
//           width: "280px",
//           margin: "20px",
//         }}
//       >
//         <CardMedia sx={{ height: 150 }} image={imageUrl} title={productName} />
//         <CardContent>
//           <Typography gutterBottom variant="h5" component="div">
//             {productName}
//           </Typography>
//           <Typography variant="body2" color="#a7a7a7">
//             {brief}
//           </Typography>
//           <Box mt={2}>
//             <Typography variant="body1">{price}</Typography>
//           </Box>
//         </CardContent>
//         <CardActions>
//           <IconButton aria-label="add to favorites">
//             <FavoriteIcon />
//           </IconButton>
//           <Button size="small" sx={{ color: "#027a9c" }}>
//             More Information
//           </Button>
//         </CardActions>
//       </Card>
//     </Box>
//   );
// }
