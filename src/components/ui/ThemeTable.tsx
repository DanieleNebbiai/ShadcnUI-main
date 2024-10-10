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
  Table as BrutalistTable,
  TableHeader as BrutalistTableHeader,
  TableBody as BrutalistTableBody,
  TableFooter as BrutalistTableFooter,
  TableHead as BrutalistTableHead,
  TableRow as BrutalistTableRow,
  TableCell as BrutalistTableCell,
  TableCaption as BrutalistTableCaption,
} from "./Brutalist/table";

export const Table = withThemeComponent(
  ModernTable,
  RetroTable,
  BrutalistTable
);
export const TableHeader = withThemeComponent(
  ModernTableHeader,
  RetroTableHeader,
  BrutalistTableHeader
);
export const TableBody = withThemeComponent(
  ModernTableBody,
  RetroTableBody,
  BrutalistTableBody
);
export const TableFooter = withThemeComponent(
  ModernTableFooter,
  RetroTableFooter,
  BrutalistTableFooter
);
export const TableHead = withThemeComponent(
  ModernTableHead,
  RetroTableHead,
  BrutalistTableHead
);
export const TableRow = withThemeComponent(
  ModernTableRow,
  RetroTableRow,
  BrutalistTableRow
);
export const TableCell = withThemeComponent(
  ModernTableCell,
  RetroTableCell,
  BrutalistTableCell
);
export const TableCaption = withThemeComponent(
  ModernTableCaption,
  RetroTableCaption,
  BrutalistTableCaption
);
