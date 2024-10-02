import { withThemeComponent } from "@/utils/themeComponent";
import { Toggle as ModernToggle } from "./Shadcn/toggle";
import { Toggle as RetroToggle } from "./Retro/toggle";
import { Toggle as TechToggle } from "./Tech/toggle";

export const Toggle = withThemeComponent(ModernToggle, RetroToggle, TechToggle);
