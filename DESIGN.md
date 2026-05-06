# Design System Documentation: Fintech Noir
*React Native Expo Implementation Guide*

## Overview

This design system centers on a **Corporate / Modern** aesthetic with a high-performance edge. It targets sophisticated investors who demand speed, security, and precision. The visual narrative moves away from the flat, legacy grey of traditional financial interfaces toward a deep, layered dark mode that emphasizes data hierarchy.

The style utilizes subtle **Glassmorphism** for overlays and navigation bars to maintain context while browsing deep financial datasets. The emotional response is one of "calm authority"—where the interface recedes to let the orange brand accents and teal data visualizations guide the user's critical decision-making.

### React Native Considerations
- Optimized for cross-platform consistency (iOS/Android)
- Performance-focused styling with React Native StyleSheet
- Expo ecosystem integration for rapid development
- Safe area handling for modern devices

## Color System

### Base Palette
The palette is built on an "Onyx" base (#131313) to ensure maximum contrast for financial data.

```javascript
// constants/Colors.ts
export const Colors = {
  // Primary Colors
  primary: '#ffb786',
  primaryContainer: '#f57c00',
  onPrimary: '#502400',
  onPrimaryContainer: '#572800',
  
  // Secondary Colors
  secondary: '#46eaed',
  secondaryContainer: '#00cdd0',
  onSecondary: '#003738',
  onSecondaryContainer: '#005253',
  
  // Tertiary Colors
  tertiary: '#ffb3ae',
  tertiaryContainer: '#ff706b',
  onTertiary: '#68000c',
  onTertiaryContainer: '#71000e',
  
  // Surface Colors
  background: '#131313',
  surface: '#131313',
  surfaceDim: '#131313',
  surfaceBright: '#393939',
  surfaceContainerLowest: '#0e0e0e',
  surfaceContainerLow: '#1c1b1b',
  surfaceContainer: '#201f1f',
  surfaceContainerHigh: '#2a2a2a',
  surfaceContainerHighest: '#353534',
  surfaceVariant: '#353534',
  
  // Text Colors
  onSurface: '#e5e2e1',
  onSurfaceVariant: '#dec1af',
  onBackground: '#e5e2e1',
  
  // Outline Colors
  outline: '#a68b7c',
  outlineVariant: '#574235',
  
  // Error Colors
  error: '#ffb4ab',
  errorContainer: '#93000a',
  onError: '#690005',
  onErrorContainer: '#ffdad6',
  
  // Financial Data Colors
  positive: '#00ced1', // Teal for gains
  negative: '#ff5252', // Red for losses
  neutral: '#a68b7c',  // Grey for neutral data
};

// Platform-specific adjustments
export const PlatformColors = Platform.select({
  ios: {
    ...Colors,
    // iOS-specific color adjustments if needed
  },
  android: {
    ...Colors,
    // Android-specific color adjustments if needed
  },
});

### Color Usage Guidelines

- **Primary Orange (#f57c00):** Reserved for primary actions, active states, and brand signatures
- **Teal / Blue (#00ced1):** Used exclusively for "positive" market data, growth charts, and successful transactions, providing a modern alternative to standard green
- **Signal Red (#ff5252):** Used for "negative" market data and critical alerts
- **Greyscale:** Tiered grey system for secondary information, ensuring the UI doesn't feel cluttered

## Typography

### Font Setup with Expo
Install and configure fonts using expo-font:

```bash
npx expo install expo-font
```

Load fonts in your app:

```javascript
// hooks/useFonts.ts
import { useFonts } from 'expo-font';

export default function useCustomFonts() {
  const [fontsLoaded] = useFonts({
    'Manrope-Regular': require('../assets/fonts/Manrope-Regular.ttf'),
    'Manrope-Medium': require('../assets/fonts/Manrope-Medium.ttf'),
    'Manrope-SemiBold': require('../assets/fonts/Manrope-SemiBold.ttf'),
    'Manrope-Bold': require('../assets/fonts/Manrope-Bold.ttf'),
    'Inter-Regular': require('../assets/fonts/Inter-Regular.ttf'),
    'Inter-Medium': require('../assets/fonts/Inter-Medium.ttf'),
    'Inter-SemiBold': require('../assets/fonts/Inter-SemiBold.ttf'),
  });

  return fontsLoaded;
}
```

### Font Families
The design system employs a dual-font strategy:

- **Manrope**: Used for headings and brand moments to provide a refined, modern character
- **Inter**: Used for all functional data and body text due to its exceptional legibility at small sizes and neutral, systematic feel

### Typography Scale

```javascript
// constants/Typography.ts
import { Platform } from 'react-native';

export const Typography = {
  // Display
  displayLarge: {
    fontFamily: 'Manrope-Bold',
    fontSize: 48,
    lineHeight: 56,
    letterSpacing: -0.96, // -0.02em converted to points
    ...Platform.select({
      android: {
        includeFontPadding: false,
      },
    }),
  },
  
  // Headlines
  headlineMedium: {
    fontFamily: 'Manrope-SemiBold',
    fontSize: 24,
    lineHeight: 32,
    ...Platform.select({
      android: {
        includeFontPadding: false,
      },
    }),
  },
  
  // Data (Financial Numbers)
  dataLarge: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 20,
    lineHeight: 24,
    letterSpacing: -0.2, // -0.01em converted to points
    fontVariant: ['tabular-nums'], // For aligned numbers
    ...Platform.select({
      android: {
        includeFontPadding: false,
      },
    }),
  },
  
  // Body
  bodyMedium: {
    fontFamily: 'Inter-Regular',
    fontSize: 16,
    lineHeight: 24,
    ...Platform.select({
      android: {
        includeFontPadding: false,
      },
    }),
  },
  
  // Labels
  labelSmall: {
    fontFamily: 'Inter-Medium',
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: 0.6, // 0.05em converted to points
    textTransform: 'uppercase',
    ...Platform.select({
      android: {
        includeFontPadding: false,
      },
    }),
  },
};

