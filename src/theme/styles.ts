import { ViewStyle } from "react-native"

import { spacing } from "./spacing"

/* Use this file to define styles that are used in multiple places in your app. */
export const $styles = {
  row: { flexDirection: "row" } as ViewStyle,
  flex1: { flex: 1 } as ViewStyle,
  flexWrap: { flexWrap: "wrap" } as ViewStyle,
  root: { flex: 1, paddingHorizontal: 20 } as ViewStyle,
  spaceBetween: { justifyContent: "space-between" } as ViewStyle,
  toggleInner: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  } as ViewStyle,
}
export const $favoriteButton: ViewStyle = {
  position: "absolute",
  top: spacing.sm,
  right: spacing.sm,
  borderRadius: spacing.lg,
  width: spacing.xxl,
  height: spacing.xxl,
  justifyContent: "center",
  alignItems: "center",
}
