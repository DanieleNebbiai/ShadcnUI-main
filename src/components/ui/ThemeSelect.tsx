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
  Select as TechSelect,
  SelectGroup as TechSelectGroup,
  SelectValue as TechSelectValue,
  SelectTrigger as TechSelectTrigger,
  SelectContent as TechSelectContent,
  SelectLabel as TechSelectLabel,
  SelectItem as TechSelectItem,
  SelectSeparator as TechSelectSeparator,
} from "./Tech/select";

export const Select = withThemeComponent(ModernSelect, RetroSelect, TechSelect);
export const SelectGroup = withThemeComponent(
  ModernSelectGroup,
  RetroSelectGroup,
  TechSelectGroup
);
export const SelectValue = withThemeComponent(
  ModernSelectValue,
  RetroSelectValue,
  TechSelectValue
);
export const SelectTrigger = withThemeComponent(
  ModernSelectTrigger,
  RetroSelectTrigger,
  TechSelectTrigger
);
export const SelectContent = withThemeComponent(
  ModernSelectContent,
  RetroSelectContent,
  TechSelectContent
);
export const SelectLabel = withThemeComponent(
  ModernSelectLabel,
  RetroSelectLabel,
  TechSelectLabel
);
export const SelectItem = withThemeComponent(
  ModernSelectItem,
  RetroSelectItem,
  TechSelectItem
);
export const SelectSeparator = withThemeComponent(
  ModernSelectSeparator,
  RetroSelectSeparator,
  TechSelectSeparator
);
