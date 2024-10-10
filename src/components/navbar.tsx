"use client";

import { useState } from "react";
import { Button } from "@/components/ui/ThemeButton";
import { Github, Citrus, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

export function NavbarComponent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="border-b bg-white sticky top-0 z-50">
      <div className="container mx-auto px-4 py-2">
        <nav className="flex items-center align-middle justify-between h-full">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Citrus className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold">CitrusUI</span>
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            {/* Desktop menu items */}
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
          <div className="md:hidden">
            <Button variant="outline" size="icon" onClick={toggleMenu}>
              {isMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </nav>
      </div>
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Button variant="outline" className="w-full justify-start" asChild>
              <Link to="/Components/actions" className="text-sm font-medium">
                Components
              </Link>
            </Button>
            <Button variant="outline" className="w-full justify-start" asChild>
              <Link to="/Showcase" className="text-sm font-medium">
                Showcase
              </Link>
            </Button>
            <Button variant="outline" className="w-full justify-start" asChild>
              <Link
                to="https://github.com/DanieleNebbiai/ShadcnUI-main"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium"
              >
                GitHub
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
