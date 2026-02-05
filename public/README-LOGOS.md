# Cómo Agregar Tu Logo Personalizado

## Opción 1: Logo como Marca de Agua de Fondo (Actual)

Actualmente, el Hero usa el logo SVG de GanaderoSync como marca de agua de fondo con opacidad muy baja (5%).

Si quieres usar tu propio logo como marca de agua:

1. Coloca tu archivo de logo en esta carpeta `public/` con el nombre `logo.png` o `logo.svg`
2. Actualiza el componente Hero en `src/components/landing/hero.tsx`
3. Reemplaza la línea que usa `<GanaderoSyncLogo>` con:

```tsx
{/* Logo watermark in background */}
<div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
  <Image
    src="/logo.png"  // o "/logo.svg"
    alt="GanaderoSync Logo"
    width={600}
    height={600}
    className="object-contain"
  />
</div>
```

## Opción 2: Logo en el Header

El logo actual en el header es un componente SVG. Para usar tu logo:

1. Coloca tu logo en `public/logo-header.png` (o .svg)
2. En `src/components/landing/header.tsx`, reemplaza `<GanaderoSyncLogo>` con:

```tsx
<Image
  src="/logo-header.png"
  alt="GanaderoSync"
  width={24}
  height={24}
  className="object-contain"
/>
```

## Formatos Recomendados

- **PNG**: Para logos con transparencia
- **SVG**: Para logos vectoriales (mejor calidad en todos los tamaños)
- **Tamaño recomendado**: 512x512px o mayor para PNG

## Ubicación de Archivos

Todos los archivos estáticos deben ir en la carpeta `public/` en la raíz del proyecto.
