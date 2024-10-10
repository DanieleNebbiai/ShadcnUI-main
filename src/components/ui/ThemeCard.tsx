import { withThemeComponent } from "@/utils/themeComponent";
import {
  Card as ModernCard,
  CardHeader as ModernCardHeader,
  CardFooter as ModernCardFooter,
  CardTitle as ModernCardTitle,
  CardDescription as ModernCardDescription,
  CardContent as ModernCardContent,
} from "./Shadcn/card";
import {
  Card as RetroCard,
  CardHeader as RetroCardHeader,
  CardFooter as RetroCardFooter,
  CardTitle as RetroCardTitle,
  CardDescription as RetroCardDescription,
  CardContent as RetroCardContent,
} from "./Retro/card";
import {
  Card as BrutalistCard,
  CardHeader as BrutalistCardHeader,
  CardFooter as BrutalistCardFooter,
  CardTitle as BrutalistCardTitle,
  CardDescription as BrutalistCardDescription,
  CardContent as BrutalistCardContent,
} from "./Brutalist/card";

export const Card = withThemeComponent(ModernCard, RetroCard, BrutalistCard);

export const CardHeader = withThemeComponent(
  ModernCardHeader,
  RetroCardHeader,
  BrutalistCardHeader
);

export const CardFooter = withThemeComponent(
  ModernCardFooter,
  RetroCardFooter,
  BrutalistCardFooter
);

export const CardTitle = withThemeComponent(
  ModernCardTitle,
  RetroCardTitle,
  BrutalistCardTitle
);

export const CardDescription = withThemeComponent(
  ModernCardDescription,
  RetroCardDescription,
  BrutalistCardDescription
);

export const CardContent = withThemeComponent(
  ModernCardContent,
  RetroCardContent,
  BrutalistCardContent
);
