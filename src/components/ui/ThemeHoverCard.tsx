import { withThemeComponent } from "@/utils/themeComponent";
import { HoverCard as ModernHoverCard } from "./Shadcn/hover-card";
import { HoverCard as RetroHoverCard } from "./Retro/hover-card-retro";
import { HoverCard as TechHoverCard } from "./Tech/hover-card-tech";

export const HoverCard = withThemeComponent(
  ModernHoverCard,
  RetroHoverCard,
  TechHoverCard
);
