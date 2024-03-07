// import * as Yup from "yup";

// validationSchema: Yup.object({
//   name: Yup.string()
//     .matches(
//       /^[a-zA-Z0-9 ]+$/,
//       "Name must be letters, dashes, numbers, or spaces"
//     )
//     .required("Required"),
//   email: Yup.string().email("Invalid Email Address").required("Required"),
//   gitHubUsername: Yup.string()
//     .min(5, "Must be at least 5 characters")
//     .max(15, "Must be at most 15 characters")
//     .required(),
//   blogUrl: Yup.string().url("Must be a valid URL"),
// }),
// onSubmit: (values) => {
//   // Here, you handle what you want to do with the form data when the form is submitted.
//   // For instance, sending the data to a server.
//   console.log(values);
// },
// });

import { useFormik } from "formik";

const AppProduct = () => {
  // Pass the useFormik() hook initial form values and a submit function that will
  // be called when the form is submitted
  const formik = useFormik({
    initialValues: {
      image: "",
      name: "",
      brief: "",
      price: "",
      decription: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="image">Product Image</label>
      <input
        id="image"
        name="image"
        type="image"
        onChange={formik.handleChange}
        value={formik.values.image}
      />

      <label htmlFor="name">Product Name</label>
      <input
        id="name"
        name="name"
        type="name"
        onChange={formik.handleChange}
        value={formik.values.name}
      />

      <label htmlFor="brief">Short Brief</label>
      <input
        id="brief"
        name="brief"
        type="brief"
        onChange={formik.handleChange}
        value={formik.values.brief}
      />

      <label htmlFor="price">Price</label>
      <input
        id="price"
        name="price"
        type="price"
        onChange={formik.handleChange}
        value={formik.values.price}
      />

      <label htmlFor="decription">Product Decription</label>
      <input
        id="decription"
        name="decription"
        type="decription"
        onChange={formik.handleChange}
        value={formik.values.decription}
      />

      <button type="submit">Submit</button>
    </form>
  );
};

export default AppProduct;
// A form to add a new product.
// Use Formik for the form, Yup for validation,
// and Zustand for managing global state.
