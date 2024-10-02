import { withThemeComponent } from "@/utils/themeComponent";
import {
  Toast as ModernToast,
  ToastAction as ModernToastAction,
  ToastClose as ModernToastClose,
  ToastDescription as ModernToastDescription,
  ToastProvider as ModernToastProvider,
  ToastTitle as ModernToastTitle,
  ToastViewport as ModernToastViewport,
} from "./Shadcn/toast";
import {
  Toast as RetroToast,
  ToastAction as RetroToastAction,
  ToastClose as RetroToastClose,
  ToastDescription as RetroToastDescription,
  ToastProvider as RetroToastProvider,
  ToastTitle as RetroToastTitle,
  ToastViewport as RetroToastViewport,
} from "./Retro/toast";
import {
  Toast as TechToast,
  ToastAction as TechToastAction,
  ToastClose as TechToastClose,
  ToastDescription as TechToastDescription,
  ToastProvider as TechToastProvider,
  ToastTitle as TechToastTitle,
  ToastViewport as TechToastViewport,
} from "./Tech/toast";

export const Toast = withThemeComponent(ModernToast, RetroToast, TechToast);
export const ToastAction = withThemeComponent(
  ModernToastAction,
  RetroToastAction,
  TechToastAction
);
export const ToastClose = withThemeComponent(
  ModernToastClose,
  RetroToastClose,
  TechToastClose
);
export const ToastDescription = withThemeComponent(
  ModernToastDescription,
  RetroToastDescription,
  TechToastDescription
);
export const ToastProvider = withThemeComponent(
  ModernToastProvider,
  RetroToastProvider,
  TechToastProvider
);
export const ToastTitle = withThemeComponent(
  ModernToastTitle,
  RetroToastTitle,
  TechToastTitle
);
export const ToastViewport = withThemeComponent(
  ModernToastViewport,
  RetroToastViewport,
  TechToastViewport
);
