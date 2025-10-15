import { Text } from "@/components/Text"
import { Product } from "@/services/api/hooks/useProducts"
import { useFavoritesStore } from "@/services/store/useFavoritesStore"
import { useAppTheme } from "@/theme/context"
import { spacing } from "@/theme/spacing"
import { $favoriteButton, $styles } from "@/theme/styles"
import { useRouter } from "expo-router"
import { Pressable, StyleProp, TouchableOpacity, View, ViewStyle } from "react-native"

import { AutoImage } from "./AutoImage"

export interface ProductCardProps {
  /**
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<ViewStyle>
  Product: Product
}
export const ProductCard = (props: ProductCardProps) => {
  const { Product } = props
  const {
    theme: { colors },
  } = useAppTheme()
  const favorites = useFavoritesStore((state) => state.favorites)
  const toggleFavorite = useFavoritesStore((state) => state.toggleFavorite)
  const favorite = favorites.includes(Product?.id)
  const router = useRouter()

  return (
    <Pressable
      style={{ marginBottom: spacing.lg }}
      onPress={() => router.push(`/(tab)/home/product-details?id=${Product.id}`)}
    >
      <View
        style={[
          $cardContainer,
          { backgroundColor: colors?.background, shadowColor: colors?.palette.neutral900 },
        ]}
      >
        <AutoImage
          source={{ uri: Product.image }}
          style={{ height: 300, width: "100%" }}
          resizeMode="contain"
        />
        <Text text={Product.title} weight="bold" />
        <Text text={Product.category} weight="medium" />
        <Text text={Product.description} weight="light" numberOfLines={2} />

        <View style={[$styles.row, $styles.spaceBetween]}>
          <Text text={`⭐ ${Product.rating.rate} (${Product.rating.count})`} weight="bold" />
          <Text text={`$ ${Product.price.toFixed(2)}`} weight="bold" />
        </View>

        <TouchableOpacity
          style={[
            $favoriteButton,
            {
              backgroundColor: favorite ? colors?.palette.neutral900 : colors?.background,
            },
          ]}
          onPress={() => toggleFavorite(Product.id)}
        >
          <Text>{favorite ? "♥" : "♡"}</Text>
        </TouchableOpacity>
      </View>
    </Pressable>
  )
}
const $cardContainer: ViewStyle = {
  borderRadius: spacing.md,
  padding: spacing.md,
  marginVertical: spacing.sm,
  marginHorizontal: spacing.sm,
  shadowOpacity: 0.1,
  shadowRadius: spacing.md,
  elevation: 3,
}
