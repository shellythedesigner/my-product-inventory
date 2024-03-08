import { create } from "zustand";

interface Product {
  file: string;
  name: string;
  brief: string;
  price: number;
  decription: string;
}

// export const addProductStore = create<ProductStore>((set) => ({
//   product: "",
//   addProductStore: (text: string) => set({ product: text }),
// }));

// interface ProductStore {
//   product: Product[];
//   addProduct: (product: Product ) => void;
// }

// export const addProductStore = create<ProductStore>((set) => ({
//   product: [],
//   addProduct: (product: Product ) => set((state)=>({product: [...state.product, product]})),
// }));

// interface MarkdownStore {
//   markdown: string;
//   setMarkdown: (text: string) => void;
// }

// export const useMarkdownStore = create<MarkdownStore>((set) => ({
//   markdown: "# Hello World",
//   setMarkdown: (text: string) => set({ markdown: text }),
// }));
