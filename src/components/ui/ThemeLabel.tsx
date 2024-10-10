import { withThemeComponent } from "@/utils/themeComponent";
import { Label as ModernLabel } from "./Shadcn/label";
import { Label as RetroLabel } from "./Retro/label";
import { Label as BrutalistLabel } from "./Brutalist/label";

export const Label = withThemeComponent(
  ModernLabel,
  RetroLabel,
  BrutalistLabel
);
