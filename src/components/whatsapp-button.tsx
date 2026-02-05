'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { WhatsAppIcon } from '@/components/icons';

export function WhatsAppButton() {
  // IMPORTANTE: Reemplaza "TU_NUMERO_AQUI" con tu número de WhatsApp.
  // Debe incluir el código de país, sin el signo '+', espacios ni guiones.
  // Ejemplo para México: 5211234567890
  // Ejemplo para España: 34123456789
  const phoneNumber = "TU_NUMERO_AQUI"; 
  
  if (phoneNumber === "TU_NUMERO_AQUI") {
    // No renderizar el botón si el número no está configurado para evitar errores.
    return null;
  }

  const message = "Hola, estoy interesado en GanaderoSync y me gustaría obtener más información.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <Button
      asChild
      className="fixed bottom-6 right-6 z-50 h-16 w-16 rounded-full bg-[#25D366] text-white shadow-lg transition-transform duration-300 ease-in-out hover:scale-110 hover:bg-[#128C7E]"
      aria-label="Contactar por WhatsApp"
    >
      <Link href={whatsappUrl} target="_blank" rel="noopener noreferrer">
        <WhatsAppIcon className="h-8 w-8" />
      </Link>
    </Button>
  );
}
