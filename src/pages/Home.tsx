import ProductCard from "../components/ProductCard";

const Home = () => {
  return (
    <>
      <ProductCard
        imageUrl="https://www.cookmuseum.org/wp-content/uploads/2020/09/air-image-cropped.jpg"
        productName="Canada Air"
        price="99999"
        brief="A breath of fresh, 100% Nature."
      />
    </>
  );
};

export default Home;
// Display a list of products  (name, description, price, image) card
// which has a button for adding to favourite and view details.
