import { withThemeComponent } from "@/utils/themeComponent";
import {
  Table as ModernTable,
  TableHeader as ModernTableHeader,
  TableBody as ModernTableBody,
  TableFooter as ModernTableFooter,
  TableHead as ModernTableHead,
  TableRow as ModernTableRow,
  TableCell as ModernTableCell,
  TableCaption as ModernTableCaption,
} from "./Shadcn/table";
import {
  Table as RetroTable,
  TableHeader as RetroTableHeader,
  TableBody as RetroTableBody,
  TableFooter as RetroTableFooter,
  TableHead as RetroTableHead,
  TableRow as RetroTableRow,
  TableCell as RetroTableCell,
  TableCaption as RetroTableCaption,
} from "./Retro/table";
import {
  Table as TechTable,
  TableHeader as TechTableHeader,
  TableBody as TechTableBody,
  TableFooter as TechTableFooter,
  TableHead as TechTableHead,
  TableRow as TechTableRow,
  TableCell as TechTableCell,
  TableCaption as TechTableCaption,
} from "./Tech/table";

export const Table = withThemeComponent(ModernTable, RetroTable, TechTable);
export const TableHeader = withThemeComponent(
  ModernTableHeader,
  RetroTableHeader,
  TechTableHeader
);
export const TableBody = withThemeComponent(
  ModernTableBody,
  RetroTableBody,
  TechTableBody
);
export const TableFooter = withThemeComponent(
  ModernTableFooter,
  RetroTableFooter,
  TechTableFooter
);
export const TableHead = withThemeComponent(
  ModernTableHead,
  RetroTableHead,
  TechTableHead
);
export const TableRow = withThemeComponent(
  ModernTableRow,
  RetroTableRow,
  TechTableRow
);
export const TableCell = withThemeComponent(
  ModernTableCell,
  RetroTableCell,
  TechTableCell
);
export const TableCaption = withThemeComponent(
  ModernTableCaption,
  RetroTableCaption,
  TechTableCaption
);
