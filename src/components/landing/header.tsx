"use client";

import Link from "next/link";
import { GanaderoSyncLogo } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
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
        <Button key={link.href} variant="link" asChild className="text-foreground/80 hover:text-foreground">
          <Link href={link.href}>{link.label}</Link>
        </Button>
      ))}
    </>
  );

  return (
    <header className={cn(
      "sticky top-0 z-50 w-full transition-all duration-300",
      isScrolled ? "border-b bg-background/80 backdrop-blur-sm" : "bg-background"
    )}>
      <div className="container flex h-16 items-center">
        <Link href="/" className="mr-6 flex items-center gap-2">
          <GanaderoSyncLogo className="h-6 w-6" />
          <span className="font-headline text-lg font-bold">GanaderoSync</span>
        </Link>
        <nav className="hidden md:flex items-center gap-2">
          <NavLinks />
        </nav>
        <div className="flex flex-1 items-center justify-end gap-2">
          <Button asChild>
            <Link href="#pricing">Comenzar</Link>
          </Button>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-4 w-4" />
                <span className="sr-only">Alternar menú de navegación</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="grid gap-6 text-lg font-medium mt-8">
                <Link href="/" className="flex items-center gap-2 text-lg font-semibold mb-4">
                  <GanaderoSyncLogo className="h-6 w-6" />
                  <span>GanaderoSync</span>
                </Link>
                {navLinks.map((link) => (
                    <Link key={link.href} href={link.href} className="text-muted-foreground hover:text-foreground">
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
