import React from "react";
import Svg, { Path } from "react-native-svg";

type TrendingIconProps = {
  size?: number;
  color?: string;
};

export function ArrowDownIcon({
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
        d="M640-240v-80h104L536-526 376-366 80-664l56-56 240 240 160-160 264 264v-104h80v240H640Z"
        fill={color}
      />
    </Svg>
  );
}