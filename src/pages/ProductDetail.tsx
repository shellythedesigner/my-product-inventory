import { Box, Grid, Typography, Button } from "@mui/material";
import { useEffect, useState } from "react";
import { getProductById } from "../api/productApi";
import { useParams, useNavigate } from "react-router-dom";
import { deleteProduct, updateProduct } from "../api/productApi";
import { ProductType } from "../types/products";

const ProductDetail = () => {
  const { id = "" } = useParams();
  const [product, setProduct] = useState<ProductType>();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        if (id) {
          const response = await getProductById(id);
          console.log(response);
          setProduct(response);
        } else {
          console.error("Product ID is undefined");
        }
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProduct();
  }, [id]);

  const handleDelete = async () => {
    try {
      setIsLoading(true);

      const response = await deleteProduct(id);
      console.log("🚀 ~ handleDelete ~ response:", response);
      navigate("/");
    } catch (error) {
      console.error("Error deleting product:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleUpdate = async () => {
    const updatedData = {
      name: "Hello Product",
      price: 11111111111,
    };

    try {
      const response = await updateProduct(id, updatedData);
      console.log("Product updated successfully:", response.data);
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };

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
            src={product?.image}
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
            {product?.title}
          </Typography>
          <Typography
            variant="body1"
            component="p"
            align="center"
            sx={{ color: "#a7a7a7" }}
          >
            {product?.category}
          </Typography>
          <Typography variant="h5" component="h3" gutterBottom align="center">
            CA${product?.price}
          </Typography>
          <Typography variant="body1" component="p" align="left">
            {product?.description}
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
              onClick={handleUpdate}
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
              onClick={handleDelete}
            >
              {isLoading ? <p>Deleting...</p> : <p>Delete Product</p>}
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
