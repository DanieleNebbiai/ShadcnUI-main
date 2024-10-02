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
} from "./Retro/alert-dialog-retro";
import {
  AlertDialog as TechAlertDialog,
  AlertDialogAction as TechAlertDialogAction,
  AlertDialogCancel as TechAlertDialogCancel,
  AlertDialogContent as TechAlertDialogContent,
  AlertDialogDescription as TechAlertDialogDescription,
  AlertDialogFooter as TechAlertDialogFooter,
  AlertDialogHeader as TechAlertDialogHeader,
  AlertDialogTitle as TechAlertDialogTitle,
  AlertDialogTrigger as TechAlertDialogTrigger,
} from "./Tech/alert-dialog-tech";

export const AlertDialog = withThemeComponent(
  ModernAlertDialog,
  RetroAlertDialog,
  TechAlertDialog
);
export const AlertDialogAction = withThemeComponent(
  ModernAlertDialogAction,
  RetroAlertDialogAction,
  TechAlertDialogAction
);
export const AlertDialogCancel = withThemeComponent(
  ModernAlertDialogCancel,
  RetroAlertDialogCancel,
  TechAlertDialogCancel
);
export const AlertDialogContent = withThemeComponent(
  ModernAlertDialogContent,
  RetroAlertDialogContent,
  TechAlertDialogContent
);
export const AlertDialogDescription = withThemeComponent(
  ModernAlertDialogDescription,
  RetroAlertDialogDescription,
  TechAlertDialogDescription
);
export const AlertDialogFooter = withThemeComponent(
  ModernAlertDialogFooter,
  RetroAlertDialogFooter,
  TechAlertDialogFooter
);
export const AlertDialogHeader = withThemeComponent(
  ModernAlertDialogHeader,
  RetroAlertDialogHeader,
  TechAlertDialogHeader
);
export const AlertDialogTitle = withThemeComponent(
  ModernAlertDialogTitle,
  RetroAlertDialogTitle,
  TechAlertDialogTitle
);
export const AlertDialogTrigger = withThemeComponent(
  ModernAlertDialogTrigger,
  RetroAlertDialogTrigger,
  TechAlertDialogTrigger
);
