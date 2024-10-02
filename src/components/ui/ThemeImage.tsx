import { withThemeComponent } from "@/utils/themeComponent";
import { Image as ModernImage } from "./Shadcn/image";
import { Image as RetroImage } from "./Retro/image";
import { Image as TechImage } from "./Tech/image";

export const Image = withThemeComponent(ModernImage, RetroImage, TechImage);
