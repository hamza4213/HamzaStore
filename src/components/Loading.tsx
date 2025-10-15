import { useAppTheme } from "@/theme/context"
import type { ThemedStyle } from "@/theme/types"
import React from "react"
import { ActivityIndicator, StyleProp, View, ViewStyle } from "react-native"

export interface LoadingProps {
  /**
   * Optional style override useful for padding & margin.
   */
  style?: StyleProp<ViewStyle>
  /**
   * Optional indicator size: "small" | "large" or number
   */
  size?: "small" | "large" | number
}

/**
 * Themed Loading Indicator
 */
export const Loading = ({ style, size = "large" }: LoadingProps) => {
  const {
    theme: { colors },
  } = useAppTheme()

  const $styles = [$container({ colors }), style] as StyleProp<ViewStyle>[]

  return (
    <View style={$styles}>
      <ActivityIndicator size={size} color={colors.palette.primary500} />
    </View>
  )
}

const $container: ThemedStyle<ViewStyle> = ({ colors }) => ({
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: colors.background,
})
