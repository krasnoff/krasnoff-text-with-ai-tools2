import { ArrowUpIcon } from "@/assets/svg/arrow-up";
import ComponentWrapper from "@/components/ComponentWrapper";
import PushButton from "@/components/PushButton";
import { Colors } from "@/constants/Colors";
import { Layout } from "@/constants/Layout";
import { FontFamily, Typography } from "@/constants/Typography";
import AntDesign from '@expo/vector-icons/AntDesign';
import React, { useState } from "react";
import { StyleSheet, Text, View, useWindowDimensions } from "react-native";
import { Dropdown } from 'react-native-element-dropdown';
import { ScrollView } from "react-native-gesture-handler";
import { LineChart } from "react-native-gifted-charts";

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
  const TIMEFRAME_INDEX: Record<Timeframe, number> = {
    "1D": 0,
    "1W": 1,
    "1M": 2,
  };
  
  const lineData = lineDataByTimeframe[TIMEFRAME_INDEX[activeTimeframe]];

  const data = [
    { label: "All-Bond כללי", value: 601 },
    { label: "All-Bond צמודות", value: 604 },
    { label: "All-Bond ריבית משתנה", value: 716 },
    { label: "All-Bond שקלי", value: 740 },
    { label: "VTA35", value: 598 },
    { label: "אג\"ח לא-ממשלתיות", value: 603 },
    { label: "אג\"ח להמרה כללי", value: 4 },
    { label: "אג\"ח מגובה פקדונות", value: 764 },
    { label: "אופציות כללי", value: 3 },
    { label: "בונד קצר עד שנה", value: 751 },
    { label: "בנקים מניות והמירים", value: 13 },
    { label: "חברות השקעה ואחזקות", value: 117 },
    { label: "חברות תעשיה", value: 73 },
    { label: "חיסכון לא צמודות דירוג כפול", value: 759 },
    { label: "חיפושי גז ונפט מניות והמ'", value: 127 },
    { label: "יתר מניות והמירים", value: 161 },
    { label: "כימיה גומי ופלסטיק", value: 97 },
    { label: "מדד יתר מניות", value: 162 },
    { label: "מדדיות לא-ממשלתיות", value: 606 },
    { label: "ממשלתי צמוד", value: 696 },
    { label: "מניות והמירים כללי", value: 1 },
    { label: "מניות כללי", value: 2 },
    { label: "מסחר ושירותים מניות והמירים", value: 41 },
    { label: "נדל\"ן ובינוי מניות והמירים", value: 61 },
    { label: "פיזור מנפיקים AAתל בונד", value: 767 },
    { label: "פיזור מנפיקים Aתל בונד", value: 766 },
    { label: "ת\"א - מזון", value: 212 },
    { label: "ת\"א- 35משקל שווה", value: 211 },
    { label: "ת\"א- 50ריאלי", value: 198 },
    { label: "ת\"א 90 ובנקים", value: 196 },
    { label: "ת\"א All-Share", value: 168 },
    { label: "ת\"א- EW 90מודל רווחיות", value: 202 },
    { label: "ת\"א SME60", value: 147 },
    { label: "ת\"א- SME60EWמודל רווחיות", value: 203 },
    { label: "ת\"א ביטוח", value: 33 },
    { label: "ת\"א ביטחוניות", value: 207 },
    { label: "ת\"א בנקים- 5משקל שווה", value: 204 },
    { label: "ת\"א בנקים ביטוח משקל שווה", value: 205 },
    { label: "ת\"א בנקים-5", value: 164 },
    { label: "ת\"א גלובל-בלוטק", value: 145 },
    { label: "ת\"א טכנולוגיה 35", value: 209 },
    { label: "ת\"א טק-עילית", value: 173 },
    { label: "ת\"א נדל\"ן 35", value: 208 },
    { label: "ת\"א נדלן", value: 149 },
    { label: "ת\"א סקטור-באלאנס", value: 177 },
    { label: "ת\"א פמילי", value: 179 },
    { label: "ת\"א תעשייה", value: 178 },
    { label: "ת\"א תקשורת וטכנולוגיות מידע", value: 172 },
    { label: "ת\"א תשתיות", value: 206 },
    { label: "ת\"א-125", value: 137 },
    { label: "ת\"א-125 אקלים נקי מדלקים", value: 185 },
    { label: "ת\"א-125 ערך", value: 195 },
    { label: "ת\"א-125EW", value: 189 },
    { label: "ת\"א-20", value: 197 },
    { label: "ת\"א-200", value: 199 },
    { label: "ת\"א-35", value: 142 },
    { label: "ת\"א-35 דולר", value: 174 },
    { label: "ת\"א-90", value: 143 },
    { label: "ת\"א-MidCap-150", value: 176 },
    { label: "ת\"א-אנרגיה ישראל", value: 210 },
    { label: "ת\"א-ביומד", value: 167 },
    { label: "ת\"א-ביטוח ושירותים פיננסיים", value: 171 },
    { label: "ת\"א-בנייה", value: 181 },
    { label: "ת\"א-בנקים", value: 194 },
    { label: "ת\"א-דואליות", value: 187 },
    { label: "ת\"א-טכנולוגיה", value: 169 },
    { label: "ת\"א-מניב חו\"ל", value: 183 },
    { label: "ת\"א-מניב ישראל", value: 182 },
    { label: "ת\"א-מעלה", value: 150 },
    { label: "ת\"א-נפט וגז", value: 170 },
    { label: "ת\"א-פיננסים", value: 148 },
    { label: "ת\"א-צמיחה", value: 163 },
    { label: "ת\"א-קלינטק", value: 184 },
    { label: "ת\"א-רימון", value: 175 },
    { label: "ת\"א-רשתות שיווק", value: 188 },
    { label: "ת\"א-תשתיות אנרגיה", value: 180 },
    { label: "תל בונד 100 צמודות", value: 743 },
    { label: "תל בונד 125 ערך צמוד", value: 753 },
    { label: "תל בונד 125 ערך שקלי", value: 752 },
    { label: "תל בונד 20", value: 707 },
    { label: "תל בונד 40", value: 708 },
    { label: "תל בונד 60", value: 709 },
    { label: "תל בונד בולט 2029 ישראל", value: 762 },
    { label: "תל בונד בולט 2029 שקלי", value: 760 },
    { label: "תל בונד בולט צמוד 10/2028", value: 761 },
    { label: "תל בונד דולר", value: 739 },
    { label: "תל בונד לא צמודות AAA", value: 757 },
    { label: "תל בונד צמודות", value: 711 },
    { label: "תל בונד צמודות 5-10", value: 749 },
    { label: "תל בונד צמודות A", value: 735 },
    { label: "תל בונד צמודות AAA", value: 756 },
    { label: "תל בונד צמודות AAA-AA", value: 736 },
    { label: "תל בונד צמודות בנקים", value: 747 },
    { label: "תל בונד צמודות בנקים וחברות ממשלתיות", value: 750 },
    { label: "תל בונד צמודות דירוג כפול", value: 758 },
    { label: "תל בונד צמודות-בנקים ללא קוקו", value: 713 },
    { label: "תל בונד צמודות-יתר", value: 712 },
    { label: "תל בונד צמודות-נדל\"ן", value: 734 },
    { label: "תל בונד קוקו +A", value: 744 },
    { label: "תל בונד שקלי 100", value: 742 },
    { label: "תל בונד שקלי 5-10", value: 748 },
    { label: "תל בונד שקלי 60", value: 765 },
    { label: "תל בונד שקלי-בנקים וביטוח", value: 733 },
    { label: "תל בונד תשואות צמודות-פיזור רחב", value: 745 },
    { label: "תל בונד תשואות שקלי-פיזור רחב", value: 746 },
    { label: "תל בונד-גלובל", value: 719 },
    { label: "תל בונד-לא צמודות", value: 717 },
    { label: "תל בונד-מאגר", value: 715 },
    { label: "תל בונד-צמודות 15-5", value: 723 },
    { label: "תל בונד-צמודות 3-1", value: 721 },
    { label: "תל בונד-צמודות 5-3", value: 722 },
    { label: "תל בונד-צמודות מעלה", value: 731 },
    { label: "תל בונד-שקלי", value: 710 },
    { label: "תל בונד-שקלי 15-5", value: 726 },
    { label: "תל בונד-שקלי 3-1", value: 724 },
    { label: "תל בונד-שקלי 5-3", value: 725 },
    { label: "תל בונד-שקלי A", value: 737 },
    { label: "תל בונד-שקלי AAA-AA", value: 738 },
    { label: "תל בונד-שקלי מעלה", value: 732 },
    { label: "תל בונד-שקלי-50", value: 720 },
    { label: "תל בונד-תשואות צמודות", value: 714 },
    { label: "תל בונד-תשואות שקלי", value: 718 },
    { label: "תל גוב-כללי", value: 602 },
    { label: "תל גוב-לא צמודות", value: 690 },
    { label: "תל גוב-מק\"מ", value: 800 },
    { label: "תל גוב-משתנה", value: 701 },
    { label: "תל גוב-צמודות", value: 605 },
    { label: "תל גוב-צמודות +51", value: 694 },
    { label: "תל גוב-צמודות 0-2", value: 637 },
    { label: "תל גוב-צמודות 10+", value: 728 },
    { label: "תל גוב-צמודות 2-5", value: 646 },
    { label: "תל גוב-צמודות 5+", value: 727 },
    { label: "תל גוב-צמודות 5-10", value: 658 },
    { label: "תל גוב-שקלי", value: 700 },
    { label: "תל גוב-שקלי 0-2", value: 702 },
    { label: "תל גוב-שקלי 10+", value: 730 },
    { label: "תל גוב-שקלי 2-5", value: 703 },
    { label: "תל גוב-שקלי 5+", value: 704 },
    { label: "תל גוב-שקלי 5-10", value: 729 },
    { label: "תל דיב אריסטוקרט", value: 200 },
    { label: "תל-בונד נע\"מ", value: 763 },
    { label: "תל-דיב", value: 166 }
  ];

  const israeliStocks = [
    { name: "Elbit Systems", currentPrice: 226420.0, change: 0.94 },
    { name: "Azrieli", currentPrice: 48060.0, change: -1.05 },
    { name: "Israel Discount Bank", currentPrice: 3069.0, change: -3.79 },
    { name: "Harel", currentPrice: 19460.0, change: -1.67 },
    { name: "FIBI Holdings", currentPrice: 24300.0, change: -2.21 },
    { name: "Bezeq The Israel", currentPrice: 776.6, change: -1.61 },
    { name: "Newmed Energy Lp", currentPrice: 1780.0, change: 0 },
    { name: "Delek", currentPrice: 96000.0, change: 2.62 },
    { name: "Big Shopping", currentPrice: 78240.0, change: -1.73 },
    { name: "Clal Insurance", currentPrice: 28480.0, change: 2.08 }
  ];

  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  const TIMEFRAMES = ["1D", "1W", "1M"] as const;
  type Timeframe = (typeof TIMEFRAMES)[number];

  return (
     <ScrollView
       style={styles.scrollView}
       contentContainerStyle={styles.container}
     >
      <Text style={styles.marketOverviewTitle}>Stocks in israel</Text>
      <Text style={styles.marketOverviewSubtitle}>Real time market overview.</Text>
      <ComponentWrapper style={styles.chartCard}>
        <View style={styles.chartHeaderRow}>
          <View style={styles.chartIndexInfo}>
            <Text style={styles.chartIndexLabel}>TA-35 Index</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 6, flexWrap: 'nowrap' }}>
              <Text style={styles.chartIndexValue} numberOfLines={1}>4,4170.80</Text>
              <ArrowUpIcon size={16} color={Colors.secondary} />
              <Text style={styles.chartIndexValuePercent} numberOfLines={1}>+1.06%</Text>
            </View>
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

      <Dropdown
          style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={data}
          search
          maxHeight={200}
          labelField="label"
          valueField="value"
          placeholder={!isFocus ? 'Select item' : '...'}
          searchPlaceholder="Search..."
          value={value}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            setValue(item.value);
            setIsFocus(false);
          }}
          renderLeftIcon={() => (
            <AntDesign
              style={styles.icon}
              color={isFocus ? 'blue' : 'black'}
              size={20}
            />
          )}
        />

      <ComponentWrapper style={styles.stockListHeaderCard}>
        <View style={styles.stockLineRow}>
          <Text style={[styles.stockHeaderCell, styles.stockNameCell]} numberOfLines={1}>
            Stock Name
          </Text>
          <Text style={[styles.stockHeaderCell, styles.stockMiddleCell]} numberOfLines={1}>
            Current Price
          </Text>
          <Text style={styles.stockHeaderCell} numberOfLines={1}>
            Change
          </Text>
        </View>
      </ComponentWrapper>

      {israeliStocks.map((stock) => (
        <ComponentWrapper key={stock.name} style={styles.stockLineCard}>
          <View style={styles.stockLineRow}>
            <Text style={[styles.stockLineCell, styles.stockNameCell]} numberOfLines={1}>
              {stock.name}
            </Text>
            <Text style={[styles.stockLineCell, styles.stockMiddleCell]} numberOfLines={1}>
              ₪{stock.currentPrice.toLocaleString("en-US")}
            </Text>
            <Text
              style={[
                styles.stockLineCell,
                styles.stockValueCell,
                stock.change >= 0 ? styles.stockChangePositive : styles.stockChangeNegative,
              ]}
              numberOfLines={1}
            >
              {stock.change >= 0 ? "+" : ""}
              {stock.change.toFixed(2)}%
            </Text>
          </View>
        </ComponentWrapper>
      ))}
      
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "flex-start",
    alignItems: "stretch",
  },
  scrollView: {
    flex: 1,
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
    flex: 1,
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
  chartIndexValuePercent: {
    ...Typography.labelSmall,
    color: Colors.secondary,
  },
  stockLineCard: {
    flexDirection: "column",
    alignItems: "stretch",
    justifyContent: "center",
    marginTop: Layout.marginMobile,
  },
  stockListHeaderCard: {
    flexDirection: "column",
    alignItems: "stretch",
    justifyContent: "center",
    marginTop: Layout.marginMobile,
    marginBottom: 0,
  },
  stockLineRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 12,
  },
  stockLineCell: {
    ...Typography.labelMedium,
    color: Colors.onSurface,
    flexShrink: 1,
  },
  stockHeaderCell: {
    ...Typography.labelSmall,
    color: Colors.surfaceUltraBright,
    flexShrink: 1,
  },
  stockNameCell: {
    flex: 1,
  },
  stockMiddleCell: {
    textAlign: "right",
  },
  stockValueCell: {
    width: 80,
    minWidth: 80,
    textAlign: "right",
  },
  stockChangePositive: {
    color: Colors.secondary,
  },
  stockChangeNegative: {
    color: "#c94f4f",
  },
  pushButtonRow: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "flex-start",
    gap: 8,
  },
  dropdown: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
    marginHorizontal: Layout.marginMobile,
    marginTop: Layout.marginMobile,
    color: Colors.onSurface
  },
  placeholderStyle: {
    fontSize: 16,
    color: Colors.onSurface
  },
  selectedTextStyle: {
    fontSize: 16,
    color: Colors.onSurface
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
    color: Colors.onSurface
  },
  icon: {
    marginRight: 5,
  },
});
