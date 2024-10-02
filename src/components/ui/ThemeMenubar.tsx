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
} from "./Retro/menubar-retro";
import {
  Menubar as TechMenubar,
  MenubarMenu as TechMenubarMenu,
  MenubarTrigger as TechMenubarTrigger,
  MenubarContent as TechMenubarContent,
  MenubarItem as TechMenubarItem,
  MenubarSeparator as TechMenubarSeparator,
  MenubarLabel as TechMenubarLabel,
  MenubarShortcut as TechMenubarShortcut,
  MenubarGroup as TechMenubarGroup,
  MenubarPortal as TechMenubarPortal,
  MenubarSub as TechMenubarSub,
  MenubarSubContent as TechMenubarSubContent,
  MenubarSubTrigger as TechMenubarSubTrigger,
  MenubarRadioGroup as TechMenubarRadioGroup,
  MenubarRadioItem as TechMenubarRadioItem,
} from "./Tech/menubar-tech";

export const Menubar = withThemeComponent(
  ModernMenubar,
  RetroMenubar,
  TechMenubar
);
export const MenubarMenu = withThemeComponent(
  ModernMenubarMenu,
  RetroMenubarMenu,
  TechMenubarMenu
);
export const MenubarTrigger = withThemeComponent(
  ModernMenubarTrigger,
  RetroMenubarTrigger,
  TechMenubarTrigger
);
export const MenubarContent = withThemeComponent(
  ModernMenubarContent,
  RetroMenubarContent,
  TechMenubarContent
);
export const MenubarItem = withThemeComponent(
  ModernMenubarItem,
  RetroMenubarItem,
  TechMenubarItem
);
export const MenubarSeparator = withThemeComponent(
  ModernMenubarSeparator,
  RetroMenubarSeparator,
  TechMenubarSeparator
);
export const MenubarLabel = withThemeComponent(
  ModernMenubarLabel,
  RetroMenubarLabel,
  TechMenubarLabel
);
export const MenubarShortcut = withThemeComponent(
  ModernMenubarShortcut,
  RetroMenubarShortcut,
  TechMenubarShortcut
);
export const MenubarGroup = withThemeComponent(
  ModernMenubarGroup,
  RetroMenubarGroup,
  TechMenubarGroup
);
export const MenubarPortal = withThemeComponent(
  ModernMenubarPortal,
  RetroMenubarPortal,
  TechMenubarPortal
);
export const MenubarSub = withThemeComponent(
  ModernMenubarSub,
  RetroMenubarSub,
  TechMenubarSub
);
export const MenubarSubContent = withThemeComponent(
  ModernMenubarSubContent,
  RetroMenubarSubContent,
  TechMenubarSubContent
);
export const MenubarSubTrigger = withThemeComponent(
  ModernMenubarSubTrigger,
  RetroMenubarSubTrigger,
  TechMenubarSubTrigger
);
export const MenubarRadioGroup = withThemeComponent(
  ModernMenubarRadioGroup,
  RetroMenubarRadioGroup,
  TechMenubarRadioGroup
);
export const MenubarRadioItem = withThemeComponent(
  ModernMenubarRadioItem,
  RetroMenubarRadioItem,
  TechMenubarRadioItem
);
