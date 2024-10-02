import { withThemeComponent } from "@/utils/themeComponent";
import { Calendar as ModernCalendar } from "./Shadcn/calendar";
import { Calendar as RetroCalendar } from "./Retro/calendar-retro";
import { Calendar as TechCalendar } from "./Tech/calendar-tech";

export const Calendar = withThemeComponent(
  ModernCalendar,
  RetroCalendar,
  TechCalendar
);
