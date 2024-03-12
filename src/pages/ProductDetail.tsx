import { Box, Grid, Typography, Button } from "@mui/material";
import products from "../data/products.json";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const product = products.products.data.items.find((p) => p.id === id);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        marginTop: "50px",
      }}
    >
      <Grid container spacing={10} maxWidth="85%">
        <Grid item xs={12} md={6}>
          <img
            src={product.imageUrl}
            alt="Product Image"
            style={{ width: "100%", height: "auto" }}
          />
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            "flex-direction": "column",
          }}
        >
          <Typography variant="h4" component="h2" gutterBottom align="center">
            {product.productName}
          </Typography>
          <Typography
            variant="body1"
            component="p"
            align="center"
            sx={{ color: "#a7a7a7" }}
          >
            {product.brief}
          </Typography>
          <Typography variant="h5" component="h3" gutterBottom align="center">
            CA${product.price}
          </Typography>
          <Typography variant="body1" component="p" align="left">
            {product.description}
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: 2,
              mt: "20px",
            }}
          >
            <Button
              variant="contained"
              color="primary"
              sx={{
                backgroundColor: "#027a9c",
                "&:hover": { backgroundColor: "#00566e" },
              }}
            >
              Edit
            </Button>
            <Button
              variant="contained"
              color="secondary"
              sx={{
                backgroundColor: "#027a9c",
                "&:hover": { backgroundColor: "#00566e" },
              }}
            >
              Delete
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProductDetail;

// This page will list the information of a single product
// (name, description, price, image).  Each product has options to edit or delete.
