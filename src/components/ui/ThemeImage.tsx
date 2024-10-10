import { withThemeComponent } from "@/utils/themeComponent";
import { Image as ModernImage } from "./Shadcn/image";
import { Image as RetroImage } from "./Retro/image";
import { Image as BrutalistImage } from "./Brutalist/image";

export const Image = withThemeComponent(
  ModernImage,
  RetroImage,
  BrutalistImage
);
