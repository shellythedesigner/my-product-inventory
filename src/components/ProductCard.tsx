interface ProductCardProps {
  imageUrl: string;
  productName: string;
  brief: string;
  price: string;
}

const ProductCard = ({
  imageUrl,
  productName,
  brief,
  price,
}: ProductCardProps) => {
  return (
    <div>
      <img src={imageUrl}></img>
      <h2>{productName}</h2>
      <p>{brief}</p>
      <p>{price}</p>
      <button>Favourite</button>
      <button>More Information</button>
    </div>
  );
};

export default ProductCard;
// Display a list of products  (name, description, price, image) card
// which has a button for adding to favourite and view details.
