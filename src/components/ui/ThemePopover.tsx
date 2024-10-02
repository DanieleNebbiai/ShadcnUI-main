import { withThemeComponent } from "@/utils/themeComponent";
import {
  Popover as ModernPopover,
  PopoverTrigger as ModernPopoverTrigger,
  PopoverContent as ModernPopoverContent,
} from "./Shadcn/popover";
import {
  Popover as RetroPopover,
  PopoverTrigger as RetroPopoverTrigger,
  PopoverContent as RetroPopoverContent,
} from "./Retro/popover-retro";
import {
  Popover as TechPopover,
  PopoverTrigger as TechPopoverTrigger,
  PopoverContent as TechPopoverContent,
} from "./Tech/popover-tech";

export const Popover = withThemeComponent(
  ModernPopover,
  RetroPopover,
  TechPopover
);
export const PopoverTrigger = withThemeComponent(
  ModernPopoverTrigger,
  RetroPopoverTrigger,
  TechPopoverTrigger
);
export const PopoverContent = withThemeComponent(
  ModernPopoverContent,
  RetroPopoverContent,
  TechPopoverContent
);
