import React from "react";
import { useTheme } from "@/context/ThemeContext";
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
} from "./Retro/toast-retro";
import {
  Toast as TechToast,
  ToastAction as TechToastAction,
  ToastClose as TechToastClose,
  ToastDescription as TechToastDescription,
  ToastProvider as TechToastProvider,
  ToastTitle as TechToastTitle,
  ToastViewport as TechToastViewport,
} from "./Tech/toast-tech";

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

export const ToastProvider: React.FC<
  React.ComponentProps<typeof ModernToastProvider>
> = (props) => {
  const { theme } = useTheme();

  switch (theme) {
    case "modern":
      return <ModernToastProvider {...props} />;
    case "retro":
      return <RetroToastProvider {...props} />;
    default:
      return <ModernToastProvider {...props} />;
  }
};

export const ToastViewport: React.FC<
  React.ComponentProps<typeof ModernToastViewport>
> = (props) => {
  const { theme } = useTheme();

  switch (theme) {
    case "modern":
      return <ModernToastViewport {...props} />;
    case "retro":
      return <RetroToastViewport {...props} />;
    default:
      return <ModernToastViewport {...props} />;
  }
};

export const Toast: React.FC<ModernToastProps> = (props) => {
  const { theme } = useTheme();

  switch (theme) {
    case "modern":
      return <ModernToast {...props} />;
    case "retro":
      return <RetroToast {...props} />;
    default:
      return <ModernToast {...props} />;
  }
};

export const ToastTitle: React.FC<
  React.ComponentProps<typeof ModernToastTitle>
> = (props) => {
  const { theme } = useTheme();

  switch (theme) {
    case "modern":
      return <ModernToastTitle {...props} />;
    case "retro":
      return <RetroToastTitle {...props} />;
    default:
      return <ModernToastTitle {...props} />;
  }
};

export const ToastDescription: React.FC<
  React.ComponentProps<typeof ModernToastDescription>
> = (props) => {
  const { theme } = useTheme();

  switch (theme) {
    case "modern":
      return <ModernToastDescription {...props} />;
    case "retro":
      return <RetroToastDescription {...props} />;
    default:
      return <ModernToastDescription {...props} />;
  }
};

export const ToastClose: React.FC<
  React.ComponentProps<typeof ModernToastClose>
> = (props) => {
  const { theme } = useTheme();

  switch (theme) {
    case "modern":
      return <ModernToastClose {...props} />;
    case "retro":
      return <RetroToastClose {...props} />;
    default:
      return <ModernToastClose {...props} />;
  }
};

export const ToastAction: React.FC<
  React.ComponentProps<typeof ModernToastAction>
> = (props) => {
  const { theme } = useTheme();

  switch (theme) {
    case "modern":
      return <ModernToastAction {...props} />;
    case "retro":
      return <RetroToastAction {...props} />;
    default:
      return <ModernToastAction {...props} />;
  }
};

export type ToastProps = ModernToastProps;
export type ToastActionElement = ModernToastActionElement;
