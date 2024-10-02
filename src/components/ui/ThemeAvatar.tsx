import { withThemeComponent } from "@/utils/themeComponent";
import { Avatar as ModernAvatar } from "./Shadcn/avatar";
import { AvatarImage as ModernAvatarImage } from "./Shadcn/avatar";
import { AvatarFallback as ModernAvatarFallback } from "./Shadcn/avatar";
import { Avatar as RetroAvatar } from "./Retro/avatar-retro";
import { AvatarImage as RetroAvatarImage } from "./Retro/avatar-retro";
import { AvatarFallback as RetroAvatarFallback } from "./Retro/avatar-retro";
import { Avatar as TechAvatar } from "./Tech/avatar-tech";
import { AvatarImage as TechAvatarImage } from "./Tech/avatar-tech";
import { AvatarFallback as TechAvatarFallback } from "./Tech/avatar-tech";

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
