import { withThemeComponent } from "@/utils/themeComponent";
import {
  Menubar as ModernMenubar,
  MenubarMenu as ModernMenubarMenu,
  MenubarTrigger as ModernMenubarTrigger,
  MenubarContent as ModernMenubarContent,
  MenubarItem as ModernMenubarItem,
  MenubarSeparator as ModernMenubarSeparator,
  MenubarLabel as ModernMenubarLabel,
  MenubarShortcut as ModernMenubarShortcut,
  MenubarGroup as ModernMenubarGroup,
  MenubarPortal as ModernMenubarPortal,
  MenubarSub as ModernMenubarSub,
  MenubarSubContent as ModernMenubarSubContent,
  MenubarSubTrigger as ModernMenubarSubTrigger,
  MenubarRadioGroup as ModernMenubarRadioGroup,
  MenubarRadioItem as ModernMenubarRadioItem,
} from "./Shadcn/menubar";
import {
  Menubar as RetroMenubar,
  MenubarMenu as RetroMenubarMenu,
  MenubarTrigger as RetroMenubarTrigger,
  MenubarContent as RetroMenubarContent,
  MenubarItem as RetroMenubarItem,
  MenubarSeparator as RetroMenubarSeparator,
  MenubarLabel as RetroMenubarLabel,
  MenubarShortcut as RetroMenubarShortcut,
  MenubarGroup as RetroMenubarGroup,
  MenubarPortal as RetroMenubarPortal,
  MenubarSub as RetroMenubarSub,
  MenubarSubContent as RetroMenubarSubContent,
  MenubarSubTrigger as RetroMenubarSubTrigger,
  MenubarRadioGroup as RetroMenubarRadioGroup,
  MenubarRadioItem as RetroMenubarRadioItem,
} from "./Retro/menubar";
import {
  Menubar as BrutalistMenubar,
  MenubarMenu as BrutalistMenubarMenu,
  MenubarTrigger as BrutalistMenubarTrigger,
  MenubarContent as BrutalistMenubarContent,
  MenubarItem as BrutalistMenubarItem,
  MenubarSeparator as BrutalistMenubarSeparator,
  MenubarLabel as BrutalistMenubarLabel,
  MenubarShortcut as BrutalistMenubarShortcut,
  MenubarGroup as BrutalistMenubarGroup,
  MenubarPortal as BrutalistMenubarPortal,
  MenubarSub as BrutalistMenubarSub,
  MenubarSubContent as BrutalistMenubarSubContent,
  MenubarSubTrigger as BrutalistMenubarSubTrigger,
  MenubarRadioGroup as BrutalistMenubarRadioGroup,
  MenubarRadioItem as BrutalistMenubarRadioItem,
} from "./Brutalist/menubar";

export const Menubar = withThemeComponent(
  ModernMenubar,
  RetroMenubar,
  BrutalistMenubar
);
export const MenubarMenu = withThemeComponent(
  ModernMenubarMenu,
  RetroMenubarMenu,
  BrutalistMenubarMenu
);
export const MenubarTrigger = withThemeComponent(
  ModernMenubarTrigger,
  RetroMenubarTrigger,
  BrutalistMenubarTrigger
);
export const MenubarContent = withThemeComponent(
  ModernMenubarContent,
  RetroMenubarContent,
  BrutalistMenubarContent
);
export const MenubarItem = withThemeComponent(
  ModernMenubarItem,
  RetroMenubarItem,
  BrutalistMenubarItem
);
export const MenubarSeparator = withThemeComponent(
  ModernMenubarSeparator,
  RetroMenubarSeparator,
  BrutalistMenubarSeparator
);
export const MenubarLabel = withThemeComponent(
  ModernMenubarLabel,
  RetroMenubarLabel,
  BrutalistMenubarLabel
);
export const MenubarShortcut = withThemeComponent(
  ModernMenubarShortcut,
  RetroMenubarShortcut,
  BrutalistMenubarShortcut
);
export const MenubarGroup = withThemeComponent(
  ModernMenubarGroup,
  RetroMenubarGroup,
  BrutalistMenubarGroup
);
export const MenubarPortal = withThemeComponent(
  ModernMenubarPortal,
  RetroMenubarPortal,
  BrutalistMenubarPortal
);
export const MenubarSub = withThemeComponent(
  ModernMenubarSub,
  RetroMenubarSub,
  BrutalistMenubarSub
);
export const MenubarSubContent = withThemeComponent(
  ModernMenubarSubContent,
  RetroMenubarSubContent,
  BrutalistMenubarSubContent
);
export const MenubarSubTrigger = withThemeComponent(
  ModernMenubarSubTrigger,
  RetroMenubarSubTrigger,
  BrutalistMenubarSubTrigger
);
export const MenubarRadioGroup = withThemeComponent(
  ModernMenubarRadioGroup,
  RetroMenubarRadioGroup,
  BrutalistMenubarRadioGroup
);
export const MenubarRadioItem = withThemeComponent(
  ModernMenubarRadioItem,
  RetroMenubarRadioItem,
  BrutalistMenubarRadioItem
);
