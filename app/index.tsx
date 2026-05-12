import ComponentWrapper from "@/components/ComponentWrapper";
import PushButton from "@/components/PushButton";
import { Colors } from "@/constants/Colors";
import { Layout } from "@/constants/Layout";
import { FontFamily, Typography } from "@/constants/Typography";
import React, { useState } from "react";
import { StyleSheet, Text, View, useWindowDimensions } from "react-native";
import { LineChart } from "react-native-gifted-charts";

const TIMEFRAMES = ["1D", "1W", "1M"] as const;
type Timeframe = (typeof TIMEFRAMES)[number];

const TIMEFRAME_INDEX: Record<Timeframe, number> = {
  "1D": 0,
  "1W": 1,
  "1M": 2,
};

export default function Index() {
  const [activeTimeframe, setActiveTimeframe] = useState<Timeframe>("1D");
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
  const lineDataByTimeframe: { value: number }[][] = [
    // 1D
    [{ value: 0 }, { value: 20 }, { value: 18 }, { value: 40 }, { value: 36 }, { value: 60 }, { value: 54 }, { value: 85 }],
    // 1W
    [{ value: 10 }, { value: 25 }, { value: 22 }, { value: 30 }, { value: 45 }, { value: 42 }, { value: 58 }, { value: 65 }],
    // 1M
    [{ value: 5 }, { value: 12 }, { value: 20 }, { value: 28 }, { value: 35 }, { value: 50 }, { value: 62 }, { value: 78 }],
  ];
  const lineData = lineDataByTimeframe[TIMEFRAME_INDEX[activeTimeframe]];

  return (
     <View style={styles.container}>
      <Text style={styles.marketOverviewTitle}>Stocks in israel</Text>
      <Text style={styles.marketOverviewSubtitle}>Real time market overview.</Text>
      <ComponentWrapper style={styles.chartCard}>
        <View style={styles.chartHeaderRow}>
          <View style={styles.chartIndexInfo}>
            <Text style={styles.chartIndexLabel}>TA-35 Index</Text>
            <Text style={styles.chartIndexValue}>4,4170.80</Text>
          </View>
          <View style={styles.pushButtonRow}>
            {TIMEFRAMES.map((timeframe) => (
              <PushButton
                key={timeframe}
                label={timeframe}
                active={activeTimeframe === timeframe}
                onPress={() => setActiveTimeframe(timeframe)}
                accessibilityLabel={`Select ${timeframe} timeframe`}
              />
            ))}
          </View>
        </View>
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
    justifyContent: "flex-start",
    alignItems: "stretch",
    backgroundColor: Colors.background,
  },
  defaultText: {
    fontFamily: FontFamily.bodyRegular,
    color: Colors.onSurface,
    textAlign: "center",
  },
  marketOverviewTitle: {
    ...Typography.headlineMedium,
    color: Colors.onSurface,
    marginHorizontal: Layout.marginMobile,
    marginTop: Layout.marginMobile,
    marginBottom: 4,
  },
  marketOverviewSubtitle: {
    ...Typography.bodyMedium,
    color: Colors.surfaceUltraBright,
    marginHorizontal: Layout.marginMobile,
    marginBottom: Layout.marginTablet,
  },
  chartCard: {
    flexDirection: "column",
    alignItems: "stretch",
    justifyContent: "flex-start",
    gap: 12,
  },
  chartHeaderRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    gap: 12,
  },
  chartIndexInfo: {
    gap: 2,
  },
  chartIndexLabel: {
    ...Typography.dataLarge,
    color: Colors.onSurface,
    paddingBottom: 4,
    paddingTop: 2
  },
  chartIndexValue: {
    ...Typography.labelMedium,
    color: Colors.onSurface,
  },
  pushButtonRow: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "flex-start",
    gap: 8,
  },
});
