import React from "react";
import { useTheme } from "@/context/ThemeContext";
import { Progress as ModernProgress } from "./Shadcn/progress";

import { Progress as RetroProgress } from "./Retro/progress";

export const Progress: React.FC<React.ComponentProps<typeof ModernProgress>> = (
  props
) => {
  const { theme } = useTheme();

  switch (theme) {
    case "modern":
      return <ModernProgress {...props} />;
    case "retro":
      return <RetroProgress {...props} />;
    default:
      return <ModernProgress {...props} />;
  }
};
