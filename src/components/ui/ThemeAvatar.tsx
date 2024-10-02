import { withThemeComponent } from "@/utils/themeComponent";
import { Avatar as ModernAvatar } from "./Shadcn/avatar";
import { AvatarImage as ModernAvatarImage } from "./Shadcn/avatar";
import { AvatarFallback as ModernAvatarFallback } from "./Shadcn/avatar";
import { Avatar as RetroAvatar } from "./Retro/avatar";
import { AvatarImage as RetroAvatarImage } from "./Retro/avatar";
import { AvatarFallback as RetroAvatarFallback } from "./Retro/avatar";
import { Avatar as TechAvatar } from "./Tech/avatar";
import { AvatarImage as TechAvatarImage } from "./Tech/avatar";
import { AvatarFallback as TechAvatarFallback } from "./Tech/avatar";

export const Avatar = withThemeComponent(ModernAvatar, RetroAvatar, TechAvatar);
export const AvatarImage = withThemeComponent(
  ModernAvatarImage,
  RetroAvatarImage,
  TechAvatarImage
);
export const AvatarFallback = withThemeComponent(
  ModernAvatarFallback,
  RetroAvatarFallback,
  TechAvatarFallback
);
