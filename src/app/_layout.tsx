import { initI18n } from "@/i18n"
import { AxiosProvider } from "@/services/api/providers/axios-provider"
import { QueryProvider } from "@/services/api/providers/query-provider"
import { ThemeProvider } from "@/theme/context"
import { customFontsToLoad } from "@/theme/typography"
import { loadDateFnsLocale } from "@/utils/formatDate"
import { useFonts } from "@expo-google-fonts/space-grotesk"
import { Slot, SplashScreen } from "expo-router"
import { useEffect, useState } from "react"
import { initialWindowMetrics, SafeAreaProvider } from "react-native-safe-area-context"
import ToastManager from "toastify-react-native"

SplashScreen.preventAutoHideAsync()

export default function Root() {
  const [fontsLoaded, fontError] = useFonts(customFontsToLoad)
  const [isI18nInitialized, setIsI18nInitialized] = useState(false)

  useEffect(() => {
    initI18n()
      .then(() => setIsI18nInitialized(true))
      .then(() => loadDateFnsLocale())
  }, [])

  const loaded = fontsLoaded && isI18nInitialized

  useEffect(() => {
    if (fontError) throw fontError
  }, [fontError])

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync()
    }
  }, [loaded])

  if (!loaded) {
    return null
  }

  return (
    <AxiosProvider>
      <QueryProvider>
        <ToastManager />
        <SafeAreaProvider initialMetrics={initialWindowMetrics}>
          <ThemeProvider>
            <Slot />
          </ThemeProvider>
        </SafeAreaProvider>
      </QueryProvider>
    </AxiosProvider>
  )
}
