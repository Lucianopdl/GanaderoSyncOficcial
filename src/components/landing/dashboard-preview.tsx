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
    <section id="dashboard" className="bg-muted/30">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
            Tu Operación Completa, de un Vistazo
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Experimenta claridad y control con nuestro panel intuitivo en tiempo real. Todos tus datos críticos, visualizados de forma atractiva.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-4">
          <Card className="transition-transform duration-300 hover:scale-105">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total de Ganado</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12,450</div>
              <p className="text-xs text-muted-foreground">+2.1% desde el mes pasado</p>
            </CardContent>
          </Card>
          <Card className="transition-transform duration-300 hover:scale-105">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Peso Promedio (KG)</CardTitle>
              <Scale className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">542.7</div>
              <p className="text-xs text-muted-foreground">+8.5kg esta semana</p>
            </CardContent>
          </Card>
          <Card className="transition-transform duration-300 hover:scale-105">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Conversión de Alimento</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">6.1 : 1</div>
              <p className="text-xs text-muted-foreground">-0.2 del último ciclo</p>
            </CardContent>
          </Card>
          <Card className="transition-transform duration-300 hover:scale-105">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Alertas Activas</CardTitle>
              <AlertTriangle className="h-4 w-4 text-destructive" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">4</div>
              <p className="text-xs text-muted-foreground">Se requiere atención inmediata</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
          <Card className="lg:col-span-4">
            <CardHeader>
              <CardTitle className="font-headline">Aumento de Peso a lo Largo del Tiempo</CardTitle>
            </CardHeader>
            <CardContent className="pl-2">
              <DashboardCharts chartType="line" />
            </CardContent>
          </Card>
          <Card className="lg:col-span-3">
            <CardHeader>
              <CardTitle className="font-headline">Alertas de Salud</CardTitle>
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
          </Card>
        </div>
      </div>
    </section>
  );
}
