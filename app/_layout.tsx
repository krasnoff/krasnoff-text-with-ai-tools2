import useFonts from "@/hooks/useFonts";
import { Stack } from "expo-router";
import { ActivityIndicator, StyleSheet, View } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#131313",
  },
  screenOptions: {
    contentStyle: {
      backgroundColor: "#131313",
    },
  },
});

export default function RootLayout() {
  const fontsLoaded = useFonts();

  if (!fontsLoaded) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#ffb786" />
      </View>
    );
  }

  return (
    <Stack
      screenOptions={{
        contentStyle: {
          backgroundColor: "#131313",
        },
      }}
    />
  );
}
