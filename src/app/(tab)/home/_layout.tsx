import { Stack } from "expo-router"

export default function HomeStackLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" options={{ title: "Products" }} />
      <Stack.Screen name="product-details" options={{ title: "Product Details" }} />
    </Stack>
  )
}
