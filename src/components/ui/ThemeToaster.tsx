import { withThemeComponent } from "@/utils/themeComponent";
import { Toaster as ModernToaster } from "./Shadcn/toaster";
import { Toaster as RetroToaster } from "./Retro/toaster";
import { Toaster as BrutalistToaster } from "./Brutalist/toaster";

export const Toaster = withThemeComponent(
  ModernToaster,
  RetroToaster,
  BrutalistToaster
);
