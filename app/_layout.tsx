import { Colors } from "@/constants/Colors";
import { FontFamily } from "@/constants/Typography";
import useFonts from "@/hooks/useFonts";
import { DrawerToggleButton } from "@react-navigation/drawer";
import { Drawer } from "expo-router/drawer";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { ActivityIndicator, I18nManager, StyleSheet, Text, TextInput, View } from "react-native";
import "react-native-gesture-handler";

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
    I18nManager.allowRTL(false);
    I18nManager.forceRTL(false);
    I18nManager.swapLeftAndRightInRTL(false);
  }, []);

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
    <>
      <StatusBar style="light" backgroundColor={Colors.background} />
      <Drawer
        screenOptions={{
          headerStyle: {
            backgroundColor: Colors.background,
          },
          headerTintColor: Colors.primaryContainer,
          headerTitleStyle: {
            color: Colors.primaryContainer,
          },
          sceneStyle: {
            backgroundColor: Colors.background,
            direction: "ltr",
          },
          drawerStyle: {
            backgroundColor: Colors.background,
            direction: "ltr",
          },
          drawerActiveTintColor: Colors.primary,
          drawerInactiveTintColor: Colors.onSurface,
          headerLeft: () => <DrawerToggleButton tintColor={Colors.primaryContainer} />,
        }}
      >
        <Drawer.Screen
          name="index"
          options={{
            drawerLabel: "Home",
            title: "Home",
          }}
        />
        <Drawer.Screen
          name="second"
          options={{
            drawerLabel: "Second Page",
            title: "Second Page",
          }}
        />
        <Drawer.Screen
          name="stock-details"
          options={{
            title: "Stock Details",
            drawerItemStyle: { display: "none" },
          }}
        />
      </Drawer>
    </>
  );
}
