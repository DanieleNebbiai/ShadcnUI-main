import { withThemeComponent } from "@/utils/themeComponent";
import {
  Alert as ModernAlert,
  AlertTitle as ModernAlertTitle,
  AlertDescription as ModernAlertDescription,
} from "./Shadcn/alert";
import {
  Alert as RetroAlert,
  AlertTitle as RetroAlertTitle,
  AlertDescription as RetroAlertDescription,
} from "./Retro/alert";
import {
  Alert as TechAlert,
  AlertTitle as TechAlertTitle,
  AlertDescription as TechAlertDescription,
} from "./Tech/alert";

export const Alert = withThemeComponent(ModernAlert, RetroAlert, TechAlert);

export const AlertTitle = withThemeComponent(
  ModernAlertTitle,
  RetroAlertTitle,
  TechAlertTitle
);

export const AlertDescription = withThemeComponent(
  ModernAlertDescription,
  RetroAlertDescription,
  TechAlertDescription
);
