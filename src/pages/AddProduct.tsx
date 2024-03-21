import { useFormik } from "formik";
import * as Yup from "yup";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
// import axios from "axios";

// import { useProductStore } from "../store/useProductStore";
import { createProduct } from "../api/productApi";

const AppProduct = () => {
  const formik = useFormik({
    initialValues: {
      imageUrl: "",
      productName: "",
      brief: "",
      price: 0,
      description: "",
    },
    validationSchema: Yup.object({
      // image: Yup.mixed().required("Product image is required"),
      productName: Yup.string().required("Product name is required"),
      brief: Yup.string()
        .required("Summary is required")
        .min(1, "Please provide at least 10 characters")
        .max(20, "Maximum is 50 characters"),
      price: Yup.number()
        .typeError("Price must be numbers")
        .required("Price is required"),
      description: Yup.string()
        .required("Description is required")
        .min(10, "Please provide at least 10 characters"),
      imageUrl: Yup.string(),
    }),

    onSubmit: async (values) => {
      // const newProduct = {
      //   id: Date.now().toString(),
      //   ...values,
      //   price: Number(values.price),
      // };
      //formik.resetForm();

      try {
        const response = await createProduct(values);
        if (response.status === 200) {
          console.log("Product added successfully", response.data);
        }
      } catch (err) {
        console.error("Failed to add Product", err);
      } finally {
        formik.resetForm();
      }

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
          id="imageUrl"
          name="imageUrl"
          // label="Product Image"
          variant="outlined"
          fullWidth
          type="file"
          // onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          //   if (e.target.files && e.target.files.length > 0) {
          //     formik.setFieldValue("file", e.target.files[0]);
          //   }
          // }}
          error={formik.touched.imageUrl && Boolean(formik.errors.imageUrl)}
          helperText={formik.touched.imageUrl && formik.errors.imageUrl}
          sx={{ marginBottom: "30px", marginTop: "0px" }}
        />

        <TextField
          id="productName"
          name="productName"
          label="Product Name"
          variant="outlined"
          fullWidth
          onChange={formik.handleChange}
          value={formik.values.productName}
          error={
            formik.touched.productName && Boolean(formik.errors.productName)
          }
          helperText={formik.touched.productName && formik.errors.productName}
          sx={{ marginBottom: "30px" }}
        />

        <TextField
          id="brief"
          name="brief"
          label="brief"
          variant="outlined"
          fullWidth
          onChange={formik.handleChange}
          value={formik.values.brief}
          error={formik.touched.brief && Boolean(formik.errors.brief)}
          helperText={formik.touched.brief && formik.errors.brief}
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
