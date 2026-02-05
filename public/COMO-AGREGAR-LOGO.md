# 🎨 CÓMO AGREGAR TU LOGO A LA PORTADA

## 📋 Pasos Simples:

### 1️⃣ Guarda tu logo
- Abre la imagen del logo que me mostraste (el toro con red neuronal azul/cyan)
- Haz clic derecho → "Guardar imagen como..."
- Nómbrala exactamente: **`logo-sync.png`**

### 2️⃣ Coloca el archivo en la carpeta correcta
Copia el archivo `logo-sync.png` a esta ubicación:

```
📁 GanaderoSyncOficcial
  └── 📁 public
      └── 🖼️ logo-sync.png  ← Coloca tu logo AQUÍ
```

**Ruta completa:**
```
c:\Users\Lucas\OneDrive\Escritorio\LUCIANO\Pagina GanaderoSync\GanaderoSyncOficcial\public\logo-sync.png
```

### 3️⃣ Recarga el navegador
Una vez que guardes el archivo, recarga la página en:
```
http://localhost:9002
```

## ✨ Resultado:
Tu logo aparecerá como una marca de agua gigante en el fondo de la portada con:
- 🌟 Efecto de resplandor cyan/azul
- 💫 Animación de pulso sutil
- 🎨 Opacidad perfecta para no opacar el contenido
- 📱 Tamaño responsive (500px en móvil, 700px en desktop)

## 🔧 Ajustes Opcionales:

Si quieres cambiar la opacidad del logo, edita el archivo:
`src/components/landing/hero.tsx`

Busca la línea:
```tsx
<div className="absolute inset-0 flex items-center justify-center opacity-8 pointer-events-none">
```

Cambia `opacity-8` por:
- `opacity-5` → Más sutil
- `opacity-10` → Más visible
- `opacity-15` → Muy visible

## ❓ ¿Problemas?

Si el logo no aparece:
1. Verifica que el nombre sea exactamente `logo-sync.png` (sin espacios)
2. Verifica que esté en la carpeta `public/`
3. Recarga la página con Ctrl+F5 (recarga forzada)
4. Revisa la consola del navegador (F12) para ver errores
