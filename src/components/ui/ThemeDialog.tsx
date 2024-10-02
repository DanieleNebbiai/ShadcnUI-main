import { withThemeComponent } from "@/utils/themeComponent";
import {
  Dialog as ModernDialog,
  DialogContent as ModernDialogContent,
  DialogDescription as ModernDialogDescription,
  DialogFooter as ModernDialogFooter,
  DialogHeader as ModernDialogHeader,
  DialogTitle as ModernDialogTitle,
  DialogTrigger as ModernDialogTrigger,
} from "./Shadcn/dialog";
import {
  Dialog as RetroDialog,
  DialogContent as RetroDialogContent,
  DialogDescription as RetroDialogDescription,
  DialogFooter as RetroDialogFooter,
  DialogHeader as RetroDialogHeader,
  DialogTitle as RetroDialogTitle,
  DialogTrigger as RetroDialogTrigger,
} from "./Retro/dialog";
import {
  Dialog as TechDialog,
  DialogContent as TechDialogContent,
  DialogDescription as TechDialogDescription,
  DialogFooter as TechDialogFooter,
  DialogHeader as TechDialogHeader,
  DialogTitle as TechDialogTitle,
  DialogTrigger as TechDialogTrigger,
} from "./Tech/dialog";

export const Dialog = withThemeComponent(ModernDialog, RetroDialog, TechDialog);
export const DialogContent = withThemeComponent(
  ModernDialogContent,
  RetroDialogContent,
  TechDialogContent
);
export const DialogDescription = withThemeComponent(
  ModernDialogDescription,
  RetroDialogDescription,
  TechDialogDescription
);
export const DialogFooter = withThemeComponent(
  ModernDialogFooter,
  RetroDialogFooter,
  TechDialogFooter
);
export const DialogHeader = withThemeComponent(
  ModernDialogHeader,
  RetroDialogHeader,
  TechDialogHeader
);
export const DialogTitle = withThemeComponent(
  ModernDialogTitle,
  RetroDialogTitle,
  TechDialogTitle
);
export const DialogTrigger = withThemeComponent(
  ModernDialogTrigger,
  RetroDialogTrigger,
  TechDialogTrigger
);
