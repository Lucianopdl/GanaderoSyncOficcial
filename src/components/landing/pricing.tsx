"use client";

import { useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Sparkles } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const tiers = [
  {
    name: "Inicial",
    price: "$99",
    period: "/ mes",
    description: "Para pequeñas engordas que comienzan con la gestión de datos.",
    features: [
      "Hasta 1,000 cabezas",
      "Seguimiento Básico de Animales y Alimento",
      "Monitoreo Básico de Salud",
      "Reportes Estándar",
    ],
    cta: "Elegir Inicial",
    isPopular: false,
  },
  {
    name: "Profesional",
    price: "$299",
    period: "/ mes",
    description: "Para operaciones en crecimiento que necesitan análisis avanzados e IA.",
    features: [
      "Hasta 10,000 cabezas",
      "Todo lo del plan Inicial",
      "Finanzas Avanzadas",
      "Análisis de Tendencias con IA",
      "Soporte Prioritario",
    ],
    cta: "Elegir Profesional",
    isPopular: true,
  },
  {
    name: "Empresarial",
    price: "Personalizado",
    period: "",
    description: "Para grandes engordas con múltiples ubicaciones y necesidades personalizadas.",
    features: [
      "Cabezas ilimitadas",
      "Todo lo del plan Profesional",
      "Soporte multi-ubicación",
      "Integraciones y API a medida",
      "Gerente de Cuenta Dedicado",
    ],
    cta: "Contactar a Ventas",
    isPopular: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="relative overflow-hidden bg-gradient-to-b from-muted/30 via-background to-muted/30">
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="container relative">
        <div className="text-center mb-16 animate-fadeIn">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-4">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-sm font-semibold text-accent">Planes Flexibles</span>
          </div>
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            Encuentra el Plan Perfecto para tu Operación
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Precios transparentes que escalan con tu negocio. Sin cargos ocultos.
          </p>
        </div>

        <Carousel
          opts={{
            align: "center",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 4000,
              stopOnInteraction: true,
              stopOnMouseEnter: true,
            }),
          ]}
          className="w-full max-w-sm sm:max-w-xl md:max-w-3xl lg:max-w-6xl mx-auto"
        >
          <CarouselContent className="-ml-4">
            {tiers.map((tier, index) => (
              <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <div className="p-1 h-full animate-slideUp" style={{ animationDelay: `${index * 150}ms` }}>
                  <Card
                    className={`
                      group relative flex flex-col h-full
                      bg-card/80 backdrop-blur-sm border-2
                      transition-all duration-500 hover:-translate-y-3
                      ${tier.isPopular
                        ? "border-accent shadow-2xl shadow-accent/20 scale-105"
                        : "border-border hover:border-primary/30 hover:shadow-xl"
                      }
                      overflow-hidden
                    `}
                  >
                    {/* Gradient overlay */}
                    <div className={`
                      absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500
                      bg-gradient-to-br ${tier.isPopular ? 'from-accent/5 to-primary/5' : 'from-primary/5 to-accent/5'}
                    `} />

                    {tier.isPopular && (
                      <div className="relative bg-gradient-to-r from-accent via-primary to-accent text-primary-foreground text-center text-sm font-bold py-2 animate-shimmer">
                        <Sparkles className="inline-block w-4 h-4 mr-1 mb-0.5" />
                        Más Popular
                      </div>
                    )}

                    <CardHeader className="relative z-10">
                      <CardTitle className="font-headline text-2xl">{tier.name}</CardTitle>
                      <CardDescription className="text-base leading-relaxed">{tier.description}</CardDescription>
                      <div className="pt-4">
                        <span className={`
                          text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent
                          ${tier.isPopular ? 'animate-pulseGlow' : ''}
                        `}>
                          {tier.price}
                        </span>
                        <span className="text-muted-foreground ml-1">{tier.period}</span>
                      </div>
                    </CardHeader>

                    <CardContent className="flex-1 relative z-10">
                      <ul className="space-y-3">
                        {tier.features.map((feature, idx) => (
                          <li
                            key={feature}
                            className="flex items-start gap-3 group/item"
                            style={{ animationDelay: `${idx * 50}ms` }}
                          >
                            <div className="mt-0.5 p-1 rounded-full bg-primary/10 group-hover/item:bg-accent/20 transition-colors duration-300">
                              <Check className="w-4 h-4 text-primary group-hover/item:text-accent transition-colors duration-300" />
                            </div>
                            <span className="text-sm leading-relaxed">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>

                    <CardFooter className="relative z-10">
                      <Button
                        asChild
                        className={`
                          w-full font-semibold transition-all duration-300
                          ${tier.isPopular
                            ? "bg-gradient-to-r from-accent to-primary hover:shadow-lg hover:shadow-accent/50 hover:scale-105"
                            : "bg-primary hover:bg-accent hover:shadow-lg hover:scale-105"
                          }
                        `}
                      >
                        <Link href="#">{tier.cta}</Link>
                      </Button>
                    </CardFooter>

                    {/* Bottom glow effect */}
                    <div className={`
                      absolute bottom-0 left-0 right-0 h-1 
                      bg-gradient-to-r from-transparent via-accent to-transparent 
                      opacity-0 group-hover:opacity-100 transition-opacity duration-500
                    `} />
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex -left-12 lg:-left-16 border-2 hover:border-accent hover:bg-accent/10 transition-all duration-300" />
          <CarouselNext className="hidden md:flex -right-12 lg:-right-16 border-2 hover:border-accent hover:bg-accent/10 transition-all duration-300" />
        </Carousel>

        <div className="text-center mt-12 animate-fadeIn" style={{ animationDelay: '600ms' }}>
          <p className="text-sm text-muted-foreground">
            ¿Necesitas un plan personalizado? <Link href="#" className="text-accent hover:underline font-semibold">Contáctanos</Link>
          </p>
        </div>
      </div>
    </section>
  );
}
