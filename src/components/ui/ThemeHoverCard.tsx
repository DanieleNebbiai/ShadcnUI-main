import { withThemeComponent } from "@/utils/themeComponent";
import { HoverCard as ModernHoverCard } from "./Shadcn/hover-card";
import { HoverCard as RetroHoverCard } from "./Retro/hover-card";
import { HoverCard as BrutalistHoverCard } from "./Brutalist/hover-card";

export const HoverCard = withThemeComponent(
  ModernHoverCard,
  RetroHoverCard,
  BrutalistHoverCard
);
