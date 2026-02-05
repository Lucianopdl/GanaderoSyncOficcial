import Link from "next/link";
import { GanaderoSyncLogo } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Twitter, Linkedin, Facebook } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="container py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <GanaderoSyncLogo className="h-6 w-6" />
            <span className="font-headline text-lg font-bold">GanaderoSync Global</span>
          </div>
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} GanaderoSync Global. Todos los derechos reservados.
          </p>
          <div className="flex gap-2">
            <Button variant="ghost" size="icon" asChild>
              <Link href="#" aria-label="Twitter">
                <Twitter className="h-4 w-4" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="#" aria-label="LinkedIn">
                <Linkedin className="h-4 w-4" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="#" aria-label="Facebook">
                <Facebook className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}
