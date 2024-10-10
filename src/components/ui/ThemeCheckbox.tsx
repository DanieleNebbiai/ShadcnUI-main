import { withThemeComponent } from "@/utils/themeComponent";
import { Checkbox as ModernCheckbox } from "./Shadcn/checkbox";
import { Checkbox as RetroCheckbox } from "./Retro/checkbox";
import { Checkbox as BrutalistCheckbox } from "./Brutalist/checkbox";

export const Checkbox = withThemeComponent(
  ModernCheckbox,
  RetroCheckbox,
  BrutalistCheckbox
);
