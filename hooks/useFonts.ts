import { useFonts as useExpoFonts } from 'expo-font';

export default function useFonts() {
  const [fontsLoaded] = useExpoFonts({
    'Manrope-Regular': require('../assets/fonts/Manrope/Manrope-Regular.ttf'),
    'Manrope-Medium': require('../assets/fonts/Manrope/Manrope-Medium.ttf'),
    'Manrope-SemiBold': require('../assets/fonts/Manrope/Manrope-SemiBold.ttf'),
    'Manrope-Bold': require('../assets/fonts/Manrope/Manrope-Bold.ttf'),
    'Inter-Regular': require('../assets/fonts/Inter/Inter_28pt-Regular.ttf'),
    'Inter-Medium': require('../assets/fonts/Inter/Inter_28pt-Medium.ttf'),
    'Inter-SemiBold': require('../assets/fonts/Inter/Inter_28pt-SemiBold.ttf'),
  });

  return fontsLoaded;
}
