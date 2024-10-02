import { withThemeComponent } from "@/utils/themeComponent";
import { Badge as ModernBadge } from "./Shadcn/badge";
import { Badge as RetroBadge } from "./Retro/badge-retro";
import { Badge as TechBadge } from "./Tech/badge-tech";

export const Badge = withThemeComponent(ModernBadge, RetroBadge, TechBadge);
