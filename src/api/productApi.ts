import axios from "axios";

//GET
export const  getAllProducts = () =>  axios.get("https://fakestoreapi.com/products")

// POST
interface ProductType {
  file: string;
  name: string;
  brief:string;
  price: number;
  description: string;
}

const createUrl = "https://fakestoreapi.com/products";
export const createProduct = (productData: ProductType) =>
  axios.post(createUrl, productData);


// PUT / PATCH;
const patchUrl = "https://fakestoreapi.com/products/7";
export const updateProduct = (id: string, updatedData: Partial<ProductType>) =>
  axios.patch(`${patchUrl}/products/${id}`, updatedData);



// DELETE;
const deteleUrl = "https://fakestoreapi.com/products/6";
export const deleteProduct = () =>
  axios.delete(deteleUrl);


// const PRODUCT_ENDPOINT = import.meta.env.VITE_BASE_URL;