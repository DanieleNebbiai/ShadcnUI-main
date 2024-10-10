import { withThemeComponent } from "@/utils/themeComponent";
import { Button as ModernButton } from "./Shadcn/button";
import { Button as RetroButton } from "./Retro/button";
import { Button as BrutalistButton } from "./Brutalist/button";

export const Button = withThemeComponent(
  ModernButton,
  RetroButton,
  BrutalistButton
);
