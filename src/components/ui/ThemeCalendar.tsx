import { withThemeComponent } from "@/utils/themeComponent";
import { Calendar as ModernCalendar } from "./Shadcn/calendar";
import { Calendar as RetroCalendar } from "./Retro/calendar";
import { Calendar as BrutalistCalendar } from "./Brutalist/calendar";

export const Calendar = withThemeComponent(
  ModernCalendar,
  RetroCalendar,
  BrutalistCalendar
);
