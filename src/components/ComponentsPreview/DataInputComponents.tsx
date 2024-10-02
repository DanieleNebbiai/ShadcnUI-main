import { ComponentPreview } from "../ComponentPreview";
import {
  InputComponent,
  CheckboxComponent,
  RadioGroupComponent,
  SelectComponent,
  TextareaComponent,
  CalendarComponent,
} from "../ComponentShowcase";
import { useTheme } from "@/context/ThemeContext";

export function DataInputComponents() {
  const { theme } = useTheme();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-left">
        Data Input Components
      </h1>

      <ComponentPreview
        componentName="Input"
        PreviewComponent={InputComponent}
        theme={theme}
      />
      <ComponentPreview
        componentName="Checkbox"
        PreviewComponent={CheckboxComponent}
        theme={theme}
      />
      <ComponentPreview
        componentName="RadioGroup"
        PreviewComponent={RadioGroupComponent}
        theme={theme}
      />
      <ComponentPreview
        componentName="Select"
        PreviewComponent={SelectComponent}
        theme={theme}
      />
      <ComponentPreview
        componentName="Textarea"
        PreviewComponent={TextareaComponent}
        theme={theme}
      />
      <ComponentPreview
        componentName="Calendar"
        PreviewComponent={CalendarComponent}
        theme={theme}
      />
    </div>
  );
}
