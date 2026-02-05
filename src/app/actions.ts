"use server";

import { generateTrendAnalysis } from "@/ai/flows/generate-trend-analysis";
import { z } from "zod";

const FormSchema = z.object({
  feedlotData: z.string().min(1, "Los datos de la engorda no pueden estar vacíos."),
});

type State = {
  trendAnalysis?: string;
  error?: string;
};

export async function runTrendAnalysis(
  prevState: State,
  formData: FormData
): Promise<State> {
  const validatedFields = FormSchema.safeParse({
    feedlotData: formData.get("feedlotData"),
  });

  if (!validatedFields.success) {
    return {
      error: "Datos inválidos. Por favor, revisa la información.",
    };
  }

  try {
    const result = await generateTrendAnalysis(validatedFields.data);
    return { trendAnalysis: result.trendAnalysis };
  } catch (e) {
    console.error(e);
    return { error: "No se pudo generar el análisis. Por favor, inténtalo de nuevo." };
  }
}
