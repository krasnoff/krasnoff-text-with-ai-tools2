import { Colors } from "@/constants/Colors";
import { Layout } from "@/constants/Layout";
import React from "react";
import { StyleProp, StyleSheet, View, ViewStyle } from "react-native";

export type MarketOverviewHeaderWrapperProps = Readonly<{
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}>;

export default function ComponentWrapper({
  children,
  style,
}: MarketOverviewHeaderWrapperProps) {
  return <View style={[styles.wrapper, style]}>{children}</View>;
}

const styles = StyleSheet.create({
  wrapper: {
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: Layout.marginMobile,
    padding: Layout.marginMobile,
    backgroundColor: Colors.surfaceContainer,
    borderWidth: 1,
    borderColor: Colors.outlineVariantLow,
    borderRadius: 8,
  },
});
