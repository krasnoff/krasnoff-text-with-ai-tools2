import { Colors } from "@/constants/Colors";
import { Layout } from "@/constants/Layout";
import { FontFamily } from "@/constants/Typography";
import React from "react";
import { StyleSheet, Text, View, useWindowDimensions } from "react-native";
import { LineChart } from "react-native-gifted-charts";

export default function Index() {
  const { width: screenWidth } = useWindowDimensions();
  const horizontalMargin = Layout.marginMobile;
  const chartWidth = screenWidth - horizontalMargin * 2;
  const lineData = [{value: 0},{value: 20},{value: 18},{value: 40},{value: 36},{value: 60},{value: 54},{value: 85}]

  return (
     <View style={styles.container}>
       <View style={[styles.content, { backgroundColor: Colors.background }]}>
          <LineChart
              width={chartWidth}
              adjustToWidth
              initialSpacing={0}
              endSpacing={0}
              yAxisLabelWidth={0}
              data={lineData}
              hideDataPoints
              thickness={5}
              hideRules
              hideYAxisText
              yAxisColor={Colors.secondary}
              showVerticalLines
              verticalLinesColor="rgba(14,164,164,0.5)"
              xAxisColor={Colors.secondary}
              color={Colors.secondary}
              curved
              isAnimated
          />
      </View>
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
  content: {
    width: "100%",
    paddingHorizontal: Layout.marginMobile,
  },
  defaultText: {
    fontFamily: FontFamily.bodyRegular,
    color: Colors.onSurface,
    textAlign: "center",
  },
});
