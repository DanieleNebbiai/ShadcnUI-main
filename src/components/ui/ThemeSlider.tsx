import { withThemeComponent } from "@/utils/themeComponent";
import { Slider as ModernSlider } from "./Shadcn/slider";
import { Slider as RetroSlider } from "./Retro/slider";
import { Slider as BrutalistSlider } from "./Brutalist/slider";

export const Slider = withThemeComponent(
  ModernSlider,
  RetroSlider,
  BrutalistSlider
);
