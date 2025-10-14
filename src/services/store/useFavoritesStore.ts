import { load, save } from "@/utils/storage"
import { Toast } from "toastify-react-native"
import { create } from "zustand"

type FavoriteStore = {
  favorites: number[]
  toggleFavorite: (id: number) => void
  isFavorite: (id: number) => boolean
  loadFavorites: () => Promise<void>
}

const STORAGE_KEY = "@favorites"

export const useFavoritesStore = create<FavoriteStore>((set, get) => ({
  favorites: [],

  toggleFavorite: async (id) => {
    const { favorites } = get()
    let updatedFavorites: number[]
    if (favorites.includes(id)) {
      Toast.success("Removed from favorites!")
      updatedFavorites = favorites.filter((item) => item !== id)
    } else {
      Toast.success("Added to favorites!")
      updatedFavorites = [...favorites, id]
    }
    set({ favorites: updatedFavorites })
    try {
      save(STORAGE_KEY, updatedFavorites)
    } catch (error) {
      console.error("Error saving favorites:", error)
    }
  },

  isFavorite: (id) => get().favorites.includes(id),

  loadFavorites: async () => {
    try {
      const stored = await load(STORAGE_KEY)
      if (stored) {
        set({ favorites: stored! })
      }
    } catch (error) {
      console.error("Error loading favorites:", error)
    }
  },
}))
