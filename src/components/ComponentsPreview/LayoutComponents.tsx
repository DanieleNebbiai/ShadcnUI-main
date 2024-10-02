import { ComponentPreview } from "../ComponentPreview";
import {
  AccordionComponent,
  CollapsibleComponent,
  TabsComponent,
} from "../ComponentShowcase";
import { useTheme } from "@/context/ThemeContext";

export function LayoutComponents() {
  const { theme } = useTheme();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-left">Layout Components</h1>

      <ComponentPreview
        componentName="Accordion"
        PreviewComponent={AccordionComponent}
        theme={theme}
      />
      <ComponentPreview
        componentName="Collapsible"
        PreviewComponent={CollapsibleComponent}
        theme={theme}
      />
      <ComponentPreview
        componentName="Tabs"
        PreviewComponent={TabsComponent}
        theme={theme}
      />
    </div>
  );
}
