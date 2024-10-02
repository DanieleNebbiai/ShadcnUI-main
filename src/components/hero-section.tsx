"use client";

import { Button } from "@/components/ui/ThemeButton";
import { DestinationCardComponent } from "./destination-card";
import { Typography } from "./Typography";
import { StyleButtonComponent } from "./style-button";
import { Sun, Moon, Laptop } from "lucide-react";
import { Link } from "react-router-dom";
import { useTheme } from "@/context/ThemeContext";

export function HeroSection() {
  const { theme } = useTheme();

  return (
    <section className="container mx-auto px-4 py-12 md:py-24 bg-background">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
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
          <div className="flex gap-4 mt-4">
            <StyleButtonComponent icon={Sun} label="Modern" theme="modern" />
            <StyleButtonComponent icon={Moon} label="Retro" theme="retro" />
            <StyleButtonComponent icon={Laptop} label="Tech" theme="tech" />
          </div>
          <Typography variant="p" className="text-xl text-muted-foreground">
            Pick a style up here and git clone the new styled ShadcnUI
            component.
          </Typography>
          <pre className="bg-card border text-card-foreground text-xl p-6 rounded-xl">
            <code>git clone https://github.com/{theme}/ui.git</code>
          </pre>
        </div>
        <div className="flex justify-center md:justify-end">
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
