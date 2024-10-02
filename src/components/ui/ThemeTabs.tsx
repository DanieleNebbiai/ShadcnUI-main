import { withThemeComponent } from "@/utils/themeComponent";
import {
  Tabs as ModernTabs,
  TabsList as ModernTabsList,
  TabsTrigger as ModernTabsTrigger,
  TabsContent as ModernTabsContent,
} from "./Shadcn/tabs";
import {
  Tabs as RetroTabs,
  TabsList as RetroTabsList,
  TabsTrigger as RetroTabsTrigger,
  TabsContent as RetroTabsContent,
} from "./Retro/tabs-retro";
import {
  Tabs as TechTabs,
  TabsList as TechTabsList,
  TabsTrigger as TechTabsTrigger,
  TabsContent as TechTabsContent,
} from "./Tech/tabs-tech";

export const Tabs = withThemeComponent(ModernTabs, RetroTabs, TechTabs);
export const TabsList = withThemeComponent(
  ModernTabsList,
  RetroTabsList,
  TechTabsList
);
export const TabsTrigger = withThemeComponent(
  ModernTabsTrigger,
  RetroTabsTrigger,
  TechTabsTrigger
);
export const TabsContent = withThemeComponent(
  ModernTabsContent,
  RetroTabsContent,
  TechTabsContent
);
