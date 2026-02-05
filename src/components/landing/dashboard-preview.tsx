import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Scale, Users, TrendingUp, AlertTriangle } from "lucide-react";
import { DashboardCharts } from "./dashboard-charts";

const healthAlerts = [
  { pen: "A12", animalId: "G-7892", alert: "Ingesta Reducida", severity: "warning" },
  { pen: "C04", animalId: "G-5612", alert: "Temperatura Alta", severity: "destructive" },
  { pen: "B07", animalId: "G-8103", alert: "Inactividad Inusual", severity: "warning" },
  { pen: "D01", animalId: "G-7745", alert: "Dificultad Respiratoria", severity: "destructive" },
];

export function DashboardPreview() {
  return (
    <section id="dashboard" className="relative bg-gradient-to-b from-slate-50 via-slate-100/50 to-slate-50 py-24">
      {/* Degradado de transición desde Features */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-white to-transparent pointer-events-none" />

      <div className="container relative">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 mb-4">
            <span className="text-sm font-semibold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
              Panel de Control
            </span>
          </div>
          <h2 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl bg-gradient-to-r from-slate-900 via-cyan-900 to-slate-900 bg-clip-text text-transparent mb-4">
            Tu Operación Completa, de un Vistazo
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-600 leading-relaxed">
            Experimenta claridad y control con nuestro panel intuitivo en tiempo real. Todos tus datos críticos, visualizados de forma atractiva.
          </p>
        </div>

        {/* Cards de estadísticas centradas */}
        <div className="max-w-6xl mx-auto mb-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card className="bg-white/80 backdrop-blur-sm border-2 border-slate-200 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/10">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-slate-700">Total de Ganado</CardTitle>
                <div className="p-2 rounded-lg bg-gradient-to-br from-cyan-500/10 to-blue-500/10">
                  <Users className="h-5 w-5 text-cyan-600" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">12,450</div>
                <p className="text-xs text-slate-500 mt-1">+2.1% desde el mes pasado</p>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm border-2 border-slate-200 hover:border-emerald-500/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-emerald-500/10">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-slate-700">Peso Promedio (KG)</CardTitle>
                <div className="p-2 rounded-lg bg-gradient-to-br from-emerald-500/10 to-teal-500/10">
                  <Scale className="h-5 w-5 text-emerald-600" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">542.7</div>
                <p className="text-xs text-slate-500 mt-1">+8.5kg esta semana</p>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm border-2 border-slate-200 hover:border-violet-500/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-violet-500/10">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-slate-700">Conversión de Alimento</CardTitle>
                <div className="p-2 rounded-lg bg-gradient-to-br from-violet-500/10 to-purple-500/10">
                  <TrendingUp className="h-5 w-5 text-violet-600" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">6.1 : 1</div>
                <p className="text-xs text-slate-500 mt-1">-0.2 del último ciclo</p>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm border-2 border-slate-200 hover:border-rose-500/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-rose-500/10">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-slate-700">Alertas Activas</CardTitle>
                <div className="p-2 rounded-lg bg-gradient-to-br from-rose-500/10 to-pink-500/10">
                  <AlertTriangle className="h-5 w-5 text-rose-600" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent">4</div>
                <p className="text-xs text-slate-500 mt-1">Se requiere atención inmediata</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Cards grandes centradas */}
        <div className="max-w-6xl mx-auto">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7">
            <Card className="lg:col-span-4 group transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/20 hover:border-cyan-500/50">
              <CardHeader>
                <CardTitle className="font-headline group-hover:text-cyan-600 transition-colors duration-300">Aumento de Peso a lo Largo del Tiempo</CardTitle>
              </CardHeader>
              <CardContent className="pl-2">
                <DashboardCharts chartType="line" />
              </CardContent>
              {/* Línea de acento inferior */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </Card>

            <Card className="lg:col-span-3 group transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-rose-500/20 hover:border-rose-500/50">
              <CardHeader>
                <CardTitle className="font-headline group-hover:text-rose-600 transition-colors duration-300">Alertas de Salud</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Corral</TableHead>
                      <TableHead>ID Animal</TableHead>
                      <TableHead>Alerta</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {healthAlerts.map((alert) => (
                      <TableRow key={alert.animalId}>
                        <TableCell className="font-medium">{alert.pen}</TableCell>
                        <TableCell>{alert.animalId}</TableCell>
                        <TableCell>
                          <Badge variant={alert.severity as "destructive" | "default"} className={alert.severity === 'warning' ? 'bg-yellow-500 text-white' : ''}>
                            {alert.alert}
                          </Badge>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
              {/* Línea de acento inferior */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-rose-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
