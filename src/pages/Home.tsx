import ProductCard from "../components/ProductCard";
import products from "../data/products.json";

const Home = () => {
  const productsArray = products.products.data.items;
  return (
    <>
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
    </>
  );
};

export default Home;
// Display a list of products  (name, description, price, image) card
// which has a button for adding to favourite and view details.
