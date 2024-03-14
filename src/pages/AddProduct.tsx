import { useFormik } from "formik";
import * as Yup from "yup";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
// import axios from "axios";

import { useProductStore } from "../store/useProductStore";
import { createProduct } from "../api/productApi";

const AppProduct = () => {
  const formik = useFormik({
    initialValues: {
      image: "",
      title: "",
      category: "",
      price: "",
      description: "",
    },
    validationSchema: Yup.object({
      // image: Yup.mixed().required("Product image is required"),
      title: Yup.string().required("Product name is required"),
      category: Yup.string()
        .required("category is required")
        .min(1, "Please provide at least 10 characters")
        .max(20, "Maximum is 50 characters"),
      price: Yup.number()
        .typeError("Price must be numbers")
        .required("Price is required"),
      description: Yup.string()
        .required("Description is required")
        .min(10, "Please provide at least 10 characters"),
      image: Yup.string(),
    }),

    onSubmit: async (values) => {
      const newProduct = {
        id: Date.now().toString(),
        ...values,
        price: Number(values.price),
      };
      useProductStore.getState().setProduct(newProduct);
      formik.resetForm();

      try {
        const response = await createProduct(newProduct);
        if (response.status === 200) {
          console.log("Product added successfully", response.data);
        }
      } catch (err) {
        console.error("Failed to add Product", err);
      }
      // } finally {
      //   resetForm({});
      // }

      // const url = "https://fakestoreapi.com/products";
      // try {
      //   const response = await axios.post(url, newProduct);
      //   console.log(response.data);
      // } catch (error) {
      //   console.error("Error submitting product:", error);
      // }
    },
  });

  return (
    <Container maxWidth="sm">
      <Box
        component="form"
        onSubmit={formik.handleSubmit}
        sx={{
          display: "flex",
          flexDirection: "column",
          marginTop: "30px",
        }}
      >
        <Typography
          variant="h4"
          component="h2"
          gutterBottom
          align="center"
          sx={{ marginBottom: "20px" }}
        >
          Add Product
        </Typography>

        <Typography
          variant="h6"
          component="h2"
          gutterBottom
          sx={{ fontSize: "16px", color: "#00000099" }}
        >
          Upload Product Image
        </Typography>
        <TextField
          id="image"
          name="image"
          // label="Product Image"
          variant="outlined"
          fullWidth
          type="file"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            if (e.target.files && e.target.files.length > 0) {
              formik.setFieldValue("file", e.target.files[0]);
            }
          }}
          error={formik.touched.image && Boolean(formik.errors.image)}
          helperText={formik.touched.image && formik.errors.image}
          sx={{ marginBottom: "30px", marginTop: "0px" }}
        />

        <TextField
          id="title"
          name="title"
          label="Product Name"
          variant="outlined"
          fullWidth
          onChange={formik.handleChange}
          value={formik.values.title}
          error={formik.touched.title && Boolean(formik.errors.title)}
          helperText={formik.touched.title && formik.errors.title}
          sx={{ marginBottom: "30px" }}
        />

        <TextField
          id="category"
          name="category"
          label="Category"
          variant="outlined"
          fullWidth
          onChange={formik.handleChange}
          value={formik.values.category}
          error={formik.touched.category && Boolean(formik.errors.category)}
          helperText={formik.touched.category && formik.errors.category}
          sx={{ marginBottom: "30px" }}
        />

        <TextField
          id="price"
          name="price"
          label="Price"
          variant="outlined"
          fullWidth
          onChange={formik.handleChange}
          value={formik.values.price}
          error={formik.touched.price && Boolean(formik.errors.price)}
          helperText={formik.touched.price && formik.errors.price}
          sx={{ marginBottom: "30px" }}
        />

        <TextField
          id="description"
          name="description"
          label="Product Description"
          variant="outlined"
          fullWidth
          onChange={formik.handleChange}
          value={formik.values.description}
          error={
            formik.touched.description && Boolean(formik.errors.description)
          }
          helperText={formik.touched.description && formik.errors.description}
          sx={{ marginBottom: "30px" }}
        />

        <Button
          variant="contained"
          color="primary"
          type="submit"
          sx={{
            backgroundColor: "#027a9c",
            "&:hover": { backgroundColor: "#00566e" },
          }}
        >
          Submit
        </Button>
      </Box>
    </Container>
  );
};

export default AppProduct;

// A form to add a new product.
// Use Formik for the form, Yup for validation,
// and Zustand for managing global state.
