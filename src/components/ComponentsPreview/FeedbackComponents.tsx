import { ComponentPreview } from "../ComponentPreview";
import {
  AlertComponent,
  AlertDialogComponent,
  DialogComponent,
} from "../ComponentShowcase";
import { useTheme } from "@/context/ThemeContext";

export function FeedbackComponents() {
  const { theme } = useTheme();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-left">Feedback Components</h1>

      <ComponentPreview
        componentName="Alert"
        PreviewComponent={AlertComponent}
        theme={theme}
      />
      <ComponentPreview
        componentName="AlertDialog"
        PreviewComponent={AlertDialogComponent}
        theme={theme}
      />
      <ComponentPreview
        componentName="Dialog"
        PreviewComponent={DialogComponent}
        theme={theme}
      />
    </div>
  );
}
