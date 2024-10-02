import { withThemeComponent } from "@/utils/themeComponent";
import {
  ScrollArea as ModernScrollArea,
  ScrollBar as ModernScrollBar,
} from "./Shadcn/scroll-area";
import {
  ScrollArea as RetroScrollArea,
  ScrollBar as RetroScrollBar,
} from "./Retro/scroll-area";
import {
  ScrollArea as TechScrollArea,
  ScrollBar as TechScrollBar,
} from "./Tech/scroll-area";

export const ScrollArea = withThemeComponent(
  ModernScrollArea,
  RetroScrollArea,
  TechScrollArea
);
export const ScrollBar = withThemeComponent(
  ModernScrollBar,
  RetroScrollBar,
  TechScrollBar
);
