import create from "zustand";

interface Product {
  id: string;
  file: string;
  name: string;
  brief: string;
  price: number;
  description: string;
}

interface FavoriteStore {
  favorites: Product[];
  setToFavorites: (product: Product) => void;
  removeFromFavorites: (product: Product) => void;
}

export const useFavoriteStore = create<FavoriteStore>((set) => ({
  favorites: [],
  setToFavorites: (product) =>
    set((state) => ({ favorites: [...state.favorites, product] })),
  removeFromFavorites: (product) =>
    set((state) => ({
      favorites: state.favorites.filter((fav) => fav.id !== product.id),
    })),
}));
