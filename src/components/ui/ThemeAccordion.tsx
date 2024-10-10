import { withThemeComponent } from "@/utils/themeComponent";
import {
  Accordion as ModernAccordion,
  AccordionItem as ModernAccordionItem,
  AccordionTrigger as ModernAccordionTrigger,
  AccordionContent as ModernAccordionContent,
} from "./Shadcn/accordion";
import {
  Accordion as RetroAccordion,
  AccordionItem as RetroAccordionItem,
  AccordionTrigger as RetroAccordionTrigger,
  AccordionContent as RetroAccordionContent,
} from "./Retro/accordion";
import {
  Accordion as BrutalistAccordion,
  AccordionItem as BrutalistAccordionItem,
  AccordionTrigger as BrutalistAccordionTrigger,
  AccordionContent as BrutalistAccordionContent,
} from "./Brutalist/accordion";

export const Accordion = withThemeComponent(
  ModernAccordion,
  RetroAccordion,
  BrutalistAccordion
);

export const AccordionItem = withThemeComponent(
  ModernAccordionItem,
  RetroAccordionItem,
  BrutalistAccordionItem
);

export const AccordionTrigger = withThemeComponent(
  ModernAccordionTrigger,
  RetroAccordionTrigger,
  BrutalistAccordionTrigger
);

export const AccordionContent = withThemeComponent(
  ModernAccordionContent,
  RetroAccordionContent,
  BrutalistAccordionContent
);
