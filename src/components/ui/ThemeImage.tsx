import { withThemeComponent } from "@/utils/themeComponent";
import { Image as ModernImage } from "./Shadcn/image";
import { Image as RetroImage } from "./Retro/image-retro";
import { Image as TechImage } from "./Tech/image-tech";

export const Image = withThemeComponent(ModernImage, RetroImage, TechImage);
