import { withThemeComponent } from "@/utils/themeComponent";
import { Checkbox as ModernCheckbox } from "./Shadcn/checkbox";
import { Checkbox as RetroCheckbox } from "./Retro/checkbox";
import { Checkbox as TechCheckbox } from "./Tech/checkbox";

export const Checkbox = withThemeComponent(
  ModernCheckbox,
  RetroCheckbox,
  TechCheckbox
);
