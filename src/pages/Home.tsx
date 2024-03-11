import ProductCard from "../components/ProductCard";
import products from "../data/products.json";
import Box from "@mui/material/Box";

const Home = () => {
  const productsArray = products.products.data.items;
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-start",
          width: "100%",
        }}
      >
        {productsArray.map((product) => (
          <ProductCard
            // key={products.id}
            imageUrl={product.imageUrl}
            productName={product.productName}
            price={product.price}
            brief={product.brief}
          />

          /* <ProductCard
        imageUrl="https://www.cookmuseum.org/wp-content/uploads/2020/09/air-image-cropped.jpg"
        productName="Canada Air"
        price="99999"
        brief="A breath of fresh, 100% Nature."
      /> */
        ))}
      </Box>
    </>
  );
};

export default Home;
// Display a list of products  (name, description, price, image) card
// which has a button for adding to favourite and view details.
