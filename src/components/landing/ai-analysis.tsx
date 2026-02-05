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
    <section id="ai-analysis">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
            Desbloquea Perspectivas Predictivas con IA
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
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
