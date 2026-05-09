export const FontFamily = {
  headingRegular: "Manrope-Regular",
  headingMedium: "Manrope-Medium",
  headingSemiBold: "Manrope-SemiBold",
  headingBold: "Manrope-Bold",
  bodyRegular: "Inter-Regular",
  bodyMedium: "Inter-Medium",
  bodySemiBold: "Inter-SemiBold",
} as const;

export const Typography = {
  bodyMedium: {
    fontFamily: FontFamily.bodyRegular,
    fontSize: 16,
    lineHeight: 24,
  },
  labelSmall: {
    fontFamily: FontFamily.bodyMedium,
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: 0.6,
    textTransform: "uppercase" as const,
  },
  headlineMedium: {
    fontFamily: FontFamily.headingSemiBold,
    fontSize: 24,
    lineHeight: 32,
  },
  dataLarge: {
    fontFamily: FontFamily.bodySemiBold,
    fontSize: 20,
    lineHeight: 24,
    letterSpacing: -0.2,
  },
} as const;
