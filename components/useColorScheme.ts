import { useColorScheme as _useColorScheme } from "react-native";
import { useThemeContext } from "./ThemeContext";

export function useColorScheme() {
  try {
    const { theme } = useThemeContext();
    return theme;
  } catch (e) {
    // no provider — fall back to system
    return _useColorScheme();
  }
}
