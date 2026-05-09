import { Colors } from "@/constants/Colors";
import { FontFamily } from "@/constants/Typography";
import useFonts from "@/hooks/useFonts";
import { Stack } from "expo-router";
import { useEffect } from "react";
import { ActivityIndicator, StyleSheet, Text, TextInput, View } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.background,
  },
});

export default function RootLayout() {
  const fontsLoaded = useFonts();

  useEffect(() => {
    if (!fontsLoaded) return;

    const defaultTextStyle = {
      fontFamily: FontFamily.bodyRegular,
      color: Colors.onSurface,
    };

    const TextComponent = Text as any;
    const TextInputComponent = TextInput as any;

    TextComponent.defaultProps = TextComponent.defaultProps || {};
    TextComponent.defaultProps.style = [TextComponent.defaultProps.style, defaultTextStyle];

    TextInputComponent.defaultProps = TextInputComponent.defaultProps || {};
    TextInputComponent.defaultProps.style = [TextInputComponent.defaultProps.style, defaultTextStyle];
    TextInputComponent.defaultProps.placeholderTextColor = Colors.onSurfaceVariant;
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color={Colors.primary} />
      </View>
    );
  }

  return (
    <Stack
      screenOptions={{
        contentStyle: {
          backgroundColor: Colors.background,
        },
      }}
    />
  );
}
