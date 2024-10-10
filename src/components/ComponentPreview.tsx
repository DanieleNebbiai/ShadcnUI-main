import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/ThemeCard";
import { CodeSnippet } from "@/components/CodeSnippet";
import { Separator } from "@/components/ui/ThemeSeparator";

interface ComponentPreviewProps {
  componentName: string;
  PreviewComponent: React.ComponentType;
  theme?: string; // Make theme optional
}

export function ComponentPreview({
  componentName,
  PreviewComponent,
  theme = "default",
}: ComponentPreviewProps) {
  const npxCommand = ` citrusui-${theme.toLowerCase()}@latest add ${componentName.toLowerCase()}`;

  return (
    <Card
      className="mb-8 border-none bg-transparent shadow-none"
      id={componentName}
    >
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>{componentName}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="mb-4">
          <CodeSnippet span="npx" code={npxCommand} />
        </div>
        <div className="border rounded-md flex items-center justify-center h-96 p-4 bg-white">
          <div className="items-center justify-center">
            <PreviewComponent />
          </div>
        </div>
      </CardContent>
      <Separator />
    </Card>
  );
}
