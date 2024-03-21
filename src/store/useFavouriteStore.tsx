import create from "zustand";
import { ProductType } from "../types/products";

// interface Product {
//   _id: string;
//   imageUrl: string;
//   productName: string;
//   brief: string;
//   price: number;
//   description: string;
// }

interface FavoriteStore {
  favorites: ProductType[];
  setToFavorites: (product: ProductType) => void;
  removeFromFavorites: (product: ProductType) => void;
}

export const useFavoriteStore = create<FavoriteStore>((set) => ({
  favorites: [],
  setToFavorites: (product) =>
    set((state) => ({ favorites: [...state.favorites, product] })),
  removeFromFavorites: (product) =>
    set((state) => ({
      favorites: state.favorites.filter((fav) => fav._id !== product._id),
    })),
}));
