import { withThemeComponent } from "@/utils/themeComponent";
import { Switch as ModernSwitch } from "./Shadcn/switch";
import { Switch as RetroSwitch } from "./Retro/switch-retro";
import { Switch as TechSwitch } from "./Tech/switch-tech";

export const Switch = withThemeComponent(ModernSwitch, RetroSwitch, TechSwitch);
