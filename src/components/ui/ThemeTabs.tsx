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
} from "./Retro/tabs";
import {
  Tabs as BrutalistTabs,
  TabsList as BrutalistTabsList,
  TabsTrigger as BrutalistTabsTrigger,
  TabsContent as BrutalistTabsContent,
} from "./Brutalist/tabs";

export const Tabs = withThemeComponent(ModernTabs, RetroTabs, BrutalistTabs);
export const TabsList = withThemeComponent(
  ModernTabsList,
  RetroTabsList,
  BrutalistTabsList
);
export const TabsTrigger = withThemeComponent(
  ModernTabsTrigger,
  RetroTabsTrigger,
  BrutalistTabsTrigger
);
export const TabsContent = withThemeComponent(
  ModernTabsContent,
  RetroTabsContent,
  BrutalistTabsContent
);
