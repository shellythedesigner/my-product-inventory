import axios from "axios";

// const API_URL = "http://localhost:8000/product";
const API_URL = process.env.REACT_APP_API_URL || "https://product-backend-tksj.onrender.com";


// http://localhost:5173/

//GET
export const  getAllProducts = () =>  axios.get(API_URL)

// POST
interface ProductType {
  imageUrl: string;
  productName: string;
  brief: string;
  price: number;
  description: string;
}

// const createUrl = "https://fakestoreapi.com/products";
export const createProduct = (productData: ProductType) =>
  axios.post(API_URL, productData);


// PUT / PATCH;

export const updateProduct = (id: string, updatedData: { name: string; price: number; }) =>
  axios.patch(`${API_URL}/${id}`, updatedData);



// DELETE;

export const deleteProduct = (id: string) =>
  axios.delete(`${API_URL}/${id}`);


export const getProductById = async (id: string) => {
    try {
       const response = await axios.get(`${API_URL}/${id}`);
       return response.data;
    } catch (error) {
       console.error('Error fetching product:', error);
       throw error;
    }
   };
// const PRODUCT_ENDPOINT = import.meta.env.VITE_BASE_URL;