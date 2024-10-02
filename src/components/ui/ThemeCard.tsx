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
  Card as TechCard,
  CardHeader as TechCardHeader,
  CardFooter as TechCardFooter,
  CardTitle as TechCardTitle,
  CardDescription as TechCardDescription,
  CardContent as TechCardContent,
} from "./Tech/card";

export const Card = withThemeComponent(ModernCard, RetroCard, TechCard);

export const CardHeader = withThemeComponent(
  ModernCardHeader,
  RetroCardHeader,
  TechCardHeader
);

export const CardFooter = withThemeComponent(
  ModernCardFooter,
  RetroCardFooter,
  TechCardFooter
);

export const CardTitle = withThemeComponent(
  ModernCardTitle,
  RetroCardTitle,
  TechCardTitle
);

export const CardDescription = withThemeComponent(
  ModernCardDescription,
  RetroCardDescription,
  TechCardDescription
);

export const CardContent = withThemeComponent(
  ModernCardContent,
  RetroCardContent,
  TechCardContent
);
