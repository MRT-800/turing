"use client";

import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
    const initialTheme = savedTheme || systemTheme;
    setTheme(initialTheme);
    document.documentElement.classList.toggle("dark", initialTheme === "dark");
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark");
  };

  const scrollToSection = (sectionId: string) => {
    setIsOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <nav className="bg-background/80 backdrop-blur-md border-b border-border/40 fixed w-full top-0 z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <Link
          href="/"
          className="text-xl font-bold text-primary hover:text-primary/80 transition-colors duration-200"
        >
          Turing R&D
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8 ml-auto">
          <Link
            href="/about"
            className="text-muted-foreground hover:text-primary transition-colors duration-200"
          >
            About
          </Link>
          <Link
            href="/product"
            className="text-muted-foreground hover:text-primary transition-colors duration-200"
          >
            Product
          </Link>
          <Link
            href="/services"
            className="text-muted-foreground hover:text-primary transition-colors duration-200"
          >
            Services
          </Link>
          <Link
            href="/portfolio"
            className="text-muted-foreground hover:text-primary transition-colors duration-200"
          >
            Portfolio
          </Link>
          <Link
            href="/contact"
            className="text-muted-foreground hover:text-primary transition-colors duration-200"
          >
            Contact
          </Link>
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="text-primary hover:text-primary/80"
          >
            {theme === "light" ? (
              <Moon className="h-5 w-5" />
            ) : (
              <Sun className="h-5 w-5" />
            )}
          </Button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="text-primary hover:text-primary/80"
          >
            {theme === "light" ? (
              <Moon className="h-5 w-5" />
            ) : (
              <Sun className="h-5 w-5" />
            )}
          </Button>
          <Button
            variant="ghost"
            onClick={() => setIsOpen(!isOpen)}
            className="text-primary hover:text-primary/80"
          >
            {isOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col space-y-4 p-6 bg-background/95 backdrop-blur-md border-t border-border/40">
          <Link
            href="/about"
            onClick={() => setIsOpen(false)}
            className="text-muted-foreground hover:text-primary transition-colors duration-200 text-left"
          >
            About
          </Link>
          <Link
            href="/product"
            onClick={() => setIsOpen(false)}
            className="text-muted-foreground hover:text-primary transition-colors duration-200 text-left"
          >
            Product
          </Link>
          <Link
            href="/services"
            onClick={() => setIsOpen(false)}
            className="text-muted-foreground hover:text-primary transition-colors duration-200 text-left"
          >
            Services
          </Link>
          <Link
            href="/portfolio"
            onClick={() => setIsOpen(false)}
            className="text-muted-foreground hover:text-primary transition-colors duration-200 text-left"
          >
            Portfolio
          </Link>
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="text-muted-foreground hover:text-primary transition-colors duration-200 text-left"
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
