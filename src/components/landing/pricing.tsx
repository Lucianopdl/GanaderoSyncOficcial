"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Sparkles } from "lucide-react";

const tiers = [
  {
    name: "Inicial",
    description: "Para pequeñas engordas que comienzan con la gestión de datos.",
    features: [
      "Hasta 1,000 cabezas",
      "Seguimiento Básico de Animales y Alimento",
      "Monitoreo Básico de Salud",
      "Reportes Estándar",
    ],
    cta: "Elegir Inicial",
    isPopular: false,
    gradient: "from-cyan-500/10 to-blue-500/10",
    borderColor: "border-cyan-500/30",
    hoverBorder: "hover:border-cyan-500/60",
    shadowColor: "hover:shadow-cyan-500/20",
  },
  {
    name: "Profesional",
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
    gradient: "from-emerald-500/10 to-teal-500/10",
    borderColor: "border-emerald-500/30",
    hoverBorder: "hover:border-emerald-500/60",
    shadowColor: "hover:shadow-emerald-500/20",
  },
  {
    name: "Empresarial",
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
    gradient: "from-violet-500/10 to-purple-500/10",
    borderColor: "border-violet-500/30",
    hoverBorder: "hover:border-violet-500/60",
    shadowColor: "hover:shadow-violet-500/20",
  },
];

const whatsappNumber = "5493735609095";
const whatsappMessage = encodeURIComponent("¡Hola! Me interesa conocer más sobre GanaderoSync y sus planes.");

export function Pricing() {
  return (
    <section id="pricing" className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-slate-100/30 to-slate-50 py-24">
      {/* Degradado de transición desde AI Analysis */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-white to-transparent pointer-events-none" />

      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

      <div className="container relative">
        <div className="text-center mb-16 animate-fadeIn">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border border-emerald-500/20 mb-4">
            <Sparkles className="w-4 h-4 text-emerald-600" />
            <span className="text-sm font-semibold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Planes Flexibles</span>
          </div>
          <h2 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl bg-gradient-to-r from-slate-900 via-emerald-900 to-slate-900 bg-clip-text text-transparent mb-4">
            Encuentra el Plan Perfecto para tu Operación
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-600 leading-relaxed">
            Soluciones personalizadas que se adaptan a las necesidades de tu feedlot. Contáctanos para conocer más.
          </p>
        </div>

        {/* Cards de planes sin carrusel */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {tiers.map((tier, index) => (
              <Card
                key={index}
                className={`
                  group relative flex flex-col h-full
                  bg-white/80 backdrop-blur-xl border-2
                  ${tier.borderColor} ${tier.hoverBorder}
                  hover:shadow-2xl ${tier.shadowColor}
                  transition-all duration-500 hover:-translate-y-4 hover:rotate-2 hover:scale-105
                  animate-slideUp
                  overflow-hidden
                  ${tier.isPopular ? 'scale-105 lg:scale-110' : ''}
                `}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Gradient overlay */}
                <div className={`
                  absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500
                  bg-gradient-to-br ${tier.gradient}
                `} />

                {/* Shimmer effect on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                </div>

                {tier.isPopular && (
                  <div className="relative bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-500 text-white text-center text-sm font-bold py-2 animate-shimmer">
                    <Sparkles className="inline-block w-4 h-4 mr-1 mb-0.5 animate-pulse" />
                    Más Popular
                  </div>
                )}

                <CardHeader className="relative z-10 pb-6">
                  <CardTitle className="font-headline text-2xl text-slate-900 mb-2 group-hover:text-emerald-700 transition-colors duration-300">{tier.name}</CardTitle>
                  <CardDescription className="text-base leading-relaxed text-slate-600">{tier.description}</CardDescription>
                </CardHeader>

                <CardContent className="flex-1 relative z-10">
                  <ul className="space-y-3">
                    {tier.features.map((feature, idx) => (
                      <li
                        key={feature}
                        className="flex items-start gap-3 group/item animate-fadeIn"
                        style={{ animationDelay: `${(index * 150) + (idx * 50)}ms` }}
                      >
                        <div className="mt-0.5 p-1 rounded-full bg-emerald-500/10 group-hover/item:bg-emerald-500/20 group-hover/item:scale-110 transition-all duration-300">
                          <Check className="w-4 h-4 text-emerald-600 group-hover/item:text-emerald-700 transition-colors duration-300" />
                        </div>
                        <span className="text-sm leading-relaxed text-slate-700 group-hover/item:text-slate-900 transition-colors duration-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>

                <CardFooter className="relative z-10 pt-6">
                  <Button
                    asChild
                    className={`
                      w-full font-semibold transition-all duration-300
                      ${tier.isPopular
                        ? "bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 hover:shadow-lg hover:shadow-emerald-500/50 hover:scale-105"
                        : "bg-slate-900 hover:bg-emerald-600 hover:shadow-lg hover:scale-105"
                      }
                    `}
                  >
                    <a
                      href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {tier.cta}
                    </a>
                  </Button>
                </CardFooter>

                {/* Bottom glow effect */}
                <div className={`
                  absolute bottom-0 left-0 right-0 h-1 
                  bg-gradient-to-r from-transparent via-emerald-500 to-transparent 
                  opacity-0 group-hover:opacity-100 transition-opacity duration-500
                `} />

                {/* Corner decoration */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-emerald-500/5 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </Card>
            ))}
          </div>
        </div>

        <div className="text-center mt-12 animate-fadeIn" style={{ animationDelay: '600ms' }}>
          <p className="text-sm text-slate-600">
            ¿Necesitas un plan personalizado? {' '}
            <a
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-600 hover:text-emerald-700 hover:underline font-semibold transition-colors"
            >
              Contáctanos por WhatsApp
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
