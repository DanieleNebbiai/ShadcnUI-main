"use client";

import { Button } from "@/components/ui/ThemeButton";
import { LucideIcon } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

interface StyleButtonProps {
  icon: LucideIcon;
  label: string;
  theme: "modern" | "retro" | "brutalist";

  disabled?: boolean;
  badge?: "progress" | "next";
}

export function StyleButtonComponent({
  icon: Icon,
  label,
  theme,
  disabled = false,
}: StyleButtonProps) {
  const { theme: currentTheme, setTheme } = useTheme();
  const isActive = currentTheme === theme;

  return (
    <Button
      variant={isActive ? "default" : "ghost"}
      className={`flex flex-col items-center justify-center h-full w-24 ${
        isActive
          ? "bg-primary text-primary-foreground hover:bg-primary/90"
          : "text-muted-foreground hover:text-foreground"
      } ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
      onClick={() => !disabled && setTheme(theme)}
      disabled={disabled}
    >
      <Icon
        className={`w-8 h-8 mb-2 ${
          isActive ? "text-primary-foreground" : "text-current"
        }`}
      />
      <span className="text-xs font-medium">{label}</span>
    </Button>
  );
}
