import React from "react";
import Svg, { Path } from "react-native-svg";

type TrendingIconProps = {
  size?: number;
  color?: string;
};

export function ArrowUpIcon({
  size = 24,
  color = "#1f1f1f",
}: TrendingIconProps) {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 -960 960 960"
      fill="none"
    >
      <Path
        d="m136-240-56-56 296-298 160 160 208-206H640v-80h240v240h-80v-104L536-320 376-480 136-240Z"
        fill={color}
      />
    </Svg>
  );
}