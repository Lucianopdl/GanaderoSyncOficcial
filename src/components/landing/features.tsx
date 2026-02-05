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

export function Features() {
  return (
    <section id="features">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
            Una Nueva Era de Inteligencia para Engordas
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            GanaderoSync es más que un software: es tu centro de comando para una operación más inteligente y rentable.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Card key={index} className="bg-card hover:shadow-lg transition-all duration-300 hover:scale-105">
              <CardHeader>
                <div className="mb-4">
                  <feature.icon className="w-10 h-10 text-accent" />
                </div>
                <CardTitle className="font-headline">{feature.title}</CardTitle>
                <CardDescription className="pt-2">{feature.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
