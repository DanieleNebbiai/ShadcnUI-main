import { withThemeComponent } from "@/utils/themeComponent";
import { Toaster as ModernToaster } from "./Shadcn/toaster";
import { Toaster as RetroToaster } from "./Retro/toaster-retro";
import { Toaster as TechToaster } from "./Tech/toaster-tech";

export const Toaster = withThemeComponent(
  ModernToaster,
  RetroToaster,
  TechToaster
);
