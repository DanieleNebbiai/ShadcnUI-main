import { withThemeComponent } from "@/utils/themeComponent";
import { Label as ModernLabel } from "./Shadcn/label";
import { Label as RetroLabel } from "./Retro/label-retro";
import { Label as TechLabel } from "./Tech/label-tech";

export const Label = withThemeComponent(ModernLabel, RetroLabel, TechLabel);
