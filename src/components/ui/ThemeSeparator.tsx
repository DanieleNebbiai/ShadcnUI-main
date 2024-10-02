import { withThemeComponent } from "@/utils/themeComponent";
import { Separator as ModernSeparator } from "./Shadcn/separator";
import { Separator as RetroSeparator } from "./Retro/separator";
import { Separator as TechSeparator } from "./Tech/separator";

export const Separator = withThemeComponent(
  ModernSeparator,
  RetroSeparator,
  TechSeparator
);
