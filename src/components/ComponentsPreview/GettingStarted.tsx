import { ComponentPreview } from "../ComponentPreview";
import { ButtonComponent } from "../ComponentShowcase";
import { useTheme } from "@/context/ThemeContext";
import { Typography } from "@/components/Typography";
import { CodeSnippet } from "@/components/CodeSnippet";
export function GettingStarted() {
  const { theme } = useTheme();

  return (
    <div className="container mx-auto p-4">
      <Typography variant="h1" className="mb-6">
        Getting Started with CitrusUI
      </Typography>

      <section className="mb-8">
        <Typography variant="h2" className="mb-8">
          Welcome to CitrusUI
        </Typography>
        <Typography variant="p" className="mb-6 mt-2">
          CitrusUI is a modern React UI library builded on top of{" "}
          <strong className="font-bold">ShadcnUI</strong> designed to help you
          customize your project with ease.
        </Typography>
        <Typography variant="p" className="mb-6 mt-2">
          Please have a look to <strong className="font-bold">ShadcnUI</strong>{" "}
          documentation to get more information about the library.
        </Typography>
      </section>

      <section className="mb-8">
        <Typography variant="h2" className="mb-8">
          Installation
        </Typography>
        <Typography variant="p" className="mb-6 mt-2">
          To get started with CitrusUI, you just need to follow the steps from
          ShadcnUI documentation, nothing else is required.
        </Typography>
      </section>

      <section className="mb-8">
        <Typography variant="h2" className="mb-8">
          Basic Usage
        </Typography>
        <Typography variant="p" className="mb-6 mt-2">
          The components in this library are the same of Shadcn with some little
          twerks that don't affect the usage.
        </Typography>
        <Typography variant="p" className="mb-6 mt-2">
          To use it you can just import the new UI components from the library
          and use them as you would use the ShadcnUI components.
        </Typography>
        <Typography variant="p" className="mb-6 mt-2">
          {" "}
          You <span className="font-bold">DON'T</span> need to apply any
          modification on your project, this new UI component works directly
          with the component made with ShadcnUI.
        </Typography>
        <Typography variant="p" className="mb-2 mt-2 font-thin">
          Just use the CLI that we provide to add the components that you need
          for your project.
        </Typography>
        <CodeSnippet span="npx" code={` citrusui-${theme}@latest add button`} />

        <ComponentPreview
          componentName="Button"
          PreviewComponent={ButtonComponent}
          theme={theme}
        />
      </section>
    </div>
  );
}
