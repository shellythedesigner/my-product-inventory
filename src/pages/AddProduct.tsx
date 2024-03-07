import { useFormik } from "formik";
import * as Yup from "yup";

const AppProduct = () => {
  const formik = useFormik({
    initialValues: {
      file: "",
      name: "",
      brief: "",
      price: "",
      decription: "",
    },
    validationSchema: Yup.object({
      image: Yup.mixed().required("Product image is required"),
      name: Yup.string().required("Product name is required"),
      brief: Yup.string()
        .min(1, "Please provide at least 10 characters")
        .max(20, "Maximum is 50 characters"),
      price: Yup.string()
        .matches(/[0-9]/, "Price must be numbers")
        .required("Price is required"),
      decription: Yup.string().min(10, "Please provide at least 10 characters"),
      file: Yup.string().required("Product name is required"),
    }),

    onSubmit: (values) => {
      // alert(JSON.stringify(values, null, 2));
      console.log(values);
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="file">Product Image</label>
      <input
        id="file"
        name="file"
        type="file"
        // onChange={(e) => formik.setFieldValue("image"), e.target.files[0])}
        // onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
        //   formik.setFieldValue("image", e.target.files[0])
        // }
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          if (e.target.files && e.target.files.length > 0) {
            formik.setFieldValue("file", e.target.files[0]);
          }
        }}
        // value={formik.values.file}
      />
      {formik.touched.file && formik.errors.file ? (
        <div>{formik.errors.file}</div>
      ) : null}

      <label htmlFor="name">Product Name</label>
      <input
        id="name"
        name="name"
        type="name"
        onChange={formik.handleChange}
        value={formik.values.name}
      />
      {formik.touched.name && formik.errors.name ? (
        <div>{formik.errors.name}</div>
      ) : null}

      <label htmlFor="brief">Short Brief</label>
      <input
        id="brief"
        name="brief"
        type="brief"
        onChange={formik.handleChange}
        value={formik.values.brief}
      />
      {formik.touched.brief && formik.errors.brief ? (
        <div>{formik.errors.brief}</div>
      ) : null}

      <label htmlFor="price">Price</label>
      <input
        id="price"
        name="price"
        type="price"
        onChange={formik.handleChange}
        value={formik.values.price}
      />
      {formik.touched.price && formik.errors.price ? (
        <div>{formik.errors.price}</div>
      ) : null}

      <label htmlFor="decription">Product Decription</label>
      <input
        id="decription"
        name="decription"
        type="decription"
        onChange={formik.handleChange}
        value={formik.values.decription}
      />
      {formik.touched.decription && formik.errors.decription ? (
        <div>{formik.errors.decription}</div>
      ) : null}

      <button type="submit">Submit</button>
    </form>
  );
};

export default AppProduct;
// A form to add a new product.
// Use Formik for the form, Yup for validation,
// and Zustand for managing global state.
