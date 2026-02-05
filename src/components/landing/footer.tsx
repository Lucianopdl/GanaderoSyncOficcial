import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Twitter, Linkedin, Facebook, Mail, MapPin, Phone } from "lucide-react";

const footerLinks = {
  product: [
    { label: "Características", href: "#features" },
    { label: "Panel de Control", href: "#dashboard" },
    { label: "Análisis IA", href: "#ai-analysis" },
    { label: "Precios", href: "#pricing" },
  ],
  company: [
    { label: "Sobre Nosotros", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Carreras", href: "#" },
    { label: "Contacto", href: "#" },
  ],
  legal: [
    { label: "Privacidad", href: "#" },
    { label: "Términos", href: "#" },
    { label: "Cookies", href: "#" },
    { label: "Licencias", href: "#" },
  ],
};

export function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-slate-100/50 via-slate-50 to-white border-t border-slate-200" role="contentinfo">
      {/* Degradado de transición desde Pricing */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-slate-100/30 to-transparent pointer-events-none" />

      {/* Decorative gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-transparent to-blue-500/5 pointer-events-none" />

      <div className="container relative py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-3 mb-4 group" aria-label="GanaderoSync - Software de gestión de feedlot">
              <div className="relative w-10 h-10 rounded-lg overflow-hidden bg-white shadow-md group-hover:shadow-lg transition-all duration-300">
                <Image
                  src="/logo.png"
                  alt="GanaderoSync Logo"
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
              <span className="font-headline text-lg font-bold text-slate-900">
                GanaderoSync Global
              </span>
            </Link>
            <p className="text-sm text-slate-600 mb-6 max-w-sm leading-relaxed">
              Software líder en <strong className="text-slate-900">gestión de feedlot</strong> y <strong className="text-slate-900">ganadería inteligente</strong>.
              Optimiza tu producción con IA, trazabilidad completa y control total de tu operación ganadera.
            </p>
            <div className="flex flex-col gap-2 text-sm text-slate-700">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-cyan-600" />
                <a href="mailto:info@ganaderosync.com" className="hover:text-cyan-600 transition-colors font-medium" aria-label="Enviar email a GanaderoSync">
                  info@ganaderosync.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-cyan-600" />
                <a href="tel:+1234567890" className="hover:text-cyan-600 transition-colors font-medium" aria-label="Llamar a GanaderoSync">
                  +1 (234) 567-890
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-cyan-600" />
                <span className="font-medium">Operaciones Globales - Servicio en Latinoamérica</span>
              </div>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="font-bold text-slate-900 mb-4 text-base">Producto</h3>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-700 hover:text-cyan-600 transition-colors duration-300 inline-flex items-center group font-medium"
                  >
                    <span className="w-0 h-px bg-cyan-600 group-hover:w-4 transition-all duration-300 mr-0 group-hover:mr-2" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-bold text-slate-900 mb-4 text-base">Compañía</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-700 hover:text-cyan-600 transition-colors duration-300 inline-flex items-center group font-medium"
                  >
                    <span className="w-0 h-px bg-cyan-600 group-hover:w-4 transition-all duration-300 mr-0 group-hover:mr-2" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="font-bold text-slate-900 mb-4 text-base">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-700 hover:text-cyan-600 transition-colors duration-300 inline-flex items-center group font-medium"
                  >
                    <span className="w-0 h-px bg-cyan-600 group-hover:w-4 transition-all duration-300 mr-0 group-hover:mr-2" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-slate-300 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-700 font-medium">
            © {new Date().getFullYear()} GanaderoSync Global. Todos los derechos reservados.
          </p>

          <div className="flex gap-2">
            <Button
              variant="ghost"
              size="icon"
              asChild
              className="hover:bg-primary/10 hover:text-primary transition-all duration-300 hover:scale-110"
            >
              <Link href="#" aria-label="Twitter">
                <Twitter className="h-4 w-4" />
              </Link>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              asChild
              className="hover:bg-primary/10 hover:text-primary transition-all duration-300 hover:scale-110"
            >
              <Link href="#" aria-label="LinkedIn">
                <Linkedin className="h-4 w-4" />
              </Link>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              asChild
              className="hover:bg-primary/10 hover:text-primary transition-all duration-300 hover:scale-110"
            >
              <Link href="#" aria-label="Facebook">
                <Facebook className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}
