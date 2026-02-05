'use server';

/**
 * @fileOverview Analyzes feedlot data and predicts trends related to weight gain, mortality, and stock valuation.
 *
 * - generateTrendAnalysis - A function that handles the trend analysis process.
 * - GenerateTrendAnalysisInput - The input type for the generateTrendAnalysis function.
 * - GenerateTrendAnalysisOutput - The return type for the generateTrendAnalysis function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateTrendAnalysisInputSchema = z.object({
  feedlotData: z.string().describe('Feedlot data including weight gain, mortality, and stock valuation.'),
});
export type GenerateTrendAnalysisInput = z.infer<typeof GenerateTrendAnalysisInputSchema>;

const GenerateTrendAnalysisOutputSchema = z.object({
  trendAnalysis: z.string().describe('AI-powered trend analysis and predictions.'),
});
export type GenerateTrendAnalysisOutput = z.infer<typeof GenerateTrendAnalysisOutputSchema>;

export async function generateTrendAnalysis(input: GenerateTrendAnalysisInput): Promise<GenerateTrendAnalysisOutput> {
  return generateTrendAnalysisFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateTrendAnalysisPrompt',
  input: {schema: GenerateTrendAnalysisInputSchema},
  output: {schema: GenerateTrendAnalysisOutputSchema},
  prompt: `Eres un experto en gestión de engordas y análisis de datos. Analiza los siguientes datos de la engorda y predice tendencias relacionadas con el aumento de peso, la mortalidad y la valoración del ganado.

Datos de la Engorda: {{{feedlotData}}}

Proporciona un análisis de tendencias detallado y perspectivas accionables para optimizar las operaciones de la engorda.`,
});

const generateTrendAnalysisFlow = ai.defineFlow(
  {
    name: 'generateTrendAnalysisFlow',
    inputSchema: GenerateTrendAnalysisInputSchema,
    outputSchema: GenerateTrendAnalysisOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
