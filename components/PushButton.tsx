import { Colors } from "@/constants/Colors";
import { FontFamily } from "@/constants/Typography";
import React from "react";
import {
    Pressable,
    StyleProp,
    StyleSheet,
    Text,
    TextStyle,
    ViewStyle,
} from "react-native";

export type PushButtonProps = Readonly<{
  label: string;
  onPress?: () => void;
  active?: boolean;
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
  labelStyle?: StyleProp<TextStyle>;
  accessibilityLabel?: string;
}>;

export default function PushButton({
  label,
  onPress,
  active = false,
  disabled = false,
  style,
  labelStyle,
  accessibilityLabel,
}: PushButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      accessibilityRole="button"
      accessibilityLabel={accessibilityLabel ?? label}
      style={({ pressed }) => [
        styles.base,
        style,
        active ? styles.active : styles.inactive,
        disabled && styles.disabled,
        pressed && !disabled && styles.pressed,
      ]}
    >
      <Text
        style={[
          styles.label,
          labelStyle,
          active ? styles.activeLabel : styles.inactiveLabel,
          disabled && styles.disabledLabel,
        ]}
      >
        {label}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  base: {
    minHeight: 34,
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 999,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    color: Colors.onSurfaceVariant,
  },
  inactive: {
    backgroundColor: Colors.surfaceContainer,
    borderColor: Colors.outlineVariantLow,
  },
  active: {
    backgroundColor: Colors.backgroundDimOrange,
    borderColor: Colors.outlineVariantLow,
  },
  pressed: {
    opacity: 0.8,
  },
  disabled: {
    opacity: 0.45,
  },
  label: {
    fontFamily: FontFamily.bodySemiBold,
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: 0.5,
    textTransform: "uppercase",
  },
  inactiveLabel: {
    color: Colors.surfaceUltraBright,
  },
  activeLabel: {
    color: Colors.primary
  },
  disabledLabel: {
    color: Colors.neutral,
  },
});