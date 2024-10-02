import { withThemeComponent } from "@/utils/themeComponent";
import { HoverCard as ModernHoverCard } from "./Shadcn/hover-card";
import { HoverCard as RetroHoverCard } from "./Retro/hover-card";
import { HoverCard as TechHoverCard } from "./Tech/hover-card";

export const HoverCard = withThemeComponent(
  ModernHoverCard,
  RetroHoverCard,
  TechHoverCard
);
