import ComponentWrapper from "@/components/ComponentWrapper";
import { Colors } from "@/constants/Colors";
import { Layout } from "@/constants/Layout";
import { FontFamily } from "@/constants/Typography";
import React from "react";
import { StyleSheet, Text, View, useWindowDimensions } from "react-native";
import { LineChart } from "react-native-gifted-charts";

export default function Index() {
  const { width: screenWidth } = useWindowDimensions();
  const wrapperMarginHorizontal = Layout.marginMobile;
  const wrapperPaddingHorizontal = Layout.marginMobile;
  const wrapperBorderWidth = 1;
  const chartWidth = Math.max(
    0,
    screenWidth -
      wrapperMarginHorizontal * 2 -
      wrapperPaddingHorizontal * 2 -
      wrapperBorderWidth * 2,
  );
  const lineData = [{value: 0},{value: 20},{value: 18},{value: 40},{value: 36},{value: 60},{value: 54},{value: 85}]

  return (
     <View style={styles.container}>
      <ComponentWrapper>
          <LineChart
              width={chartWidth}
              adjustToWidth
              initialSpacing={0}
              endSpacing={0}
              yAxisLabelWidth={0}
              data={lineData}
              hideDataPoints
              thickness={2}
              areaChart
              startFillColor={Colors.black}
              endFillColor={Colors.black}
              startOpacity={1}
              endOpacity={1}
              hideRules
              hideYAxisText
              yAxisThickness={0}
              xAxisThickness={0}
              yAxisColor={Colors.secondary}
              xAxisColor={Colors.secondary}
              color={Colors.secondary}
              curved
              isAnimated
          />
      </ComponentWrapper>
      <Text style={styles.defaultText}>Edit app/index.tsx to edit this screen.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "stretch",
    backgroundColor: Colors.background,
  },
  defaultText: {
    fontFamily: FontFamily.bodyRegular,
    color: Colors.onSurface,
    textAlign: "center",
  },
});
