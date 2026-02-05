"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Menu, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "#features", label: "Características" },
  { href: "#dashboard", label: "Panel" },
  { href: "#ai-analysis", label: "Análisis IA" },
  { href: "#pricing", label: "Precios" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const NavLinks = () => (
    <>
      {navLinks.map((link) => (
        <Button
          key={link.href}
          variant="link"
          asChild
          className="text-foreground/70 hover:text-primary font-medium transition-colors duration-300 relative group"
        >
          <Link href={link.href}>
            {link.label}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-accent to-primary group-hover:w-full transition-all duration-300" />
          </Link>
        </Button>
      ))}
    </>
  );

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-500",
        isScrolled
          ? "border-b border-border/50 bg-background/70 backdrop-blur-xl shadow-lg shadow-primary/5"
          : "bg-background/50 backdrop-blur-sm"
      )}
      role="banner"
    >
      <div className="container flex h-16 items-center">
        <Link href="/" className="mr-8 flex items-center gap-3 group" aria-label="GanaderoSync - Inicio">
          <div className="relative w-14 h-14 rounded-lg overflow-hidden bg-white shadow-md group-hover:shadow-lg group-hover:scale-110 transition-all duration-300">
            <Image
              src="/logo.png"
              alt="GanaderoSync Logo"
              width={56}
              height={56}
              className="object-contain"
              priority
            />
          </div>
          <span className="font-headline text-xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
            GanaderoSync
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-1" aria-label="Navegación principal">
          <NavLinks />
        </nav>

        <div className="flex flex-1 items-center justify-end gap-3">
          <Button
            asChild
            className="group bg-gradient-to-r from-accent to-primary hover:shadow-lg hover:shadow-accent/30 transition-all duration-300 hover:scale-105 font-semibold"
          >
            <Link href="#pricing" className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
              Comenzar
            </Link>
          </Button>

          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="md:hidden border-2 hover:border-accent hover:bg-accent/10 transition-all duration-300"
              >
                <Menu className="h-4 w-4" />
                <span className="sr-only">Alternar menú de navegación</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-background/95 backdrop-blur-xl">
              <nav className="grid gap-6 text-lg font-medium mt-8">
                <Link href="/" className="flex items-center gap-3 text-lg font-semibold mb-4 group">
                  <div className="relative w-10 h-10 rounded-lg overflow-hidden bg-white shadow-md">
                    <Image
                      src="/logo.png"
                      alt="GanaderoSync Logo"
                      width={40}
                      height={40}
                      className="object-contain"
                    />
                  </div>
                  <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                    GanaderoSync
                  </span>
                </Link>
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 font-medium py-2 border-l-2 border-transparent hover:border-accent pl-4"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
