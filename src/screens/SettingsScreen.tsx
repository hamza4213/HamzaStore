import { Header } from "@/components/Header"
import { Screen } from "@/components/Screen"
import { useAppTheme } from "@/theme/context"
import { FC, useCallback } from "react"
import { Button, ViewStyle } from "react-native"

export const SettingsScreen: FC = function SettingsScreen() {
  const { themeContext, setThemeContextOverride } = useAppTheme()

  const toggleTheme = useCallback(() => {
    const nextTheme = themeContext === "light" ? "dark" : "light"
    setThemeContextOverride(nextTheme)
  }, [themeContext, setThemeContextOverride])

  return (
    <Screen preset="fixed" contentContainerStyle={$root}>
      <Header titleTx="common:back" />
      <Button title="Toggle Theme" onPress={toggleTheme} />
    </Screen>
  )
}

const $root: ViewStyle = {
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
}
