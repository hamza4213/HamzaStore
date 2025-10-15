import { AutoImage } from "@/components/AutoImage"
import { Button } from "@/components/Button"
import { Header } from "@/components/Header"
import { Screen } from "@/components/Screen"
import { Text } from "@/components/Text"
import { useProductDetail } from "@/services/api/hooks/useProductDetails"
import { useFavoritesStore } from "@/services/store/useFavoritesStore"
import { useAppTheme } from "@/theme/context"
import { spacing } from "@/theme/spacing"
import { $favoriteButton, $styles } from "@/theme/styles"
import { useLocalSearchParams, useRouter } from "expo-router"
import React, { FC, useEffect } from "react"
import { useTranslation } from "react-i18next"
import { TouchableOpacity, View } from "react-native"

export const ProductDetailsScreen: FC = function ProductDetailsScreen() {
  const { id } = useLocalSearchParams<{ id: string }>()
  const router = useRouter()
  const { data: Product, isLoading, error, refetch } = useProductDetail(id!)
  const favorites = useFavoritesStore((state) => state.favorites)
  const favorite = favorites.includes(Number(id))
  const toggleFavorite = useFavoritesStore((state) => state.toggleFavorite)
  const loadFavorites = useFavoritesStore((state) => state.loadFavorites)
  useEffect(() => {
    loadFavorites()
  }, [])
  const {
    theme: { colors },
  } = useAppTheme()
  const { t } = useTranslation()
  return (
    <Screen preset="scroll" style={$styles.root}>
      <Header
        titleTx="routes:productDetails"
        leftIcon="back"
        onLeftPress={() => {
          router.back()
        }}
      />
      <View style={{ position: "relative" }}>
        <AutoImage
          source={{ uri: Product?.image }}
          style={{ height: 300, width: "100%" }}
          resizeMode="contain"
        />
        <TouchableOpacity
          style={[
            $favoriteButton,
            {
              backgroundColor: favorite ? colors?.palette.neutral900 : colors?.background,
            },
          ]}
          onPress={() => toggleFavorite(Product?.id!)}
        >
          <Text>{favorite ? "♥" : "♡"}</Text>
        </TouchableOpacity>
      </View>

      <Text text={Product?.title} weight="bold" size="lg" />
      <Text text={`$ ${Product?.price?.toFixed(2)}`} size="md" weight="semiBold" />
      <Text
        text={Product?.category?.toLocaleUpperCase()}
        weight="medium"
        style={{ marginVertical: spacing.md }}
      />
      <Text text={Product?.description} />
      <View style={[$styles.row, $styles.spaceBetween, { marginTop: spacing.sm }]}>
        <Text text={`⭐ ${Product?.rating.rate} / 5`} weight="bold" />
        <Text weight="bold">
          {Product?.rating.count} {t("common:reviews")}
        </Text>
      </View>
      <Button tx="productDetails:addtoCart" style={{ marginVertical: spacing.lg }} />
      <Button tx="productDetails:checkOut" preset="reversed" />
    </Screen>
  )
}
