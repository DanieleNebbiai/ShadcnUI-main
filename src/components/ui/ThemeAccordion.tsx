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
  Accordion as TechAccordion,
  AccordionItem as TechAccordionItem,
  AccordionTrigger as TechAccordionTrigger,
  AccordionContent as TechAccordionContent,
} from "./Tech/accordion";

export const Accordion = withThemeComponent(
  ModernAccordion,
  RetroAccordion,
  TechAccordion
);

export const AccordionItem = withThemeComponent(
  ModernAccordionItem,
  RetroAccordionItem,
  TechAccordionItem
);

export const AccordionTrigger = withThemeComponent(
  ModernAccordionTrigger,
  RetroAccordionTrigger,
  TechAccordionTrigger
);

export const AccordionContent = withThemeComponent(
  ModernAccordionContent,
  RetroAccordionContent,
  TechAccordionContent
);
