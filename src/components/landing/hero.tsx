"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Sparkles, TrendingUp, Shield, Zap } from "lucide-react";

export function Hero() {
  return (
    <section id="hero" className="relative w-full min-h-screen overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900">
      {/* Logo de fondo con efecto parallax */}
      <div className="absolute inset-0 opacity-10">
        <Image
          src="/logo gs.png"
          alt="GanaderoSync - Software de gestión de feedlot y ganadería con inteligencia artificial"
          fill
          className="object-cover scale-110"
          unoptimized
          priority
        />
      </div>

      {/* Gradiente overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/50 to-slate-950" />

      {/* Efectos de luz animados */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />

      {/* Contenido principal */}
      <div className="relative container mx-auto px-4 min-h-screen flex flex-col items-center justify-center text-center z-10">

        {/* Badge superior */}
        <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 backdrop-blur-xl mb-8 animate-fadeIn">
          <Sparkles className="w-4 h-4 text-cyan-400" />
          <span className="text-sm font-semibold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Software Líder en Gestión de Feedlot con Inteligencia Artificial
          </span>
        </div>

        {/* Título principal */}
        <h1 className="font-headline font-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl mb-6 animate-slideUp">
          <span className="block text-white mb-2">
            Software de Gestión de
          </span>
          <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent bg-[length:200%_auto] animate-shimmer">
            Feedlot y Ganadería
          </span>
        </h1>

        {/* Subtítulo optimizado para SEO */}
        <p className="text-lg sm:text-xl md:text-2xl text-slate-300 max-w-3xl mb-12 leading-relaxed animate-fadeIn" style={{ animationDelay: '200ms' }}>
          Optimiza tu <strong className="text-cyan-400 font-semibold">engorda de ganado</strong> con inteligencia artificial,
          trazabilidad completa, control de inventario y análisis predictivo. La solución definitiva para
          <strong className="text-cyan-400 font-semibold"> gestión de feedlot</strong> y producción ganadera rentable.
        </p>

        {/* Botones CTA */}
        <div className="flex flex-col sm:flex-row gap-4 mb-16 animate-fadeIn" style={{ animationDelay: '400ms' }}>
          <Button
            size="lg"
            asChild
            className="group relative bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white border-0 shadow-lg shadow-cyan-500/50 hover:shadow-cyan-500/70 transition-all duration-300 hover:scale-105 text-lg px-8 py-6"
          >
            <Link href="#demo" className="flex items-center gap-2">
              <Play className="w-5 h-5" />
              Ver Demo en Vivo
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>

          <Button
            size="lg"
            variant="outline"
            asChild
            className="group bg-white/5 backdrop-blur-xl border-2 border-cyan-500/30 hover:border-cyan-500/60 hover:bg-white/10 text-white transition-all duration-300 hover:scale-105 text-lg px-8 py-6"
          >
            <Link href="#pricing" className="flex items-center gap-2">
              Comenzar Gratis
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>

        {/* Características destacadas */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl w-full animate-fadeIn" style={{ animationDelay: '600ms' }}>
          <div className="group p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-cyan-500/20 hover:border-cyan-500/40 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <TrendingUp className="w-6 h-6 text-cyan-400" />
            </div>
            <div className="text-3xl font-bold text-white mb-1">10K+</div>
            <div className="text-sm text-slate-400">Animales Monitoreados</div>
          </div>

          <div className="group p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-blue-500/20 hover:border-blue-500/40 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Shield className="w-6 h-6 text-blue-400" />
            </div>
            <div className="text-3xl font-bold text-white mb-1">98%</div>
            <div className="text-sm text-slate-400">Satisfacción</div>
          </div>

          <div className="group p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-cyan-500/20 hover:border-cyan-500/40 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Zap className="w-6 h-6 text-cyan-400" />
            </div>
            <div className="text-3xl font-bold text-white mb-1">24/7</div>
            <div className="text-sm text-slate-400">Soporte Premium</div>
          </div>
        </div>

      </div>

      {/* Degradado de transición suave hacia el fondo blanco */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent via-slate-900/50 to-slate-50 pointer-events-none z-0" />

      {/* Indicador de scroll */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-20">
        <div className="w-6 h-10 rounded-full border-2 border-cyan-500/50 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-cyan-400 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
}
