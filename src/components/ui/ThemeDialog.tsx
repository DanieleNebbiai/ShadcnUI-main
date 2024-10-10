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
  Dialog as BrutalistDialog,
  DialogContent as BrutalistDialogContent,
  DialogDescription as BrutalistDialogDescription,
  DialogFooter as BrutalistDialogFooter,
  DialogHeader as BrutalistDialogHeader,
  DialogTitle as BrutalistDialogTitle,
  DialogTrigger as BrutalistDialogTrigger,
} from "./Brutalist/dialog";

export const Dialog = withThemeComponent(
  ModernDialog,
  RetroDialog,
  BrutalistDialog
);
export const DialogContent = withThemeComponent(
  ModernDialogContent,
  RetroDialogContent,
  BrutalistDialogContent
);
export const DialogDescription = withThemeComponent(
  ModernDialogDescription,
  RetroDialogDescription,
  BrutalistDialogDescription
);
export const DialogFooter = withThemeComponent(
  ModernDialogFooter,
  RetroDialogFooter,
  BrutalistDialogFooter
);
export const DialogHeader = withThemeComponent(
  ModernDialogHeader,
  RetroDialogHeader,
  BrutalistDialogHeader
);
export const DialogTitle = withThemeComponent(
  ModernDialogTitle,
  RetroDialogTitle,
  BrutalistDialogTitle
);
export const DialogTrigger = withThemeComponent(
  ModernDialogTrigger,
  RetroDialogTrigger,
  BrutalistDialogTrigger
);
