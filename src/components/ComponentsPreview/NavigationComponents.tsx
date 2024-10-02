import { ComponentPreview } from "../ComponentPreview";
import {
  NavigationMenuComponent,
  CommandComponent,
  ContextMenuComponent,
} from "../ComponentShowcase";
import { useTheme } from "@/context/ThemeContext";

export function NavigationComponents() {
  const { theme } = useTheme();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-left">
        Navigation Components
      </h1>

      <ComponentPreview
        componentName="NavigationMenu"
        PreviewComponent={NavigationMenuComponent}
        theme={theme}
      />
      <ComponentPreview
        componentName="Command"
        PreviewComponent={CommandComponent}
        theme={theme}
      />
      <ComponentPreview
        componentName="ContextMenu"
        PreviewComponent={ContextMenuComponent}
        theme={theme}
      />
    </div>
  );
}
