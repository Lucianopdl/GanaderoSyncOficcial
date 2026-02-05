"use client";

import { Bar, BarChart, Line, LineChart, ResponsiveContainer, XAxis, YAxis, Tooltip, Legend } from "recharts";
import { ChartContainer, ChartTooltipContent, ChartLegendContent } from "@/components/ui/chart";

const lineChartData = [
  { date: "2024-01", "Avg Weight": 400 },
  { date: "2024-02", "Avg Weight": 425 },
  { date: "2024-03", "Avg Weight": 455 },
  { date: "2024-04", "Avg Weight": 480 },
  { date: "2024-05", "Avg Weight": 510 },
  { date: "2024-06", "Avg Weight": 542 },
];

const chartConfig = {
  "Avg Weight": {
    label: "Peso Prom. (KG)",
    color: "hsl(var(--chart-1))",
  },
};

type DashboardChartsProps = {
    chartType: "line" | "bar";
}

export function DashboardCharts({ chartType }: DashboardChartsProps) {
    if(chartType === 'line'){
        return (
            <ChartContainer config={chartConfig} className="h-[250px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={lineChartData} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
                  <XAxis dataKey="date" tickLine={false} axisLine={false} tickMargin={8} />
                  <YAxis />
                  <Tooltip cursor={false} content={<ChartTooltipContent indicator="line" />} />
                  <Legend content={<ChartLegendContent />} />
                  <Line type="monotone" dataKey="Avg Weight" stroke="var(--color-avg-weight)" strokeWidth={2} dot={true} />
                </LineChart>
              </ResponsiveContainer>
            </ChartContainer>
          );
    }
    
    // Fallback for other chart types if needed in the future
    return null;
}
