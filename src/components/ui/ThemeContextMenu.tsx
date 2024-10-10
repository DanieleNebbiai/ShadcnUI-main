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
} from "./Retro/context-menu";
import {
  ContextMenu as BrutalistContextMenu,
  ContextMenuContent as BrutalistContextMenuContent,
  ContextMenuItem as BrutalistContextMenuItem,
  ContextMenuTrigger as BrutalistContextMenuTrigger,
} from "./Brutalist/context-menu";

export const ContextMenu = withThemeComponent(
  ModernContextMenu,
  RetroContextMenu,
  BrutalistContextMenu
);
export const ContextMenuContent = withThemeComponent(
  ModernContextMenuContent,
  RetroContextMenuContent,
  BrutalistContextMenuContent
);
export const ContextMenuItem = withThemeComponent(
  ModernContextMenuItem,
  RetroContextMenuItem,
  BrutalistContextMenuItem
);
export const ContextMenuTrigger = withThemeComponent(
  ModernContextMenuTrigger,
  RetroContextMenuTrigger,
  BrutalistContextMenuTrigger
);
