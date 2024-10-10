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
  RadioGroup as BrutalistRadioGroup,
  RadioGroupItem as BrutalistRadioGroupItem,
} from "./Brutalist/radio-group";

export const RadioGroup = withThemeComponent(
  ModernRadioGroup,
  RetroRadioGroup,
  BrutalistRadioGroup
);
export const RadioGroupItem = withThemeComponent(
  ModernRadioGroupItem,
  RetroRadioGroupItem,
  BrutalistRadioGroupItem
);
