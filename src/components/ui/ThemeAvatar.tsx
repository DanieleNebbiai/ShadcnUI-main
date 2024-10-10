import { withThemeComponent } from "@/utils/themeComponent";
import { Avatar as ModernAvatar } from "./Shadcn/avatar";
import { AvatarImage as ModernAvatarImage } from "./Shadcn/avatar";
import { AvatarFallback as ModernAvatarFallback } from "./Shadcn/avatar";
import { Avatar as RetroAvatar } from "./Retro/avatar";
import { AvatarImage as RetroAvatarImage } from "./Retro/avatar";
import { AvatarFallback as RetroAvatarFallback } from "./Retro/avatar";
import { Avatar as BrutalistAvatar } from "./Brutalist/avatar";
import { AvatarImage as BrutalistAvatarImage } from "./Brutalist/avatar";
import { AvatarFallback as BrutalistAvatarFallback } from "./Brutalist/avatar";

export const Avatar = withThemeComponent(
  ModernAvatar,
  RetroAvatar,
  BrutalistAvatar
);
export const AvatarImage = withThemeComponent(
  ModernAvatarImage,
  RetroAvatarImage,
  BrutalistAvatarImage
);
export const AvatarFallback = withThemeComponent(
  ModernAvatarFallback,
  RetroAvatarFallback,
  BrutalistAvatarFallback
);
