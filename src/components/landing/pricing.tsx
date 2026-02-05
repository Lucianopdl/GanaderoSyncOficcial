"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

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
    <section id="pricing" className="bg-muted/30">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
            Encuentra el Plan Perfecto para tu Operación
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Precios transparentes que escalan con tu negocio. Sin cargos ocultos.
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-sm sm:max-w-xl md:max-w-2xl lg:max-w-4xl mx-auto"
        >
          <CarouselContent>
            {tiers.map((tier, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1 h-full">
                  <Card className={`flex flex-col h-full ${tier.isPopular ? "border-primary shadow-lg" : ""}`}>
                    {tier.isPopular && (
                      <div className="bg-primary text-primary-foreground text-center text-sm font-bold py-1 rounded-t-lg">
                        Más Popular
                      </div>
                    )}
                    <CardHeader>
                      <CardTitle className="font-headline">{tier.name}</CardTitle>
                      <CardDescription>{tier.description}</CardDescription>
                      <div>
                        <span className="text-4xl font-bold">{tier.price}</span>
                        <span className="text-muted-foreground">{tier.period}</span>
                      </div>
                    </CardHeader>
                    <CardContent className="flex-1">
                      <ul className="space-y-3">
                        {tier.features.map((feature) => (
                          <li key={feature} className="flex items-center">
                            <Check className="w-4 h-4 mr-2 text-green-500" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button asChild className={`w-full ${tier.isPopular ? "" : "bg-accent text-accent-foreground hover:bg-accent/90"}`}>
                        <Link href="#">{tier.cta}</Link>
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex" />
          <CarouselNext className="hidden sm:flex" />
        </Carousel>
      </div>
    </section>
  );
}
