import { withThemeComponent } from "@/utils/themeComponent";
import { Button as ModernButton } from "./Shadcn/button";
import { Button as RetroButton } from "./Retro/button-retro";
import { Button as TechButton } from "./Tech/button-tech";

export const Button = withThemeComponent(ModernButton, RetroButton, TechButton);
