import { Header } from "@/components/Header"
import { ProductCard } from "@/components/ProductCard"
import { Screen } from "@/components/Screen"
import { useProducts } from "@/services/api/hooks/useProducts"
import { useFavoritesStore } from "@/services/store/useFavoritesStore"
import { $styles } from "@/theme/styles"
import React, { FC, useEffect } from "react"
import { FlatList } from "react-native"

export const PorductsListScreen: FC = function PorductsListScreen() {
  const { data, isLoading, error, refetch } = useProducts()
  const loadFavorites = useFavoritesStore((state) => state.loadFavorites)
  useEffect(() => {
    loadFavorites()
  }, [])
  return (
    <Screen preset="fixed" style={$styles.root}>
      <Header titleTx="routes:home" />
      <FlatList
        showsVerticalScrollIndicator={false}
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <React.Fragment key={item.id}>
            <ProductCard Product={item} />
          </React.Fragment>
        )}
      />
    </Screen>
  )
}
