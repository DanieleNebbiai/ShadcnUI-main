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
  Toast as BrutalistToast,
  ToastAction as BrutalistToastAction,
  ToastClose as BrutalistToastClose,
  ToastDescription as BrutalistToastDescription,
  ToastProvider as BrutalistToastProvider,
  ToastTitle as BrutalistToastTitle,
  ToastViewport as BrutalistToastViewport,
} from "./Brutalist/toast";

export const Toast = withThemeComponent(
  ModernToast,
  RetroToast,
  BrutalistToast
);
export const ToastAction = withThemeComponent(
  ModernToastAction,
  RetroToastAction,
  BrutalistToastAction
);
export const ToastClose = withThemeComponent(
  ModernToastClose,
  RetroToastClose,
  BrutalistToastClose
);
export const ToastDescription = withThemeComponent(
  ModernToastDescription,
  RetroToastDescription,
  BrutalistToastDescription
);
export const ToastProvider = withThemeComponent(
  ModernToastProvider,
  RetroToastProvider,
  BrutalistToastProvider
);
export const ToastTitle = withThemeComponent(
  ModernToastTitle,
  RetroToastTitle,
  BrutalistToastTitle
);
export const ToastViewport = withThemeComponent(
  ModernToastViewport,
  RetroToastViewport,
  BrutalistToastViewport
);
