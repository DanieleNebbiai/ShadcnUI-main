import { ComponentPreview } from "../ComponentPreview";
import {
  ButtonComponent,
  ToggleComponent,
  SwitchComponent,
  DropdownMenuComponent,
  MenubarComponent,
} from "../ComponentShowcase";
import { useTheme } from "@/context/ThemeContext";

export function ActionsComponents() {
  const { theme } = useTheme();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-left">Action Components</h1>

      <ComponentPreview
        componentName="Button"
        PreviewComponent={ButtonComponent}
        theme={theme}
      />
      <ComponentPreview
        componentName="Toggle"
        PreviewComponent={ToggleComponent}
        theme={theme}
      />
      <ComponentPreview
        componentName="Switch"
        PreviewComponent={SwitchComponent}
        theme={theme}
      />
      <ComponentPreview
        componentName="DropdownMenu"
        PreviewComponent={DropdownMenuComponent}
        theme={theme}
      />
      <ComponentPreview
        componentName="Menubar"
        PreviewComponent={MenubarComponent}
        theme={theme}
      />
    </div>
  );
}
