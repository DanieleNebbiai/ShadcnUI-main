import { withThemeComponent } from "@/utils/themeComponent";
import { Textarea as ModernTextarea } from "./Shadcn/textarea";
import { Textarea as RetroTextarea } from "./Retro/textarea-retro";
import { Textarea as TechTextarea } from "./Tech/textarea-tech";

export const Textarea = withThemeComponent(
  ModernTextarea,
  RetroTextarea,
  TechTextarea
);
