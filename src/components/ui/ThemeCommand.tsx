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
} from "./Retro/command";
import {
  Command as BrutalistCommand,
  CommandEmpty as BrutalistCommandEmpty,
  CommandGroup as BrutalistCommandGroup,
  CommandInput as BrutalistCommandInput,
  CommandItem as BrutalistCommandItem,
  CommandList as BrutalistCommandList,
} from "./Brutalist/command";

export const Command = withThemeComponent(
  ModernCommand,
  RetroCommand,
  BrutalistCommand
);
export const CommandEmpty = withThemeComponent(
  ModernCommandEmpty,
  RetroCommandEmpty,
  BrutalistCommandEmpty
);
export const CommandGroup = withThemeComponent(
  ModernCommandGroup,
  RetroCommandGroup,
  BrutalistCommandGroup
);
export const CommandInput = withThemeComponent(
  ModernCommandInput,
  RetroCommandInput,
  BrutalistCommandInput
);
export const CommandItem = withThemeComponent(
  ModernCommandItem,
  RetroCommandItem,
  BrutalistCommandItem
);
export const CommandList = withThemeComponent(
  ModernCommandList,
  RetroCommandList,
  BrutalistCommandList
);
