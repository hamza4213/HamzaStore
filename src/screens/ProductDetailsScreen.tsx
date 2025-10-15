import { Header } from "@/components/Header"
import { Screen } from "@/components/Screen"
import { useProducts } from "@/services/api/hooks/useProducts"
import { useFavoritesStore } from "@/services/store/useFavoritesStore"
import { $styles } from "@/theme/styles"
import { useRouter } from "expo-router"
import React, { FC, useEffect } from "react"

export const ProductDetailsScreen: FC = function ProductDetailsScreen() {
  const { data, isLoading, error, refetch } = useProducts()
  const loadFavorites = useFavoritesStore((state) => state.loadFavorites)
  useEffect(() => {
    loadFavorites()
  }, [])
  const router = useRouter()
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
