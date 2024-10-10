import { withThemeComponent } from "@/utils/themeComponent";
import { Textarea as ModernTextarea } from "./Shadcn/textarea";
import { Textarea as RetroTextarea } from "./Retro/textarea";
import { Textarea as BrutalistTextarea } from "./Brutalist/textarea";

export const Textarea = withThemeComponent(
  ModernTextarea,
  RetroTextarea,
  BrutalistTextarea
);
