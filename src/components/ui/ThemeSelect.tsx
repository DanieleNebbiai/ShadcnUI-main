import { withThemeComponent } from "@/utils/themeComponent";
import {
  Select as ModernSelect,
  SelectGroup as ModernSelectGroup,
  SelectValue as ModernSelectValue,
  SelectTrigger as ModernSelectTrigger,
  SelectContent as ModernSelectContent,
  SelectLabel as ModernSelectLabel,
  SelectItem as ModernSelectItem,
  SelectSeparator as ModernSelectSeparator,
} from "./Shadcn/select";
import {
  Select as RetroSelect,
  SelectGroup as RetroSelectGroup,
  SelectValue as RetroSelectValue,
  SelectTrigger as RetroSelectTrigger,
  SelectContent as RetroSelectContent,
  SelectLabel as RetroSelectLabel,
  SelectItem as RetroSelectItem,
  SelectSeparator as RetroSelectSeparator,
} from "./Retro/select";
import {
  Select as BrutalistSelect,
  SelectGroup as BrutalistSelectGroup,
  SelectValue as BrutalistSelectValue,
  SelectTrigger as BrutalistSelectTrigger,
  SelectContent as BrutalistSelectContent,
  SelectLabel as BrutalistSelectLabel,
  SelectItem as BrutalistSelectItem,
  SelectSeparator as BrutalistSelectSeparator,
} from "./Brutalist/select";

export const Select = withThemeComponent(
  ModernSelect,
  RetroSelect,
  BrutalistSelect
);
export const SelectGroup = withThemeComponent(
  ModernSelectGroup,
  RetroSelectGroup,
  BrutalistSelectGroup
);
export const SelectValue = withThemeComponent(
  ModernSelectValue,
  RetroSelectValue,
  BrutalistSelectValue
);
export const SelectTrigger = withThemeComponent(
  ModernSelectTrigger,
  RetroSelectTrigger,
  BrutalistSelectTrigger
);
export const SelectContent = withThemeComponent(
  ModernSelectContent,
  RetroSelectContent,
  BrutalistSelectContent
);
export const SelectLabel = withThemeComponent(
  ModernSelectLabel,
  RetroSelectLabel,
  BrutalistSelectLabel
);
export const SelectItem = withThemeComponent(
  ModernSelectItem,
  RetroSelectItem,
  BrutalistSelectItem
);
export const SelectSeparator = withThemeComponent(
  ModernSelectSeparator,
  RetroSelectSeparator,
  BrutalistSelectSeparator
);
