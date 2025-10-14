import { ViewStyle } from "react-native"

import { Screen } from "@/components/Screen"
import { Text } from "@/components/Text"
import { useAppTheme } from "@/theme/context"
import { useSafeAreaInsetsStyle } from "@/utils/useSafeAreaInsetsStyle"
import { View } from "react-native-reanimated/lib/typescript/Animated"
import { $styles } from "@/theme/styles"

export const PorductsListScreen: FC = function PorductsListScreen() {
  const { themed, theme } = useAppTheme()

  const $bottomContainerInsets = useSafeAreaInsetsStyle(["bottom"])

  return (
    <Screen preset="fixed" contentContainerStyle={$styles.flex1}>
      <Text testID="welcome-heading" tx="welcomeScreen:readyForLaunch" preset="heading" />
      <Text tx="welcomeScreen:exciting" preset="subheading" />

      <Text tx="welcomeScreen:postscript" size="md" />
    </Screen>
  )
}
const $root: ViewStyle = {
  flex: 1,
}
