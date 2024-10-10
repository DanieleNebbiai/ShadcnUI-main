import { withThemeComponent } from "@/utils/themeComponent";
import {
  DropdownMenu as ModernDropdownMenu,
  DropdownMenuContent as ModernDropdownMenuContent,
  DropdownMenuItem as ModernDropdownMenuItem,
  DropdownMenuLabel as ModernDropdownMenuLabel,
  DropdownMenuSeparator as ModernDropdownMenuSeparator,
  DropdownMenuTrigger as ModernDropdownMenuTrigger,
} from "./Shadcn/dropdown-menu";

import {
  DropdownMenu as RetroDropdownMenu,
  DropdownMenuContent as RetroDropdownMenuContent,
  DropdownMenuItem as RetroDropdownMenuItem,
  DropdownMenuLabel as RetroDropdownMenuLabel,
  DropdownMenuSeparator as RetroDropdownMenuSeparator,
  DropdownMenuTrigger as RetroDropdownMenuTrigger,
} from "./Retro/dropdown-menu";

import {
  DropdownMenu as BrutalistDropdownMenu,
  DropdownMenuContent as BrutalistDropdownMenuContent,
  DropdownMenuItem as BrutalistDropdownMenuItem,
  DropdownMenuLabel as BrutalistDropdownMenuLabel,
  DropdownMenuSeparator as BrutalistDropdownMenuSeparator,
  DropdownMenuTrigger as BrutalistDropdownMenuTrigger,
} from "./Brutalist/dropdown-menu";

export const DropdownMenu = withThemeComponent(
  ModernDropdownMenu,
  RetroDropdownMenu,
  BrutalistDropdownMenu
);
export const DropdownMenuContent = withThemeComponent(
  ModernDropdownMenuContent,
  RetroDropdownMenuContent,
  BrutalistDropdownMenuContent
);

export const DropdownMenuItem = withThemeComponent(
  ModernDropdownMenuItem,
  RetroDropdownMenuItem,
  BrutalistDropdownMenuItem
);

export const DropdownMenuLabel = withThemeComponent(
  ModernDropdownMenuLabel,
  RetroDropdownMenuLabel,
  BrutalistDropdownMenuLabel
);

export const DropdownMenuSeparator = withThemeComponent(
  ModernDropdownMenuSeparator,
  RetroDropdownMenuSeparator,
  BrutalistDropdownMenuSeparator
);

export const DropdownMenuTrigger = withThemeComponent(
  ModernDropdownMenuTrigger,
  RetroDropdownMenuTrigger,
  BrutalistDropdownMenuTrigger
);
