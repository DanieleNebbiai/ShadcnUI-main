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
} from "./Retro/popover";
import {
  Popover as BrutalistPopover,
  PopoverTrigger as BrutalistPopoverTrigger,
  PopoverContent as BrutalistPopoverContent,
} from "./Brutalist/popover";

export const Popover = withThemeComponent(
  ModernPopover,
  RetroPopover,
  BrutalistPopover
);
export const PopoverTrigger = withThemeComponent(
  ModernPopoverTrigger,
  RetroPopoverTrigger,
  BrutalistPopoverTrigger
);
export const PopoverContent = withThemeComponent(
  ModernPopoverContent,
  RetroPopoverContent,
  BrutalistPopoverContent
);
