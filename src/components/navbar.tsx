"use client";

import { Button } from "@/components/ui/ThemeButton";
import { Github, Citrus } from "lucide-react";
import { Link } from "react-router-dom";

export function NavbarComponent() {
  return (
    <header className="border-b bg-white sticky top-0 z-50">
      <div className="container mx-auto px-4 py-2">
        <nav className="flex items-center align-middle justify-between h-full">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Citrus
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6 text-primary"
              />
              <span className="text-xl font-bold">CitrusUI</span>
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="outline" asChild>
              <Link to="/Components/actions" className="text-sm font-medium">
                Components
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link to="/Showcase" className="text-sm font-medium">
                Showcase
              </Link>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <Link
                to="https://github.com/DanieleNebbiai/ShadcnUI-main"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github />
              </Link>
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}
