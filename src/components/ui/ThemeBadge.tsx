import { withThemeComponent } from "@/utils/themeComponent";
import { Badge as ModernBadge } from "./Shadcn/badge";
import { Badge as RetroBadge } from "./Retro/badge";
import { Badge as BrutalistBadge } from "./Brutalist/badge";

export const Badge = withThemeComponent(
  ModernBadge,
  RetroBadge,
  BrutalistBadge
);
