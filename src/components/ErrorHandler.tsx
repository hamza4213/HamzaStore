import { Text } from "@/components/Text"
import { TxKeyPath } from "@/i18n"
import { useAppTheme } from "@/theme/context"
import type { ThemedStyle } from "@/theme/types"
import React from "react"
import { StyleProp, TextStyle, View, ViewStyle } from "react-native"
import { Button } from "./Button"

export interface ErrorHandlerProps {
  /**
   * Optional style override useful for padding & margin.
   */
  style?: StyleProp<ViewStyle>
  /**
   * Translation key for the error message
   */
  tx: TxKeyPath
  /**
   * Retry callback
   */
  onRefresh: () => void
}

/**
 * Themed Error Handler Component
 */
export const ErrorHandler = ({ style, tx, onRefresh }: ErrorHandlerProps) => {
  const {
    themed,
    theme: { colors },
  } = useAppTheme()

  const $styles = [themed($container), style] as StyleProp<ViewStyle>[]

  return (
    <View style={$styles}>
      <Text style={themed($text)} tx={tx} />
      <Button
        tx="common:retry"
        onPress={onRefresh}
        style={{ marginTop: 16, backgroundColor: colors.palette.primary500 }}
      />
    </View>
  )
}

const $container: ThemedStyle<ViewStyle> = ({ colors }) => ({
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: colors.background,
  paddingHorizontal: 20,
})

const $text: ThemedStyle<TextStyle> = ({ colors, typography }) => ({
  fontFamily: typography.primary.normal,
  fontSize: 15,
  color: colors.text,
  textAlign: "center",
  marginBottom: 10,
})
