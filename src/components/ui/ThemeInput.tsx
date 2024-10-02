import { withThemeComponent } from "@/utils/themeComponent";
import { Input as ModernInput } from "./Shadcn/input";
import { Input as RetroInput } from "./Retro/input-retro";
import { Input as TechInput } from "./Tech/input-tech";

export const Input = withThemeComponent(ModernInput, RetroInput, TechInput);
