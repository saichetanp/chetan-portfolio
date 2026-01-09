"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

type Theme = {
  name: string;
  primary: string;
  secondary: string;
  accent: string;
  tertiary: string;
  gradient: string;
  primaryGlow: string;
  secondaryGlow: string;
  bgGradient1: string;
  bgGradient2: string;
  borderPrimary: string;
  borderSecondary: string;
  textPrimary: string;
  textSecondary: string;
  hoverBg: string;
  icon: string;
};

type ThemeContextType = {
  theme: Theme;
  currentTheme: string;
  changeTheme: (themeName: string) => void;
  themes: Record<string, Theme>;
};

const ThemeContext = createContext<ThemeContextType | null>(null);

export const themes: Record<string, Theme> = {
  neon: {
    name: "Neon",
    primary: "#00ff88",
    secondary: "#00d4ff",
    accent: "#ff6b6b",
    tertiary: "#ffd93d",
    gradient: "from-[#00ff88] to-[#00d4ff]",
    primaryGlow: "rgba(0, 255, 136, 0.4)",
    secondaryGlow: "rgba(0, 212, 255, 0.4)",
    bgGradient1: "bg-[#00ff88]/10",
    bgGradient2: "bg-[#00d4ff]/10",
    borderPrimary: "border-[#00ff88]/30",
    borderSecondary: "border-[#00d4ff]/30",
    textPrimary: "text-[#00ff88]",
    textSecondary: "text-[#00d4ff]",
    hoverBg: "hover:bg-[#00ff88]/10",
    icon: "⚡",
  },
  synthwave: {
    name: "Synthwave",
    primary: "#ff00ff",
    secondary: "#ff0080",
    accent: "#00ffff",
    tertiary: "#ffff00",
    gradient: "from-[#ff00ff] to-[#ff0080]",
    primaryGlow: "rgba(255, 0, 255, 0.4)",
    secondaryGlow: "rgba(255, 0, 128, 0.4)",
    bgGradient1: "bg-[#ff00ff]/10",
    bgGradient2: "bg-[#ff0080]/10",
    borderPrimary: "border-[#ff00ff]/30",
    borderSecondary: "border-[#ff0080]/30",
    textPrimary: "text-[#ff00ff]",
    textSecondary: "text-[#ff0080]",
    hoverBg: "hover:bg-[#ff00ff]/10",
    icon: "🌆",
  },
  ocean: {
    name: "Ocean",
    primary: "#4a9eff",
    secondary: "#7b68ee",
    accent: "#20b2aa",
    tertiary: "#87ceeb",
    gradient: "from-[#4a9eff] to-[#7b68ee]",
    primaryGlow: "rgba(74, 158, 255, 0.4)",
    secondaryGlow: "rgba(123, 104, 238, 0.4)",
    bgGradient1: "bg-[#4a9eff]/10",
    bgGradient2: "bg-[#7b68ee]/10",
    borderPrimary: "border-[#4a9eff]/30",
    borderSecondary: "border-[#7b68ee]/30",
    textPrimary: "text-[#4a9eff]",
    textSecondary: "text-[#7b68ee]",
    hoverBg: "hover:bg-[#4a9eff]/10",
    icon: "🌊",
  },
  matrix: {
    name: "Matrix",
    primary: "#00ff41",
    secondary: "#008f11",
    accent: "#00ff41",
    tertiary: "#39ff14",
    gradient: "from-[#00ff41] to-[#008f11]",
    primaryGlow: "rgba(0, 255, 65, 0.4)",
    secondaryGlow: "rgba(0, 143, 17, 0.4)",
    bgGradient1: "bg-[#00ff41]/10",
    bgGradient2: "bg-[#008f11]/10",
    borderPrimary: "border-[#00ff41]/30",
    borderSecondary: "border-[#008f11]/30",
    textPrimary: "text-[#00ff41]",
    textSecondary: "text-[#008f11]",
    hoverBg: "hover:bg-[#00ff41]/10",
    icon: "💚",
  },
};

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [currentTheme, setCurrentTheme] = useState<string>("neon");

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("portfolio-theme");
    if (savedTheme && themes[savedTheme]) {
      setCurrentTheme(savedTheme);
    }
  }, []);

  const changeTheme = (themeName: string) => {
    setCurrentTheme(themeName);
    window.localStorage.setItem("portfolio-theme", themeName);
  };

  return (
    <ThemeContext.Provider
      value={{
        theme: themes[currentTheme],
        currentTheme,
        changeTheme,
        themes,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme(): ThemeContextType {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return context;
}