// Helper function for creating text styles
export const createTextStyle = (typography, color) => ({
  ...typography,
  color,
});

### Typography Guidelines

- For stock tickers and balances, use the "data-lg" style with tabular numbers (tnum) to ensure that digits align vertically in lists and tables, allowing for easier price comparison
- Use high contrast between headline and body text sizes to create clear information hierarchy

## Layout & Spacing

### React Native Layout System
The layout follows a **Flexbox** model optimized for mobile-first interactions with responsive breakpoints:

```javascript
// constants/Layout.ts
import { Dimensions } from 'react-native';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

export const Layout = {
  window: {
    width: screenWidth,
    height: screenHeight,
  },
  isSmallDevice: screenWidth < 375,
  isTablet: screenWidth >= 768,
};

// Grid system
export const Grid = {
  columns: Layout.isTablet ? 12 : 4,
  gutter: 16,
  margin: Layout.isTablet ? 32 : 16,
};
```

### Spacing Scale
The spacing rhythm is strictly based on a 4px baseline:

```javascript
// constants/Spacing.ts
export const Spacing = {
  base: 4,
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 48,
  xxl: 64,
  gutter: 16,
  marginMobile: 16,
  marginTablet: 32,
};

// Helper function for consistent spacing
export const spacing = (multiplier = 1) => Spacing.base * multiplier;
```

### Safe Area Handling

```javascript
// Use expo-status-bar and react-native-safe-area-context
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const useSafeSpacing = () => {
  const insets = useSafeAreaInsets();
  
  return {
    paddingTop: Math.max(insets.top, Spacing.md),
    paddingBottom: Math.max(insets.bottom, Spacing.md),
    paddingLeft: Math.max(insets.left, Spacing.md),
    paddingRight: Math.max(insets.right, Spacing.md),
  };
};

### Layout Guidelines

- **Financial Lists**: Use compact "md" (16px) vertical padding to maximize data density
- **Marketing/Onboarding**: Use "xl" (48px) spacing to create a sense of premium openness

## Shape System

### Border Radius
We use a **Rounded** (Level 2) shape language to soften the "hard" nature of financial data:

```javascript
// constants/BorderRadius.ts
export const BorderRadius = {
  none: 0,
  sm: 4,
  default: 8,
  md: 12,
  lg: 16,
  xl: 24,
  full: 9999,
};

// Helper for consistent border radius application
export const borderRadius = {
  all: (size) => ({ borderRadius: BorderRadius[size] }),
  top: (size) => ({
    borderTopLeftRadius: BorderRadius[size],
    borderTopRightRadius: BorderRadius[size],
  }),
  bottom: (size) => ({
    borderBottomLeftRadius: BorderRadius[size],
    borderBottomRightRadius: BorderRadius[size],
  }),
  left: (size) => ({
    borderTopLeftRadius: BorderRadius[size],
    borderBottomLeftRadius: BorderRadius[size],
  }),
  right: (size) => ({
    borderTopRightRadius: BorderRadius[size],
    borderBottomRightRadius: BorderRadius[size],
  }),
};

### Shape Guidelines

- **Standard buttons and input fields**: Use 0.5rem (8px) corner radius
- **Container cards and bottom sheets**: Use "rounded-lg" 1rem (16px) radius to create distinct nesting visual
- **Search bars and filter chips**: Use full pill-shape to differentiate from actionable buttons

