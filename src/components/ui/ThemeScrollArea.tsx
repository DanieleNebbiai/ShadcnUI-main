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
  ScrollArea as BrutalistScrollArea,
  ScrollBar as BrutalistScrollBar,
} from "./Brutalist/scroll-area";

export const ScrollArea = withThemeComponent(
  ModernScrollArea,
  RetroScrollArea,
  BrutalistScrollArea
);
export const ScrollBar = withThemeComponent(
  ModernScrollBar,
  RetroScrollBar,
  BrutalistScrollBar
);
