import { withThemeComponent } from "@/utils/themeComponent";
import { Input as ModernInput } from "./Shadcn/input";
import { Input as RetroInput } from "./Retro/input";
import { Input as BrutalistInput } from "./Brutalist/input";

export const Input = withThemeComponent(
  ModernInput,
  RetroInput,
  BrutalistInput
);