## Elevation & Depth

Depth is conveyed through **Tonal Layers** and platform-specific shadows:

### Layer Hierarchy
- **Level 0 (Background)**: Pure black or #131313
- **Level 1 (Cards/Surface)**: #1e1e1e with subtle border opacity
- **Level 2 (Modals/Popovers)**: #2c2c2c with blur effects

### Shadow System

```javascript
// constants/Shadows.ts
import { Platform } from 'react-native';

export const Shadows = {
  none: {},
  
  small: Platform.select({
    ios: {
      shadowColor: '#000000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.08,
      shadowRadius: 4,
    },
    android: {
      elevation: 2,
    },
  }),
  
  medium: Platform.select({
    ios: {
      shadowColor: '#000000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.12,
      shadowRadius: 8,
    },
    android: {
      elevation: 4,
    },
  }),
  
  large: Platform.select({
    ios: {
      shadowColor: '#000000',
      shadowOffset: { width: 0, height: 8 },
      shadowOpacity: 0.16,
      shadowRadius: 16,
    },
    android: {
      elevation: 8,
    },
  }),
  
  // Ambient shadow with orange tint for FABs
  orangeGlow: Platform.select({
    ios: {
      shadowColor: '#f57c00',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.15,
      shadowRadius: 12,
    },
    android: {
      elevation: 6,
    },
  }),
};
```

### Glassmorphism Effects

For overlay components, use React Native's blur effects:

```bash
npx expo install expo-blur
```

```javascript
import { BlurView } from 'expo-blur';

// Glassmorphism overlay component
<BlurView intensity={20} tint="dark" style={styles.glassOverlay}>
  {/* Content */}
</BlurView>
```

## Components

### Buttons

```javascript
// components/Button.tsx
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Colors, Typography, BorderRadius, Shadows } from '../constants';

export const PrimaryButton = ({ title, onPress, disabled = false }) => (
  <TouchableOpacity
    style={[
      styles.primaryButton,
      disabled && styles.disabledButton,
      Shadows.medium,
    ]}
    onPress={onPress}
    disabled={disabled}
    activeOpacity={0.8}
  >
    <Text style={styles.primaryButtonText}>{title}</Text>
  </TouchableOpacity>
);

export const SecondaryButton = ({ title, onPress, disabled = false }) => (
  <TouchableOpacity
    style={[styles.secondaryButton, disabled && styles.disabledButton]}
    onPress={onPress}
    disabled={disabled}
    activeOpacity={0.8}
  >
    <Text style={styles.secondaryButtonText}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  primaryButton: {
    backgroundColor: Colors.primary,
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: BorderRadius.default,
    alignItems: 'center',
    justifyContent: 'center',
  },
  primaryButtonText: {
    ...Typography.bodyMedium,
    color: Colors.onPrimary,
    fontFamily: 'Inter-Medium',
  },
  secondaryButton: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: Colors.primary,
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: BorderRadius.default,
    alignItems: 'center',
    justifyContent: 'center',
  },
  secondaryButtonText: {
    ...Typography.bodyMedium,
    color: Colors.primary,
    fontFamily: 'Inter-Medium',
  },
  disabledButton: {
    opacity: 0.5,
  },
});
```

### Input Fields

```javascript
// components/TextInput.tsx
import React, { useState } from 'react';
import { TextInput as RNTextInput, View, Text, StyleSheet } from 'react-native';
import { Colors, Typography, BorderRadius, Spacing } from '../constants';

export const TextInput = ({ label, placeholder, value, onChangeText, secureTextEntry = false }) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View style={styles.container}>
      {label && (
        <Text style={[styles.label, isFocused && styles.labelFocused]}>
          {label}
        </Text>
      )}
      <RNTextInput
        style={[
          styles.input,
          isFocused && styles.inputFocused,
        ]}
        placeholder={placeholder}
        placeholderTextColor={Colors.onSurfaceVariant}
        value={value}
        onChangeText={onChangeText}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: Spacing.md,
  },
  label: {
    ...Typography.labelSmall,
    color: Colors.onSurfaceVariant,
    marginBottom: Spacing.xs,
  },
  labelFocused: {
    color: Colors.primary,
  },
  input: {
    ...Typography.bodyMedium,
    backgroundColor: Colors.surfaceContainerHigh,
    color: Colors.onSurface,
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.sm,
    borderRadius: BorderRadius.default,
    borderBottomWidth: 2,
    borderBottomColor: Colors.outline,
  },
  inputFocused: {
    borderBottomColor: Colors.primary,
    backgroundColor: Colors.surfaceContainerHighest,
  },
});
```

