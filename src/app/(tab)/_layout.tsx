import { useAppTheme } from "@/theme/context"
import { spacing } from "@/theme/spacing"
import { Ionicons } from "@expo/vector-icons"
import { Tabs } from "expo-router"
import { useTranslation } from "react-i18next"

export default function TabsLayout() {
  const { theme } = useAppTheme()
  const { t } = useTranslation()
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: theme.colors.tint,
        tabBarInactiveTintColor: theme.colors.textDim,
        tabBarStyle: {
          backgroundColor: theme.colors.background,
          borderTopColor: theme.colors.border,
        },
        tabBarLabelStyle: {
          fontFamily: theme.typography.primary.medium,
          fontSize: spacing.sm,
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: t("routes:home"),
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="Settings"
        options={{
          title: t("routes:settings"),
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="settings-outline" color={color} size={size} />
          ),
        }}
      />
    </Tabs>
  )
}
