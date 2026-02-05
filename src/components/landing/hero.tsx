import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function Hero() {
  const heroImage = PlaceHolderImages.find((img) => img.id === "hero-image");

  return (
    <section id="hero" className="relative w-full h-[80vh] min-h-[600px] max-h-[1080px] overflow-hidden">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          className="object-cover"
          data-ai-hint={heroImage.imageHint}
          priority
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/20" />
      <div className="relative container h-full flex flex-col items-center justify-center text-center text-primary-foreground">
        <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          El Futuro de la Gestión de Engordas
        </h1>
        <p className="mt-4 max-w-2xl text-lg md:text-xl">
          Eleva tus operaciones con GanaderoSync. Perspectivas impulsadas por IA, datos en tiempo real y control total para la industria ganadera global.
        </p>
        <div className="mt-8 flex gap-4">
          <Button size="lg" asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
            <Link href="#dashboard">Ver Demo</Link>
          </Button>
          <Button size="lg" variant="secondary" asChild>
            <Link href="#pricing">Comenzar</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
