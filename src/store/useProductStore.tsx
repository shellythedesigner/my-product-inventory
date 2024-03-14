import { create } from "zustand";
// import productsData from "../data/products.json";

interface Product {
  id: string;
  image: string;
  title: string;
  category: string;
  price: number;
  description: string;
}

interface ProductStore {
  product: Product[];
  setProduct: (product: Product) => void;
}

// const initialProducts = productsData.products.data.items.map((item) => ({
//   id: item.id,
//   image: item.imageUrl,
//   title: item.productName,
//   category: item.category,
//   price: parseFloat(item.price),
//   description: item.description,
// }));

export const useProductStore = create<ProductStore>((set) => ({
  product: [],
  setProduct: (product) =>
    set((state) => ({ product: [...state.product, product] })),
}));

// interface MarkdownStore {
//   markdown: string;
//   setMarkdown: (text: string) => void;
// }

// export const useMarkdownStore = create<MarkdownStore>((set) => ({
//   markdown: "# Hello World",
//   setMarkdown: (text: string) => set({ markdown: text }),
// }));
