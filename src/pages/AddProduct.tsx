import { useFormik } from "formik";
import * as Yup from "yup";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

const AppProduct = () => {
  const formik = useFormik({
    initialValues: {
      file: "",
      name: "",
      brief: "",
      price: "",
      description: "",
    },
    validationSchema: Yup.object({
      // image: Yup.mixed().required("Product image is required"),
      name: Yup.string().required("Product name is required"),
      brief: Yup.string()
        .required("Short brief is required")
        .min(1, "Please provide at least 10 characters")
        .max(20, "Maximum is 50 characters"),
      price: Yup.number()
        .typeError("Price must be numbers")
        .required("Price is required"),
      description: Yup.string()
        .required("Description is required")
        .min(10, "Please provide at least 10 characters"),
      file: Yup.string().required("File is required"),
    }),

    onSubmit: (values) => {
      // alert(JSON.stringify(values, null, 2));
      console.log(values);
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
        }}
      >
        <Typography
          variant="h4"
          component="h2"
          gutterBottom
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
          id="file"
          name="file"
          // label="Product Image"
          variant="outlined"
          fullWidth
          type="file"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            if (e.target.files && e.target.files.length > 0) {
              formik.setFieldValue("file", e.target.files[0]);
            }
          }}
          error={formik.touched.file && Boolean(formik.errors.file)}
          helperText={formik.touched.file && formik.errors.file}
          sx={{ marginBottom: "30px", marginTop: "0px" }}
        />

        <TextField
          id="name"
          name="name"
          label="Product Name"
          variant="outlined"
          fullWidth
          onChange={formik.handleChange}
          value={formik.values.name}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
          sx={{ marginBottom: "30px" }}
        />

        <TextField
          id="brief"
          name="brief"
          label="Short Brief"
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

        <Button variant="contained" color="primary" type="submit">
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
