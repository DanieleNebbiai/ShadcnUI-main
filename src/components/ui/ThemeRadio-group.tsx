import { withThemeComponent } from "@/utils/themeComponent";
import {
  RadioGroup as ModernRadioGroup,
  RadioGroupItem as ModernRadioGroupItem,
} from "./Shadcn/radio-group";
import {
  RadioGroup as RetroRadioGroup,
  RadioGroupItem as RetroRadioGroupItem,
} from "./Retro/radio-group";
import {
  RadioGroup as TechRadioGroup,
  RadioGroupItem as TechRadioGroupItem,
} from "./Tech/radio-group";

export const RadioGroup = withThemeComponent(
  ModernRadioGroup,
  RetroRadioGroup,
  TechRadioGroup
);
export const RadioGroupItem = withThemeComponent(
  ModernRadioGroupItem,
  RetroRadioGroupItem,
  TechRadioGroupItem
);
