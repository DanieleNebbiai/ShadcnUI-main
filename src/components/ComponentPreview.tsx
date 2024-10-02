import React from "react";
import { Button } from "@/components/ui/ThemeButton";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/ThemeCard";
import { GithubIcon } from "lucide-react";

interface ComponentPreviewProps {
  componentName: string;
  PreviewComponent: React.ComponentType;
  theme?: string; // Make theme optional
}

export function ComponentPreview({
  componentName,
  PreviewComponent,
  theme = "default", // Provide a default theme
}: ComponentPreviewProps) {
  const githubUrl = `https://github.com/DanieleNebbiai/ShadcnUI/blob/main/src/components/ui/${theme.toLowerCase()}/${componentName.toLowerCase()}-${theme.toLowerCase()}.tsx`;

  return (
    <Card
      className="mb-8 border-none bg-transparent shadow-none"
      id={componentName}
    >
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>{componentName}</CardTitle>
        <Button
          variant="outline"
          size="default"
          onClick={() => window.open(githubUrl, "_blank")}
          className="flex items-center space-x-2"
        >
          <GithubIcon className="h-4 w-4" />
          <span>View on GitHub</span>
        </Button>
      </CardHeader>
      <CardContent>
        <div className="border rounded-md flex items-center justify-center h-96 p-4 bg-white">
          <div className="items-center justify-center">
            <PreviewComponent />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
