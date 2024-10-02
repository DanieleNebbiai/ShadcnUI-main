import { withThemeComponent } from "@/utils/themeComponent";
import {
  Tooltip as ModernTooltip,
  TooltipContent as ModernTooltipContent,
  TooltipProvider as ModernTooltipProvider,
  TooltipTrigger as ModernTooltipTrigger,
} from "./Shadcn/tooltip";
import {
  Tooltip as RetroTooltip,
  TooltipContent as RetroTooltipContent,
  TooltipProvider as RetroTooltipProvider,
  TooltipTrigger as RetroTooltipTrigger,
} from "./Retro/tooltip";
import {
  Tooltip as TechTooltip,
  TooltipContent as TechTooltipContent,
  TooltipProvider as TechTooltipProvider,
  TooltipTrigger as TechTooltipTrigger,
} from "./Tech/tooltip";

export const Tooltip = withThemeComponent(
  ModernTooltip,
  RetroTooltip,
  TechTooltip
);
export const TooltipContent = withThemeComponent(
  ModernTooltipContent,
  RetroTooltipContent,
  TechTooltipContent
);
export const TooltipProvider = withThemeComponent(
  ModernTooltipProvider,
  RetroTooltipProvider,
  TechTooltipProvider
);
export const TooltipTrigger = withThemeComponent(
  ModernTooltipTrigger,
  RetroTooltipTrigger,
  TechTooltipTrigger
);
