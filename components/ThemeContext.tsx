
import React, { createContext, useCallback, useContext, useState, useEffect } from "react";
import { Appearance } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useColorScheme } from "nativewind";

// Types
type Theme = "light" | "dark";

interface ThemeContextValue {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
}

interface ThemeProviderProps {
  children: React.ReactNode;
}

// Constants
const THEME_STORAGE_KEY = "app_theme";

// Context
const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

// Utils
const getSystemTheme = (): Theme => {
  return (Appearance?.getColorScheme?.() || "light") as Theme;
};

const isValidTheme = (value: string | null): value is Theme => {
  return value === "light" || value === "dark";
};

const logError = (message: string, error: unknown): void => {
  console.log(message, error);
};

// Storage
const themeStorage = {
  async load(): Promise<Theme | null> {
    try {
      const savedTheme = await AsyncStorage.getItem(THEME_STORAGE_KEY);
      return isValidTheme(savedTheme) ? savedTheme : null;
    } catch (error) {
      logError("Failed to load theme from storage:", error);
      return null;
    }
  },

  async save(theme: Theme): Promise<void> {
    try {
      await AsyncStorage.setItem(THEME_STORAGE_KEY, theme);
    } catch (error) {
      logError("Failed to save theme to storage:", error);
    }
  }
};

const useThemeInitialization = (setColorScheme: (scheme: "light" | "dark") => void) => {
  const [theme, setTheme] = useState<Theme>(getSystemTheme());

  useEffect(() => {
    const initializeTheme = async () => {
      const savedTheme = await themeStorage.load();
      if (savedTheme) {
        setTheme(savedTheme);
        setColorScheme(savedTheme);
      }
    };

    initializeTheme();
  }, [setColorScheme]);

  return { theme, setTheme };
};

const useThemeOperations = (
  theme: Theme,
  setTheme: (theme: Theme) => void,
  setColorScheme: (scheme: "light" | "dark") => void
) => {
  const updateTheme = useCallback(async (newTheme: Theme) => {
    setTheme(newTheme);
    setColorScheme(newTheme);
    await themeStorage.save(newTheme);
  }, [setTheme, setColorScheme]);

  const toggleTheme = useCallback(() => {
    const newTheme = theme === "light" ? "dark" : "light";
    updateTheme(newTheme);
  }, [theme, updateTheme]);

  return { updateTheme, toggleTheme };
};

// Provider
export function ThemeProvider({ children }: ThemeProviderProps) {
  const { setColorScheme } = useColorScheme();
  const { theme, setTheme } = useThemeInitialization(setColorScheme);
  const { updateTheme, toggleTheme } = useThemeOperations(theme, setTheme, setColorScheme);

  const contextValue: ThemeContextValue = {
    theme,
    setTheme: updateTheme,
    toggleTheme
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
}

// Hook
export function useThemeContext(): ThemeContextValue {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useThemeContext must be used within ThemeProvider");
  }

  return context;
}
