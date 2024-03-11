import { create } from "zustand";
import productsData from "../data/products.json";

interface Product {
  id: string;
  file: string;
  name: string;
  brief: string;
  price: number;
  description: string;
}

interface ProductStore {
  product: Product[];
  setProduct: (product: Product) => void;
}

const initialProducts = productsData.products.data.items.map((item) => ({
  id: item.id,
  file: item.imageUrl,
  name: item.productName,
  brief: item.brief,
  price: parseFloat(item.price),
  description: item.description,
}));

export const useProductStore = create<ProductStore>((set) => ({
  product: initialProducts,
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
