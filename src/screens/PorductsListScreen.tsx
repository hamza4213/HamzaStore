import { Button } from "@/components/Button"
import { Screen } from "@/components/Screen"
import { Text } from "@/components/Text"
import { useAppTheme } from "@/theme/context"
import { $styles } from "@/theme/styles"
import { useSafeAreaInsetsStyle } from "@/utils/useSafeAreaInsetsStyle"
import { useRouter } from "expo-router"
import { FC } from "react"
import { ViewStyle } from "react-native"

export const PorductsListScreen: FC = function PorductsListScreen() {
  const { themed, theme } = useAppTheme()

  const $bottomContainerInsets = useSafeAreaInsetsStyle(["bottom"])
  const router = useRouter()

  return (
    <Screen preset="fixed" contentContainerStyle={$styles.flex1}>
      <Button
        tx="welcomeScreen:exciting"
        onPress={() => router.push("/(tab)/home/product-details")}
      />
      <Text testID="welcome-heading" tx="welcomeScreen:readyForLaunch" preset="heading" />
      <Text tx="welcomeScreen:exciting" preset="subheading" />
      <Text tx="welcomeScreen:postscript" size="md" />
    </Screen>
  )
}
const $root: ViewStyle = {
  flex: 1,
}
