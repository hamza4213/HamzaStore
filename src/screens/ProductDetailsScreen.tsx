import { Header } from "@/components/Header"
import { Screen } from "@/components/Screen"
import { useProductDetail } from "@/services/api/hooks/useProductDetails"
import { useFavoritesStore } from "@/services/store/useFavoritesStore"
import { $styles } from "@/theme/styles"
import { useLocalSearchParams, useRouter } from "expo-router"
import React, { FC, useEffect } from "react"

export const ProductDetailsScreen: FC = function ProductDetailsScreen() {
  const { id } = useLocalSearchParams<{ id: string }>()
  const router = useRouter()
  console.log(id)
  const { data: product, isLoading, error, refetch } = useProductDetail(id!)
  const favorites = useFavoritesStore((state) => state.favorites)
  const favorite = favorites.includes(Number(id))
  const toggleFavorite = useFavoritesStore((state) => state.toggleFavorite)
  const isFavorite = useFavoritesStore((state) => state.isFavorite)
  const loadFavorites = useFavoritesStore((state) => state.loadFavorites)
  useEffect(() => {
    loadFavorites()
  }, [])

  return (
    <Screen preset="fixed" style={$styles.root}>
      <Header
        titleTx="routes:productDetails"
        leftIcon="back"
        onLeftPress={() => {
          router.back()
        }}
      />
    </Screen>
  )
}
