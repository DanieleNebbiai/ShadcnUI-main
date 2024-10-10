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
  Collapsible as BrutalistCollapsible,
  CollapsibleContent as BrutalistCollapsibleContent,
  CollapsibleTrigger as BrutalistCollapsibleTrigger,
} from "./Brutalist/collapsible";

export const Collapsible = withThemeComponent(
  ModernCollapsible,
  RetroCollapsible,
  BrutalistCollapsible
);
export const CollapsibleContent = withThemeComponent(
  ModernCollapsibleContent,
  RetroCollapsibleContent,
  BrutalistCollapsibleContent
);
export const CollapsibleTrigger = withThemeComponent(
  ModernCollapsibleTrigger,
  RetroCollapsibleTrigger,
  BrutalistCollapsibleTrigger
);
