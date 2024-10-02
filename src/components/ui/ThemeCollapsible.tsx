import { withThemeComponent } from "@/utils/themeComponent";
import {
  Collapsible as ModernCollapsible,
  CollapsibleContent as ModernCollapsibleContent,
  CollapsibleTrigger as ModernCollapsibleTrigger,
} from "./Shadcn/collapsible";
import {
  Collapsible as RetroCollapsible,
  CollapsibleContent as RetroCollapsibleContent,
  CollapsibleTrigger as RetroCollapsibleTrigger,
} from "./Retro/collapsible";
import {
  Collapsible as TechCollapsible,
  CollapsibleContent as TechCollapsibleContent,
  CollapsibleTrigger as TechCollapsibleTrigger,
} from "./Tech/collapsible";

export const Collapsible = withThemeComponent(
  ModernCollapsible,
  RetroCollapsible,
  TechCollapsible
);
export const CollapsibleContent = withThemeComponent(
  ModernCollapsibleContent,
  RetroCollapsibleContent,
  TechCollapsibleContent
);
export const CollapsibleTrigger = withThemeComponent(
  ModernCollapsibleTrigger,
  RetroCollapsibleTrigger,
  TechCollapsibleTrigger
);
