"use client";

import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Beef, ClipboardList, HeartPulse, DollarSign, LineChart, ShieldCheck } from "lucide-react";
import type { LucideProps } from "lucide-react";

const features = [
  {
    icon: (props: LucideProps) => <Beef {...props} />,
    title: "Control de Ganado en Feedlot",
    description: "Monitorea el rendimiento individual de cada animal en tu feedlot: ganancia diaria de peso, conversión alimenticia, historial sanitario completo y trazabilidad desde el ingreso hasta la venta.",
    gradient: "from-cyan-500/10 via-blue-500/10 to-cyan-500/10",
    iconGradient: "from-cyan-500 to-blue-600",
    borderColor: "border-cyan-500/30",
    hoverBorder: "hover:border-cyan-500/60",
    shadowColor: "hover:shadow-cyan-500/20",
  },
  {
    icon: (props: LucideProps) => <ClipboardList {...props} />,
    title: "Gestión de Alimento y Nutrición",
    description: "Optimiza las raciones de alimento para engorda, controla el consumo diario, gestiona inventario de granos y concentrados, y reduce costos operativos hasta un 30% con nuestro sistema inteligente.",
    gradient: "from-emerald-500/10 via-teal-500/10 to-emerald-500/10",
    iconGradient: "from-emerald-500 to-teal-600",
    borderColor: "border-emerald-500/30",
    hoverBorder: "hover:border-emerald-500/60",
    shadowColor: "hover:shadow-emerald-500/20",
  },
  {
    icon: (props: LucideProps) => <HeartPulse {...props} />,
    title: "Monitoreo de Salud Animal",
    description: "Sistema de alertas tempranas para detectar enfermedades, seguimiento de tratamientos veterinarios, control de vacunación y registro sanitario completo para garantizar un rebaño sano y productivo.",
    gradient: "from-rose-500/10 via-pink-500/10 to-rose-500/10",
    iconGradient: "from-rose-500 to-pink-600",
    borderColor: "border-rose-500/30",
    hoverBorder: "hover:border-rose-500/60",
    shadowColor: "hover:shadow-rose-500/20",
  },
  {
    icon: (props: LucideProps) => <DollarSign {...props} />,
    title: "Análisis Financiero de Feedlot",
    description: "Calcula costos por animal, rentabilidad por lote, proyecciones de venta, y obtén reportes financieros detallados para maximizar las ganancias de tu operación ganadera.",
    gradient: "from-amber-500/10 via-yellow-500/10 to-amber-500/10",
    iconGradient: "from-amber-500 to-yellow-600",
    borderColor: "border-amber-500/30",
    hoverBorder: "hover:border-amber-500/60",
    shadowColor: "hover:shadow-amber-500/20",
  },
  {
    icon: (props: LucideProps) => <LineChart {...props} />,
    title: "Predicciones con IA para Ganadería",
    description: "Inteligencia artificial que predice peso final, fecha óptima de venta, riesgos sanitarios y tendencias de mercado para tomar decisiones basadas en datos reales.",
    gradient: "from-violet-500/10 via-purple-500/10 to-violet-500/10",
    iconGradient: "from-violet-500 to-purple-600",
    borderColor: "border-violet-500/30",
    hoverBorder: "hover:border-violet-500/60",
    shadowColor: "hover:shadow-violet-500/20",
  },
  {
    icon: (props: LucideProps) => <ShieldCheck {...props} />,
    title: "Trazabilidad y Cumplimiento",
    description: "Cumple con normativas SENASA, trazabilidad completa del ganado, reportes automáticos para auditorías y certificaciones de calidad para exportación de carne.",
    gradient: "from-blue-500/10 via-indigo-500/10 to-blue-500/10",
    iconGradient: "from-blue-500 to-indigo-600",
    borderColor: "border-blue-500/30",
    hoverBorder: "hover:border-blue-500/60",
    shadowColor: "hover:shadow-blue-500/20",
  },
];

const delays = ["delay-100", "delay-200", "delay-300", "delay-400", "delay-500", "delay-600"];

export function Features() {
  return (
    <section id="features" className="relative overflow-hidden pt-16 pb-24 bg-gradient-to-b from-slate-50 via-white to-slate-50">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />

      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.02)_1px,transparent_1px)] bg-[size:64px_64px] opacity-50" />

      {/* Gradient orbs */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-cyan-400/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

      <div className="container relative">
        <div className="text-center mb-16 animate-fadeIn">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 mb-4">
            <span className="text-sm font-semibold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
              Características Principales
            </span>
          </div>
          <h2 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl bg-gradient-to-r from-slate-900 via-cyan-900 to-slate-900 bg-clip-text text-transparent mb-4">
            Sistema Completo de Gestión para Feedlot
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-slate-600 leading-relaxed">
            GanaderoSync es la plataforma integral que necesitas para administrar tu feedlot de manera profesional,
            aumentar la rentabilidad y optimizar cada aspecto de la producción ganadera.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Card
              key={index}
              className={`
                group relative bg-white/80 backdrop-blur-xl border-2 
                ${feature.borderColor} ${feature.hoverBorder}
                hover:shadow-2xl ${feature.shadowColor}
                transition-all duration-500 hover:-translate-y-3
                animate-slideUp ${delays[index]}
                overflow-hidden
              `}
            >
              {/* Gradient background on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              {/* Shimmer effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </div>

              <CardHeader className="relative z-10 p-8">
                {/* Icon container */}
                <div className={`mb-6 inline-flex p-4 rounded-2xl bg-gradient-to-br ${feature.gradient} border ${feature.borderColor} group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg`}>
                  <div className={`p-2 rounded-xl bg-gradient-to-br ${feature.iconGradient}`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                <CardTitle className="font-headline text-xl font-bold text-slate-900 group-hover:text-cyan-700 transition-colors duration-300 mb-3">
                  {feature.title}
                </CardTitle>

                <CardDescription className="text-slate-600 leading-relaxed text-sm">
                  {feature.description}
                </CardDescription>
              </CardHeader>

              {/* Bottom accent line */}
              <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${feature.iconGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              {/* Corner decoration */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-cyan-500/5 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
