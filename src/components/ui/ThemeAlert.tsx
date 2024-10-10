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
  Alert as BrutalistAlert,
  AlertTitle as BrutalistAlertTitle,
  AlertDescription as BrutalistAlertDescription,
} from "./Brutalist/alert";

export const Alert = withThemeComponent(
  ModernAlert,
  RetroAlert,
  BrutalistAlert
);

export const AlertTitle = withThemeComponent(
  ModernAlertTitle,
  RetroAlertTitle,
  BrutalistAlertTitle
);

export const AlertDescription = withThemeComponent(
  ModernAlertDescription,
  RetroAlertDescription,
  BrutalistAlertDescription
);
