import { withThemeComponent } from "@/utils/themeComponent";
import {
  AlertDialog as ModernAlertDialog,
  AlertDialogAction as ModernAlertDialogAction,
  AlertDialogCancel as ModernAlertDialogCancel,
  AlertDialogContent as ModernAlertDialogContent,
  AlertDialogDescription as ModernAlertDialogDescription,
  AlertDialogFooter as ModernAlertDialogFooter,
  AlertDialogHeader as ModernAlertDialogHeader,
  AlertDialogTitle as ModernAlertDialogTitle,
  AlertDialogTrigger as ModernAlertDialogTrigger,
} from "./Shadcn/alert-dialog";
import {
  AlertDialog as RetroAlertDialog,
  AlertDialogAction as RetroAlertDialogAction,
  AlertDialogCancel as RetroAlertDialogCancel,
  AlertDialogContent as RetroAlertDialogContent,
  AlertDialogDescription as RetroAlertDialogDescription,
  AlertDialogFooter as RetroAlertDialogFooter,
  AlertDialogHeader as RetroAlertDialogHeader,
  AlertDialogTitle as RetroAlertDialogTitle,
  AlertDialogTrigger as RetroAlertDialogTrigger,
} from "./Retro/alert-dialog";
import {
  AlertDialog as BrutalistAlertDialog,
  AlertDialogAction as BrutalistAlertDialogAction,
  AlertDialogCancel as BrutalistAlertDialogCancel,
  AlertDialogContent as BrutalistAlertDialogContent,
  AlertDialogDescription as BrutalistAlertDialogDescription,
  AlertDialogFooter as BrutalistAlertDialogFooter,
  AlertDialogHeader as BrutalistAlertDialogHeader,
  AlertDialogTitle as BrutalistAlertDialogTitle,
  AlertDialogTrigger as BrutalistAlertDialogTrigger,
} from "./Brutalist/alert-dialog";

export const AlertDialog = withThemeComponent(
  ModernAlertDialog,
  RetroAlertDialog,
  BrutalistAlertDialog
);
export const AlertDialogAction = withThemeComponent(
  ModernAlertDialogAction,
  RetroAlertDialogAction,
  BrutalistAlertDialogAction
);
export const AlertDialogCancel = withThemeComponent(
  ModernAlertDialogCancel,
  RetroAlertDialogCancel,
  BrutalistAlertDialogCancel
);
export const AlertDialogContent = withThemeComponent(
  ModernAlertDialogContent,
  RetroAlertDialogContent,
  BrutalistAlertDialogContent
);
export const AlertDialogDescription = withThemeComponent(
  ModernAlertDialogDescription,
  RetroAlertDialogDescription,
  BrutalistAlertDialogDescription
);
export const AlertDialogFooter = withThemeComponent(
  ModernAlertDialogFooter,
  RetroAlertDialogFooter,
  BrutalistAlertDialogFooter
);
export const AlertDialogHeader = withThemeComponent(
  ModernAlertDialogHeader,
  RetroAlertDialogHeader,
  BrutalistAlertDialogHeader
);
export const AlertDialogTitle = withThemeComponent(
  ModernAlertDialogTitle,
  RetroAlertDialogTitle,
  BrutalistAlertDialogTitle
);
export const AlertDialogTrigger = withThemeComponent(
  ModernAlertDialogTrigger,
  RetroAlertDialogTrigger,
  BrutalistAlertDialogTrigger
);
