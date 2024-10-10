import { withThemeComponent } from "@/utils/themeComponent";
import { Switch as ModernSwitch } from "./Shadcn/switch";
import { Switch as RetroSwitch } from "./Retro/switch";
import { Switch as BrutalistSwitch } from "./Brutalist/switch";

export const Switch = withThemeComponent(
  ModernSwitch,
  RetroSwitch,
  BrutalistSwitch
);
