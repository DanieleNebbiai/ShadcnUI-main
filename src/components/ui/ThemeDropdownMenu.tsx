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
  DropdownMenu as TechDropdownMenu,
  DropdownMenuContent as TechDropdownMenuContent,
  DropdownMenuItem as TechDropdownMenuItem,
  DropdownMenuLabel as TechDropdownMenuLabel,
  DropdownMenuSeparator as TechDropdownMenuSeparator,
  DropdownMenuTrigger as TechDropdownMenuTrigger,
} from "./Tech/dropdown-menu";

export const DropdownMenu = withThemeComponent(
  ModernDropdownMenu,
  RetroDropdownMenu,
  TechDropdownMenu
);
export const DropdownMenuContent = withThemeComponent(
  ModernDropdownMenuContent,
  RetroDropdownMenuContent,
  TechDropdownMenuContent
);

export const DropdownMenuItem = withThemeComponent(
  ModernDropdownMenuItem,
  RetroDropdownMenuItem,
  TechDropdownMenuItem
);

export const DropdownMenuLabel = withThemeComponent(
  ModernDropdownMenuLabel,
  RetroDropdownMenuLabel,
  TechDropdownMenuLabel
);

export const DropdownMenuSeparator = withThemeComponent(
  ModernDropdownMenuSeparator,
  RetroDropdownMenuSeparator,
  TechDropdownMenuSeparator
);

export const DropdownMenuTrigger = withThemeComponent(
  ModernDropdownMenuTrigger,
  RetroDropdownMenuTrigger,
  TechDropdownMenuTrigger
);
