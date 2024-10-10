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
  Tooltip as BrutalistTooltip,
  TooltipContent as BrutalistTooltipContent,
  TooltipProvider as BrutalistTooltipProvider,
  TooltipTrigger as BrutalistTooltipTrigger,
} from "./Brutalist/tooltip";

export const Tooltip = withThemeComponent(
  ModernTooltip,
  RetroTooltip,
  BrutalistTooltip
);
export const TooltipContent = withThemeComponent(
  ModernTooltipContent,
  RetroTooltipContent,
  BrutalistTooltipContent
);
export const TooltipProvider = withThemeComponent(
  ModernTooltipProvider,
  RetroTooltipProvider,
  BrutalistTooltipProvider
);
export const TooltipTrigger = withThemeComponent(
  ModernTooltipTrigger,
  RetroTooltipTrigger,
  BrutalistTooltipTrigger
);