### Financial Data Display

```javascript
// components/PriceDisplay.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Colors, Typography } from '../constants';

export const PriceDisplay = ({ 
  symbol, 
  price, 
  change, 
  changePercent, 
  size = 'medium' 
}) => {
  const isPositive = change >= 0;
  const changeColor = isPositive ? Colors.positive : Colors.negative;
  const changePrefix = isPositive ? '+' : '';

  return (
    <View style={styles.container}>
      <Text style={[
        size === 'large' ? Typography.headlineMedium : Typography.bodyMedium,
        { color: Colors.onSurface }
      ]}>
        {symbol}
      </Text>
      <Text style={[
        Typography.dataLarge,
        { color: Colors.onSurface, fontVariant: ['tabular-nums'] }
      ]}>
        ${price.toFixed(2)}
      </Text>
      <View style={styles.changeContainer}>
        <Text style={[styles.changeText, { color: changeColor }]}>
          {changePrefix}{change.toFixed(2)}
        </Text>
        <Text style={[styles.changeText, { color: changeColor }]}>
          ({changePrefix}{changePercent.toFixed(2)}%)
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
  },
  changeContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  changeText: {
    ...Typography.labelSmall,
    fontFamily: 'Inter-Medium',
    fontVariant: ['tabular-nums'],
  },
});
```

### Chart Integration

For charts, use react-native-chart-kit or victory-native:

```bash
npx expo install react-native-chart-kit react-native-svg
```

```javascript
// components/LineChart.tsx
import React from 'react';
import { LineChart } from 'react-native-chart-kit';
import { Colors, Layout } from '../constants';

export const FinancialChart = ({ data, labels }) => (
  <LineChart
    data={{
      labels,
      datasets: [{ data }],
    }}
    width={Layout.window.width - 32}
    height={220}
    chartConfig={{
      backgroundColor: Colors.surface,
      backgroundGradientFrom: Colors.surface,
      backgroundGradientTo: Colors.surface,
      color: (opacity = 1) => Colors.positive,
      strokeWidth: 2,
      useShadowColorFromDataset: false,
      fillShadowGradient: Colors.positive,
      fillShadowGradientOpacity: 0.1,
    }}
    style={{
      borderRadius: 8,
    }}
  />
);
```

### Navigation

```javascript
// Navigation setup with React Navigation
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Colors, Typography } from '../constants';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export const TabNavigator = () => (
  <Tab.Navigator
    screenOptions={{
      tabBarStyle: {
        backgroundColor: Colors.surfaceContainer,
        borderTopColor: Colors.outlineVariant,
        borderTopWidth: 1,
      },
      tabBarActiveTintColor: Colors.primary,
      tabBarInactiveTintColor: Colors.onSurfaceVariant,
      tabBarLabelStyle: Typography.labelSmall,
    }}
  >
    {/* Tab screens */}
  </Tab.Navigator>
);
```

### Time-frame Selectors

```javascript
// components/TimeFrameSelector.tsx
import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Colors, Typography, BorderRadius, Spacing } from '../constants';

const timeframes = ['1D', '1W', '1M', '1Y'];

export const TimeFrameSelector = ({ onSelect }) => {
  const [selected, setSelected] = useState('1D');

  const handleSelect = (timeframe) => {
    setSelected(timeframe);
    onSelect(timeframe);
  };

  return (
    <View style={styles.container}>
      {timeframes.map((timeframe) => (
        <TouchableOpacity
          key={timeframe}
          style={[
            styles.chip,
            selected === timeframe && styles.chipSelected,
          ]}
          onPress={() => handleSelect(timeframe)}
        >
          <Text
            style={[
              styles.chipText,
              selected === timeframe && styles.chipTextSelected,
            ]}
          >
            {timeframe}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: Spacing.sm,
  },
  chip: {
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.xs,
    borderRadius: BorderRadius.md,
    backgroundColor: Colors.surfaceContainerHigh,
  },
  chipSelected: {
    backgroundColor: Colors.primaryContainer,
  },
  chipText: {
    ...Typography.labelSmall,
    color: Colors.onSurfaceVariant,
  },
  chipTextSelected: {
    color: Colors.onPrimaryContainer,
  },
});

## Accessibility

### React Native Accessibility

```javascript
// Accessibility helpers
export const accessibilityProps = {
  button: (label, hint = '') => ({
    accessible: true,
    accessibilityRole: 'button',
    accessibilityLabel: label,
    accessibilityHint: hint,
  }),
  
  text: (label) => ({
    accessible: true,
    accessibilityRole: 'text',
    accessibilityLabel: label,
  }),
  
  adjustable: (label, value, min, max) => ({
    accessible: true,
    accessibilityRole: 'adjustable',
    accessibilityLabel: label,
    accessibilityValue: { text: value, min, max },
  }),
};

