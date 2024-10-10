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
  NavigationMenu as BrutalistNavigationMenu,
  NavigationMenuList as BrutalistNavigationMenuList,
  NavigationMenuItem as BrutalistNavigationMenuItem,
  NavigationMenuTrigger as BrutalistNavigationMenuTrigger,
  NavigationMenuContent as BrutalistNavigationMenuContent,
  NavigationMenuLink as BrutalistNavigationMenuLink,
  NavigationMenuIndicator as BrutalistNavigationMenuIndicator,
  NavigationMenuViewport as BrutalistNavigationMenuViewport,
} from "./Brutalist/navigation-menu";

export const NavigationMenu = withThemeComponent(
  ModernNavigationMenu,
  RetroNavigationMenu,
  BrutalistNavigationMenu
);

export const NavigationMenuList = withThemeComponent(
  ModernNavigationMenuList,
  RetroNavigationMenuList,
  BrutalistNavigationMenuList
);

export const NavigationMenuViewport = withThemeComponent(
  ModernNavigationMenuViewport,
  RetroNavigationMenuViewport,
  BrutalistNavigationMenuViewport
);

export const NavigationMenuItem = withThemeComponent(
  ModernNavigationMenuItem,
  RetroNavigationMenuItem,
  BrutalistNavigationMenuItem
);

export const NavigationMenuTrigger = withThemeComponent(
  ModernNavigationMenuTrigger,
  RetroNavigationMenuTrigger,
  BrutalistNavigationMenuTrigger
);

export const NavigationMenuContent = withThemeComponent(
  ModernNavigationMenuContent,
  RetroNavigationMenuContent,
  BrutalistNavigationMenuContent
);

export const NavigationMenuLink = withThemeComponent(
  ModernNavigationMenuLink,
  RetroNavigationMenuLink,
  BrutalistNavigationMenuLink
);

export const NavigationMenuIndicator = withThemeComponent(
  ModernNavigationMenuIndicator,
  RetroNavigationMenuIndicator,
  BrutalistNavigationMenuIndicator
);
