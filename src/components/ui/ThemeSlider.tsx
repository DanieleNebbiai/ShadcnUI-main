import { withThemeComponent } from "@/utils/themeComponent";
import { Slider as ModernSlider } from "./Shadcn/slider";
import { Slider as RetroSlider } from "./Retro/slider-retro";
import { Slider as TechSlider } from "./Tech/slider-tech";

export const Slider = withThemeComponent(ModernSlider, RetroSlider, TechSlider);
