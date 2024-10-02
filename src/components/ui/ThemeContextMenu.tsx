import { withThemeComponent } from "@/utils/themeComponent";
import {
  ContextMenu as ModernContextMenu,
  ContextMenuContent as ModernContextMenuContent,
  ContextMenuItem as ModernContextMenuItem,
  ContextMenuTrigger as ModernContextMenuTrigger,
} from "./Shadcn/context-menu";
import {
  ContextMenu as RetroContextMenu,
  ContextMenuContent as RetroContextMenuContent,
  ContextMenuItem as RetroContextMenuItem,
  ContextMenuTrigger as RetroContextMenuTrigger,
} from "./Retro/context-menu-retro";
import {
  ContextMenu as TechContextMenu,
  ContextMenuContent as TechContextMenuContent,
  ContextMenuItem as TechContextMenuItem,
  ContextMenuTrigger as TechContextMenuTrigger,
} from "./Tech/context-menu-tech";

export const ContextMenu = withThemeComponent(
  ModernContextMenu,
  RetroContextMenu,
  TechContextMenu
);
export const ContextMenuContent = withThemeComponent(
  ModernContextMenuContent,
  RetroContextMenuContent,
  TechContextMenuContent
);
export const ContextMenuItem = withThemeComponent(
  ModernContextMenuItem,
  RetroContextMenuItem,
  TechContextMenuItem
);
export const ContextMenuTrigger = withThemeComponent(
  ModernContextMenuTrigger,
  RetroContextMenuTrigger,
  TechContextMenuTrigger
);
