import { withThemeComponent } from "@/utils/themeComponent";
import {
  Command as ModernCommand,
  CommandEmpty as ModernCommandEmpty,
  CommandGroup as ModernCommandGroup,
  CommandInput as ModernCommandInput,
  CommandItem as ModernCommandItem,
  CommandList as ModernCommandList,
} from "./Shadcn/command";
import {
  Command as RetroCommand,
  CommandEmpty as RetroCommandEmpty,
  CommandGroup as RetroCommandGroup,
  CommandInput as RetroCommandInput,
  CommandItem as RetroCommandItem,
  CommandList as RetroCommandList,
} from "./Retro/command-retro";
import {
  Command as TechCommand,
  CommandEmpty as TechCommandEmpty,
  CommandGroup as TechCommandGroup,
  CommandInput as TechCommandInput,
  CommandItem as TechCommandItem,
  CommandList as TechCommandList,
} from "./Tech/command-tech";

export const Command = withThemeComponent(
  ModernCommand,
  RetroCommand,
  TechCommand
);
export const CommandEmpty = withThemeComponent(
  ModernCommandEmpty,
  RetroCommandEmpty,
  TechCommandEmpty
);
export const CommandGroup = withThemeComponent(
  ModernCommandGroup,
  RetroCommandGroup,
  TechCommandGroup
);
export const CommandInput = withThemeComponent(
  ModernCommandInput,
  RetroCommandInput,
  TechCommandInput
);
export const CommandItem = withThemeComponent(
  ModernCommandItem,
  RetroCommandItem,
  TechCommandItem
);
export const CommandList = withThemeComponent(
  ModernCommandList,
  RetroCommandList,
  TechCommandList
);
