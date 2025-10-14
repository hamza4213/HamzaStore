import { Header } from "@/components/Header"
import { Screen } from "@/components/Screen"
import { Text } from "@/components/Text"
import { Switch } from "@/components/Toggle/Switch"
import { useAppTheme } from "@/theme/context"
import { spacing } from "@/theme/spacing"
import { $styles } from "@/theme/styles"
import { save } from "@/utils/storage"
import i18n from "i18next"
import { FC, useCallback, useState } from "react"
import { View } from "react-native"
export const SettingsScreen: FC = function SettingsScreen() {
  const { themeContext, setThemeContextOverride } = useAppTheme()

  const toggleTheme = useCallback(() => {
    const nextTheme = themeContext === "light" ? "dark" : "light"
    setThemeContextOverride(nextTheme)
  }, [themeContext, setThemeContextOverride])
  const [language, setLanguage] = useState(i18n.language.startsWith("ur") ? "ur" : "en")
  const toggleLanguage = async () => {
    const newLang = i18n.language === "en" ? "ur" : "en"
    await i18n.changeLanguage(newLang)
    save("language", newLang)
    setLanguage(newLang)
  }

  return (
    <Screen preset="fixed" style={$styles.root}>
      <Header titleTx="routes:settings" />
      <View style={[$styles.row, $styles.spaceBetween]}>
        <Text tx="common:darkMode" />
        <Switch value={themeContext === "dark"} onPress={toggleTheme} />
      </View>
      <View style={[$styles.row, $styles.spaceBetween, { marginTop: spacing.xxl }]}>
        <Text tx="common:changeLanguage" />
        <Switch value={i18n.language === "en"} onPress={toggleLanguage} />
      </View>
    </Screen>
  )
}
