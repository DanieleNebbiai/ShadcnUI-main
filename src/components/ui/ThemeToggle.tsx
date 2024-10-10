import { withThemeComponent } from "@/utils/themeComponent";
import { Toggle as ModernToggle } from "./Shadcn/toggle";
import { Toggle as RetroToggle } from "./Retro/toggle";
import { Toggle as BrutalistToggle } from "./Brutalist/toggle";

export const Toggle = withThemeComponent(
  ModernToggle,
  RetroToggle,
  BrutalistToggle
);
