import { withThemeComponent } from "@/utils/themeComponent";
import {
  NavigationMenu as ModernNavigationMenu,
  NavigationMenuList as ModernNavigationMenuList,
  NavigationMenuItem as ModernNavigationMenuItem,
  NavigationMenuTrigger as ModernNavigationMenuTrigger,
  NavigationMenuContent as ModernNavigationMenuContent,
  NavigationMenuLink as ModernNavigationMenuLink,
  NavigationMenuIndicator as ModernNavigationMenuIndicator,
  NavigationMenuViewport as ModernNavigationMenuViewport,
} from "./Shadcn/navigation-menu";

import {
  NavigationMenu as RetroNavigationMenu,
  NavigationMenuList as RetroNavigationMenuList,
  NavigationMenuItem as RetroNavigationMenuItem,
  NavigationMenuTrigger as RetroNavigationMenuTrigger,
  NavigationMenuContent as RetroNavigationMenuContent,
  NavigationMenuLink as RetroNavigationMenuLink,
  NavigationMenuIndicator as RetroNavigationMenuIndicator,
  NavigationMenuViewport as RetroNavigationMenuViewport,
} from "./Retro/navigation-menu";

import {
  NavigationMenu as TechNavigationMenu,
  NavigationMenuList as TechNavigationMenuList,
  NavigationMenuItem as TechNavigationMenuItem,
  NavigationMenuTrigger as TechNavigationMenuTrigger,
  NavigationMenuContent as TechNavigationMenuContent,
  NavigationMenuLink as TechNavigationMenuLink,
  NavigationMenuIndicator as TechNavigationMenuIndicator,
  NavigationMenuViewport as TechNavigationMenuViewport,
} from "./Tech/navigation-menu";

export const NavigationMenu = withThemeComponent(
  ModernNavigationMenu,
  RetroNavigationMenu,
  TechNavigationMenu
);

export const NavigationMenuList = withThemeComponent(
  ModernNavigationMenuList,
  RetroNavigationMenuList,
  TechNavigationMenuList
);

export const NavigationMenuViewport = withThemeComponent(
  ModernNavigationMenuViewport,
  RetroNavigationMenuViewport,
  TechNavigationMenuViewport
);

export const NavigationMenuItem = withThemeComponent(
  ModernNavigationMenuItem,
  RetroNavigationMenuItem,
  TechNavigationMenuItem
);

export const NavigationMenuTrigger = withThemeComponent(
  ModernNavigationMenuTrigger,
  RetroNavigationMenuTrigger,
  TechNavigationMenuTrigger
);

export const NavigationMenuContent = withThemeComponent(
  ModernNavigationMenuContent,
  RetroNavigationMenuContent,
  TechNavigationMenuContent
);

export const NavigationMenuLink = withThemeComponent(
  ModernNavigationMenuLink,
  RetroNavigationMenuLink,
  TechNavigationMenuLink
);

export const NavigationMenuIndicator = withThemeComponent(
  ModernNavigationMenuIndicator,
  RetroNavigationMenuIndicator,
  TechNavigationMenuIndicator
);
