import { ComponentPreview } from "../ComponentPreview";
import {
  AvatarComponent,
  BadgeComponent,
  TableComponent,
  ScrollAreaComponent,
  SeparatorComponent,
} from "../ComponentShowcase";
import { useTheme } from "@/context/ThemeContext";

export function DataDisplayComponents() {
  const { theme } = useTheme();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-left">
        Data Display Components
      </h1>

      <ComponentPreview
        componentName="Avatar"
        PreviewComponent={AvatarComponent}
        theme={theme}
      />
      <ComponentPreview
        componentName="Badge"
        PreviewComponent={BadgeComponent}
        theme={theme}
      />
      <ComponentPreview
        componentName="Table"
        PreviewComponent={TableComponent}
        theme={theme}
      />
      <ComponentPreview
        componentName="ScrollArea"
        PreviewComponent={ScrollAreaComponent}
        theme={theme}
      />
      <ComponentPreview
        componentName="Separator"
        PreviewComponent={SeparatorComponent}
        theme={theme}
      />
    </div>
  );
}
