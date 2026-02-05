"use client";

import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Beef, ClipboardList, HeartPulse, DollarSign, LineChart, ShieldCheck } from "lucide-react";
import type { LucideProps } from "lucide-react";

const features = [
  {
    icon: (props: LucideProps) => <Beef {...props} />,
    title: "Seguimiento de Animales",
    description: "Monitorea el rendimiento individual de los animales, desde el aumento de peso hasta el historial de salud, con una precisión inigualable.",
  },
  {
    icon: (props: LucideProps) => <ClipboardList {...props} />,
    title: "Gestión de Alimento",
    description: "Optimiza las raciones de alimento, monitorea el consumo y gestiona el inventario para reducir costos y maximizar la eficiencia.",
  },
  {
    icon: (props: LucideProps) => <HeartPulse {...props} />,
    title: "Monitoreo de Salud",
    description: "Alertas de salud proactivas y seguimiento de tratamientos para garantizar un rebaño sano y productivo, y minimizar las pérdidas.",
  },
  {
    icon: (props: LucideProps) => <DollarSign {...props} />,
    title: "Análisis Financiero",
    description: "Integra los datos operativos con los financieros para obtener una visión clara de tu rentabilidad y centros de costos.",
  },
  {
    icon: (props: LucideProps) => <LineChart {...props} />,
    title: "Predicciones con IA",
    description: "Aprovecha la inteligencia artificial para pronosticar tendencias de peso, valores de mercado y riesgos operativos.",
  },
  {
    icon: (props: LucideProps) => <ShieldCheck {...props} />,
    title: "Cumplimiento Global",
    description: "Mantente al día con las regulaciones internacionales con funciones de informes automatizados y trazabilidad.",
  },
];

const delays = ["delay-100", "delay-200", "delay-300", "delay-400", "delay-500", "delay-600"];

export function Features() {
  return (
    <section id="features" className="relative overflow-hidden">
      {/* Decorative background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background pointer-events-none" />
      
      <div className="container relative">
        <div className="text-center mb-12 animate-fadeIn">
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            Una Nueva Era de Inteligencia para Engordas
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            GanaderoSync es más que un software: es tu centro de comando para una operación más inteligente y rentable.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className={`
                group relative bg-card/80 backdrop-blur-sm border-2 
                hover:border-accent/50 hover:shadow-2xl hover:shadow-accent/20
                transition-all duration-500 hover:-translate-y-2
                animate-slideUp ${delays[index]}
                overflow-hidden
              `}
            >
              {/* Shimmer effect on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-shimmer" />
              
              <CardHeader className="relative z-10">
                <div className="mb-4 inline-block p-3 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 group-hover:from-primary/20 group-hover:to-accent/20 transition-all duration-300 group-hover:scale-110">
                  <feature.icon className="w-10 h-10 text-primary group-hover:text-accent transition-colors duration-300" />
                </div>
                <CardTitle className="font-headline text-xl group-hover:text-primary transition-colors duration-300">
                  {feature.title}
                </CardTitle>
                <CardDescription className="pt-2 leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardHeader>
              
              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