// Price announcement for screen readers
export const formatPriceForAccessibility = (symbol, price, change) => {
  const direction = change >= 0 ? 'up' : 'down';
  return `${symbol} price ${price} dollars, ${direction} ${Math.abs(change)} dollars`;
};
```

### Contrast Requirements
- All text must meet WCAG AA contrast requirements (4.5:1 for normal text, 3:1 for large text)
- Test all color combinations against dark backgrounds
- Use the provided color tokens that are pre-validated for contrast

### Touch Targets
- Minimum touch target size: 44dp (44 pixels)
- Ensure adequate spacing between interactive elements
- Use `hitSlop` prop for small touch targets

```javascript
// Example with proper touch target
<TouchableOpacity
  style={styles.smallButton}
  hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
  accessibilityRole="button"
  accessibilityLabel="Add to watchlist"
>
  <Icon name="star" size={16} />
</TouchableOpacity>
```

## Implementation Guidelines

### Project Setup

1. **Install Dependencies**
```bash
npx expo install expo-font expo-blur react-native-safe-area-context
npx expo install @react-navigation/native @react-navigation/bottom-tabs @react-navigation/native-stack
npx expo install react-native-chart-kit react-native-svg
```

2. **Constants Structure**
```
constants/
  ├── Colors.ts
  ├── Typography.ts
  ├── Spacing.ts
  ├── BorderRadius.ts
  ├── Shadows.ts
  └── Layout.ts
```

3. **Component Organization**
```
components/
  ├── ui/
  │   ├── Button.tsx
  │   ├── TextInput.tsx
  │   └── Card.tsx
  ├── financial/
  │   ├── PriceDisplay.tsx
  │   ├── Chart.tsx
  │   └── TimeFrameSelector.tsx
  └── navigation/
      └── TabNavigator.tsx
```

### StyleSheet Best Practices

```javascript
// Use StyleSheet.create for performance
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    ...Platform.select({
      ios: {
        paddingTop: 44, // Status bar height
      },
      android: {
        paddingTop: StatusBar.currentHeight,
      },
    }),
  },
});

// Create reusable style functions
export const createCard = (backgroundColor = Colors.surface) => ({
  backgroundColor,
  borderRadius: BorderRadius.lg,
  padding: Spacing.md,
  ...Shadows.medium,
});
```

### Performance Optimization

```javascript
// Use React.memo for expensive components
export const PriceDisplay = React.memo(({ symbol, price, change }) => {
  // Component implementation
});

// Optimize FlatList rendering
const keyExtractor = useCallback((item) => item.id, []);
const renderItem = useCallback(({ item }) => <StockItem {...item} />, []);

<FlatList
  data={stocks}
  keyExtractor={keyExtractor}
  renderItem={renderItem}
  removeClippedSubviews={true}
  maxToRenderPerBatch={10}
  windowSize={10}
/>
```

### Theme Integration

```javascript
// hooks/useTheme.ts
import { useColorScheme } from 'react-native';
import { Colors } from '../constants/Colors';

export const useTheme = () => {
  const colorScheme = useColorScheme();
  
  // Always use dark theme for trading app
  return {
    colors: Colors,
    isDark: true,
  };
};
```

### Testing

```javascript
// __tests__/components/Button.test.tsx
import { render, fireEvent } from '@testing-library/react-native';
import { PrimaryButton } from '../components/Button';

test('button renders correctly', () => {
  const onPress = jest.fn();
  const { getByText } = render(
    <PrimaryButton title="Buy" onPress={onPress} />
  );
  
  const button = getByText('Buy');
  fireEvent.press(button);
  expect(onPress).toHaveBeenCalled();
});
```

### Responsive Design

```javascript
// hooks/useResponsiveLayout.ts
import { useState, useEffect } from 'react';
import { Dimensions } from 'react-native';

export const useResponsiveLayout = () => {
  const [layout, setLayout] = useState(Dimensions.get('window'));
  
  useEffect(() => {
    const subscription = Dimensions.addEventListener('change', ({ window }) => {
      setLayout(window);
    });
    
    return () => subscription?.remove();
  }, []);
  
  return {
    ...layout,
    isTablet: layout.width >= 768,
    isLandscape: layout.width > layout.height,
  };
};
```

---

*This design system is optimized for React Native Expo applications where financial data clarity, cross-platform consistency, trust, and sophisticated mobile aesthetics are paramount.*