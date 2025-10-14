import { Header } from "@/components/Header"
import { Screen } from "@/components/Screen"
import { Text } from "@/components/Text"
import { Switch } from "@/components/Toggle/Switch"
import { useAppTheme } from "@/theme/context"
import { $styles } from "@/theme/styles"
import { FC, useCallback } from "react"
import { View } from "react-native"

export const SettingsScreen: FC = function SettingsScreen() {
  const { themeContext, setThemeContextOverride } = useAppTheme()

  const toggleTheme = useCallback(() => {
    const nextTheme = themeContext === "light" ? "dark" : "light"
    setThemeContextOverride(nextTheme)
  }, [themeContext, setThemeContextOverride])

  return (
    <Screen preset="fixed" style={$styles.root}>
      <Header titleTx="common:back" />
      <View style={[$styles.row, $styles.spaceBetween]}>
        <Text tx="common:ok" />
        <Switch value={themeContext === "dark"} onPress={toggleTheme} />
      </View>
    </Screen>
  )
}
