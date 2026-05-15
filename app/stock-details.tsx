import { Colors } from "@/constants/Colors";
import { Typography } from "@/constants/Typography";
import { useLocalSearchParams } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function StockDetailsPage() {
  const { id, name, currentPrice, change } = useLocalSearchParams<{
    id?: string;
    name?: string;
    currentPrice?: string;
    change?: string;
  }>();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Stock Details</Text>
      <Text style={styles.paramRow}>id: {id ?? ""}</Text>
      <Text style={styles.paramRow}>name: {name ?? ""}</Text>
      <Text style={styles.paramRow}>currentPrice: {currentPrice ?? ""}</Text>
      <Text style={styles.paramRow}>change: {change ?? ""}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    padding: 16,
    gap: 8,
  },
  title: {
    ...Typography.headlineMedium,
    color: Colors.onSurface,
    marginBottom: 8,
  },
  paramRow: {
    ...Typography.bodyMedium,
    color: Colors.onSurface,
  },
});