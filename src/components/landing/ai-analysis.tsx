"use client";

import { useState } from "react";
import { useFormState } from "react-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { runTrendAnalysis } from "@/app/actions";
import { Loader2, Wand2 } from "lucide-react";

const initialState = {
  trendAnalysis: "",
  error: "",
};

const sampleData = JSON.stringify({
  "time_period": "2024-Q2",
  "total_cattle": 12450,
  "average_initial_weight_kg": 455,
  "average_final_weight_kg": 542,
  "mortality_rate_percent": 0.8,
  "average_daily_gain_kg": 1.5,
  "feed_conversion_ratio": 6.1,
  "cost_per_kg_gain_usd": 2.15,
  "stock_valuation_change_percent": 4.5
}, null, 2);

export function AiAnalysis() {
  const [state, formAction] = useFormState(runTrendAnalysis, initialState);
  const [data, setData] = useState(sampleData);
  const [isPending, setIsPending] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsPending(true);
    const formData = new FormData(event.currentTarget);
    await formAction(formData);
    setIsPending(false);
  };

  return (
    <section id="ai-analysis" className="relative bg-gradient-to-b from-slate-50 via-white to-slate-50 py-24">
      {/* Degradado de transición desde Dashboard */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-slate-100/50 to-transparent pointer-events-none" />

      <div className="container relative">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-violet-500/10 to-purple-500/10 border border-violet-500/20 mb-4">
            <Wand2 className="w-4 h-4 text-violet-600" />
            <span className="text-sm font-semibold bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
              Inteligencia Artificial
            </span>
          </div>
          <h2 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl bg-gradient-to-r from-slate-900 via-violet-900 to-slate-900 bg-clip-text text-transparent mb-4">
            Desbloquea Perspectivas Predictivas con IA
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-600 leading-relaxed">
            Nuestro motor de IA analiza tus datos para revelar tendencias, predecir resultados y proporcionar consejos prácticos para aumentar tu rentabilidad. Pruébalo ahora.
          </p>
        </div>

        <Card className="max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 font-headline">
              <Wand2 className="w-6 h-6 text-accent" />
              Demostración de Análisis de Tendencias con IA
            </CardTitle>
            <CardDescription>
              Usa los datos de ejemplo o ingresa los tuyos para ver nuestra IA en acción.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="grid gap-6">
              <Textarea
                name="feedlotData"
                placeholder="Ingresa los datos de tu engorda aquí..."
                className="min-h-[250px] font-mono text-sm"
                value={data}
                onChange={(e) => setData(e.target.value)}
              />
              <div className="flex justify-end">
                <Button type="submit" disabled={isPending}>
                  {isPending ? (
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  ) : (
                    <Wand2 className="mr-2 h-4 w-4" />
                  )}
                  Analizar Tendencias
                </Button>
              </div>
            </form>
            {(state?.trendAnalysis || state?.error) && (
              <div className="mt-6">
                <h3 className="font-headline text-lg font-semibold mb-2">Resultado del Análisis:</h3>
                {state.trendAnalysis ? (
                  <Card className="bg-muted/50 p-4">
                    <pre className="text-sm whitespace-pre-wrap font-sans">{state.trendAnalysis}</pre>
                  </Card>
                ) : (
                  <p className="text-destructive">{state.error}</p>
                )}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
