import React, { useEffect } from "react";
import { useTheme } from "../context/ThemeContext";

interface ThemeWrapperProps {
  children: React.ReactNode;
}

export function ThemeWrapper({ children }: ThemeWrapperProps) {
  const { theme } = useTheme();

  useEffect(() => {
    document.documentElement.classList.remove(
      "theme-modern",
      "theme-retro",
      "theme-tech"
    );

    if (theme !== "modern") {
      document.documentElement.classList.add(`theme-${theme}`);
    }
  }, [theme]);

  return <>{children}</>;
}
