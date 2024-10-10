"use client";

import { Button } from "@/components/ui/ThemeButton";
import { DestinationCardComponent } from "./destination-card";
import { Typography } from "./Typography";
import { StyleButtonComponent } from "./style-button";
import { Sun, Moon, Laptop } from "lucide-react";
import { Link } from "react-router-dom";
import { useTheme } from "@/context/ThemeContext";
import { Separator } from "./ui/ThemeSeparator";
import { CodeSnippet } from "./CodeSnippet";

export function HeroSection() {
  const { theme } = useTheme();

  const themeCSS = {
    modern: `
    --background: 0 0% 100%;
    --foreground: 0 0% 3.9%;
    --card: 0 0% 100%;
    --card-foreground: 0 0% 3.9%;
    --popover: 0 0% 100%;
    --popover-foreground: 0 0% 3.9%;
    --primary: 0 0% 9%;
    --primary-foreground: 0 0% 98%;
    --secondary: 0 0% 96.1%;
    --secondary-foreground: 0 0% 9%;
    --muted: 0 0% 96.1%;
    --muted-foreground: 0 0% 45.1%;
    --accent: 0 0% 96.1%;
    --accent-foreground: 0 0% 9%;
    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 0 0% 98%;
    --border: 0 0% 89.8%;
    --input: 0 0% 89.8%;
    --ring: 0 0% 3.9%;
    --radius: 0.5rem;
  }
}`,
    retro: `
    --background: 40 88% 92%;
    --foreground: 0 0% 5%;
    --card: 40 88% 98%;
    --card-foreground: 0 0% 5%;
    --popover: 40 88% 97%;
    --popover-foreground: 0 0% 5%;
    --primary: 138 63% 75%;
    --primary-foreground: 0 0% 5%;
    --secondary: 210 90% 65%;
    --secondary-foreground: 210 20% 95%;
    --muted: 40 88% 97%;
    --muted-foreground: 210 10% 40%;
    --accent: 51 53% 74%;
    --accent-foreground: 0 0% 0%;
    --destructive: 0 68% 70%;
    --destructive-foreground: 0 0% 100%;
    --border: 0 0% 3.9%;
    --input: 0 0% 10%;
    --ring: 270 80% 60%;
    --radius: 0.5rem;
    font-family: "Roboto Mono", monospace;
  }
}`,
    brutalist: `
    --background: 54 97% 63%;
    --foreground: 0 0% 0%;
    --card: 0 0% 100%;
    --card-foreground: 0 0% 0%;
    --popover: 0 0% 100%;
    --popover-foreground: 0 0% 0%;
    --primary: 0 0% 0%;
    --primary-foreground: 0 0% 100%;
    --secondary: 0 0% 50%;
    --secondary-foreground: 0 0% 100%;
    --muted: 0 0% 90%;
    --muted-foreground: 0 0% 20%;
    --accent: 240 100% 50%;
    --accent-foreground: 0 0% 100%;
    --destructive: 0 100% 50%;
    --destructive-foreground: 0 0% 100%;
    --border: 0 0% 0%;
    --input: 0 0% 99%;
    --ring: 0 0% 0%;
    --radius: 0;
    --brutalist-grid: 20px;
    --brutalist-border: 4px solid var(--border);
    --brutalist-shadow: 5px 5px 0 var(--border);
  }
}`,
  };

  return (
    <section className="container mx-auto px-4 py-12 md:py-24 bg-background">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        <div className="space-y-6">
          <Typography
            variant="h1"
            className="text-4xl md:text-5xl font-bold tracking-tight"
          >
            Style your ShadcnUI project, but faster
          </Typography>
          <Typography variant="p" className="text-xl text-muted-foreground">
            Chose your theme and style your ShadcnUI project without change your
            react components, in a few click.
          </Typography>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="default" asChild>
              <Link to="/Components/actions" className="text-sm font-medium">
                Getting Started
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link to="/Showcase" className="text-sm font-medium">
                Have a look
              </Link>
            </Button>
          </div>
          <div className="space-y-4">
            <div className="flex gap-4">
              <Button
                variant="outline"
                size="icon"
                className="text-xl font-bold text-muted-foreground"
              >
                1
              </Button>
              <Typography
                variant="p"
                className="text-md text-muted-foreground my-auto"
              >
                Pick a style up here
              </Typography>
            </div>
            <div className="flex gap-4">
              <StyleButtonComponent icon={Sun} label="Modern" theme="modern" />
              <StyleButtonComponent icon={Moon} label="Retro" theme="retro" />
              <StyleButtonComponent
                icon={Laptop}
                label="Brutalist"
                theme="brutalist"
              />
            </div>
            <Separator orientation="vertical" className="h-8 ml-5 w-1" />
            <div className="flex gap-4">
              <Button
                variant="outline"
                size="icon"
                className="text-xl font-bold text-muted-foreground"
              >
                2
              </Button>
              <Typography
                variant="p"
                className="text-md text-muted-foreground my-auto"
              >
                npx the components you need directly in your project
              </Typography>
            </div>
            <CodeSnippet
              span="npx"
              code={` citrusui-${theme}@latest add button`}
            />
            <Separator orientation="vertical" className="h-8 ml-5 w-1" />
            <div className="flex gap-4">
              <Button
                variant="outline"
                size="icon"
                className="text-xl font-bold text-muted-foreground"
              >
                3
              </Button>
              <Typography
                variant="p"
                className="text-md text-muted-foreground my-auto"
              >
                Change your color palette and font via index.css
              </Typography>
            </div>
            <CodeSnippet
              span="@layer base {
  :root {"
              code={`${themeCSS[theme as keyof typeof themeCSS]}`}
            />
          </div>
        </div>
        <div className="sticky top-32 flex justify-center md:justify-end">
          <DestinationCardComponent
            name="Tropical Paradise"
            location="Bali, Indonesia"
            image="/images/bali.jpg"
            thumbnails={["/images/bali-thumb1.jpg", "/images/bali-thumb2.jpg"]}
            rating={4.8}
            distance={10}
            available={10}
            price={199}
            description="Experience the beauty of Bali's pristine beaches, lush rice terraces, and vibrant culture. Immerse yourself in ancient temples, indulge in world-class cuisine, and unwind with traditional spa treatments. From surfing in Uluwatu to exploring the artistic hub of Ubud, Bali offers a perfect blend of relaxation and adventure for every traveler."
          />
        </div>
      </div>
    </section>
  );
}
