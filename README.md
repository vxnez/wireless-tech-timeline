# Onda · Línea del tiempo de las tecnologías inalámbricas

Aplicación web interactiva que recorre **164 años de ingeniería inalámbrica**, desde las ecuaciones de Maxwell (1864) hasta Wi-Fi 8 (802.11bn, en estandarización). Cuarenta hitos tipados, cuatro dominios tecnológicos y siete eras históricas en una interfaz editorial con estética de instrumento de medida.

> **Demo:** _pendiente de despliegue_
> **Repositorio:** _pendiente de publicación_

---

## 1. Qué incluye

- **40 hitos cronológicos** con año, estándar o protocolo, frecuencia/espectro, velocidad teórica, resumen, detalle técnico, impacto industrial y etiquetas.
- **Cobertura completa** de los cuatro dominios solicitados:
  - **Redes móviles:** NMT, AMPS, GSM, LTE, LTE-Advanced, 5G NR, 5G-Advanced y 6G.
  - **Wi-Fi:** IEEE 802.11 (1997), 802.11b/a/g, 802.11n/ac/ax/be y 802.11bn, incluyendo la liberación de bandas ISM y de 6 GHz.
  - **Corto alcance / IoT:** Bluetooth 1.0 → 6.0, LE Audio/Auracast, Zigbee, Thread, Matter, NFC y UWB.
  - **Satelital / Radio:** Maxwell, Hertz, Marconi, transatlántico, AM, FM, transistor, Sputnik y Telstar.
- **Búsqueda instantánea** por título, estándar, espectro, velocidad, año, categoría o etiqueta. Insensible a mayúsculas y acentos.
- **Filtros combinables** por dominio y por era, con contadores que reflejan el resto de filtros activos.
- **Navegación por décadas**: gráfico de barras del "espectro cronológico" que resume la densidad de hitos por década, coloreado por dominio dominante, y salto suave a cada sección.
- **Ficha técnica modal** con especificaciones completas, navegación anterior/siguiente y atajos de teclado.
- **Orden cronológico reversible** (1864 → 2028 / 2028 → 1864).
- **Diseño responsivo** mobile-first, con eje temporal que se adapta de dos columnas a una sola columna con espina lateral.
- **Accesibilidad**: HTML semántico, diálogo modal nativo, foco visible, `aria-live` para resultados, enlace de salto, soporte de `prefers-reduced-motion` y contraste alto.

## 2. Stack

| Capa | Tecnología |
| --- | --- |
| UI | React 19 + TypeScript (modo `strict`) |
| Build | Vite 8 |
| Animación | Framer Motion + transiciones CSS nativas |
| Estilos | CSS modular por componente + design tokens |
| Datos | TypeScript estático desacoplado (`src/data/`) |
| Despliegue | Vercel (build estático, SPA fallback) |

Sin dependencias de UI pesadas, sin CSS-in-JS en runtime y sin backend. El bundle se sirve como estáticos desde el CDN de Vercel.

## 3. Estructura

```text
wireless-tech-timeline/
├── public/
│   ├── favicon.svg
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── Header.tsx          # Portada, buscador y telemetría del archivo
│   │   ├── FilterBar.tsx       # Filtros por dominio y era, orden, reset
│   │   ├── Timeline.tsx        # Agrupación por era/década, scrubber y eje
│   │   ├── MilestoneCard.tsx   # Tarjeta resumen de cada hito
│   │   └── DetailModal.tsx     # Ficha técnica en <dialog> nativo
│   ├── data/
│   │   └── wirelessMilestones.ts  # Base de conocimiento + eras y categorías
│   ├── lib/
│   │   └── milestoneMeta.ts    # Etiquetas y descripciones de estado
│   ├── styles/
│   │   ├── tokens.css          # Variables de diseño
│   │   └── base.css            # Reset, tipografía y utilidades
│   ├── types/
│   │   └── timeline.ts         # Interfaces del dominio
│   ├── App.tsx                 # Estado global, filtrado y agrupación
│   ├── App.css
│   ├── index.css
│   └── main.tsx
├── index.html
├── package.json
├── tsconfig*.json
├── vercel.json
└── README.md
```

## 4. Modelo de datos

Cada hito implementa `Milestone` (`src/types/timeline.ts`):

```ts
interface Milestone {
  id: string
  year: number
  title: string
  category: 'mobile' | 'wifi' | 'iot' | 'radio'
  standard: string
  frequency: string
  maxSpeed: string
  summary: string
  technicalDetails: string
  impact: string
  tags: string[]
  status: 'historical' | 'current' | 'emerging'
}
```

Para añadir un hito basta con insertar un objeto en `milestones` manteniendo el orden ascendente por año. La interfaz calcula automáticamente:

- la era a la que pertenece (`getEraForYear`),
- su grupo de década,
- los contadores de los filtros,
- las barras del navegador cronológico,
- los índices y la navegación anterior/siguiente.

No hay datos duplicados entre componentes: la fuente de verdad es única.

## 5. Desarrollo local

Requisitos: Node.js 20+ y npm 10+.

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # tsc -b && vite build  → dist/
npm run preview    # sirve el build de producción
npm run lint       # oxlint
```

## 6. Criterio editorial de los datos

- Se registra el **año de demostración, publicación o primer despliegue** del hito, no el de su idea original cuando ambos difieren de forma relevante.
- Las **velocidades son teóricas de referencia** del estándar (pico de capa física con la mejor configuración de MIMO, ancho de canal y modulación). No representan rendimiento real de usuario.
- Las **frecuencias** indican la banda principal de operación; muchos estándares son multibanda.
- Los hitos con estado `emerging` (6G, Wi-Fi 8) describen objetivos publicados por ITU-R, 3GPP o IEEE, no productos disponibles. La interfaz lo advierte explícitamente.
- Fuentes de referencia: IEEE 802.11 Working Group, 3GPP Releases 8–18, ITU-R IMT-2030 (M.2160), Wi-Fi Alliance, Bluetooth SIG, Connectivity Standards Alliance, FCC Part 15 e ISO/IEC 18092.

## 7. Decisiones de diseño

- **Identidad editorial/técnica**: tipografía serif variable (Fraunces) para titulares, Inter para lectura e IBM Plex Mono para datos; retícula de instrumento, reglas de medida y acentos espectrales por dominio. Se evita la plantilla genérica de "timeline con tarjetas redondeadas".
- **Eje con rail de año**: en escritorio el año vive en una columna fija junto a la línea vertical; en móvil se integra en la tarjeta y la línea se desplaza al borde izquierdo.
- **Scrubber de décadas**: codifica densidad y dominio con longitud y color, y funciona como índice navegable. Las décadas sin hitos se muestran atenuadas para no falsear el registro.
- **Modal nativo `<dialog>`**: foco atrapado, fondo inerte y cierre con `Esc` sin dependencias externas.
- **Framer Motion con moderación**: revelado de tarjetas al entrar en viewport y cabeceras de era. El resto son transiciones CSS para mantener el bundle y el hilo principal ligeros.
- **Estado derivado**: los filtros se combinan con `useMemo`; no hay efectos que sincronicen listas ni estado duplicado.

## 8. Rendimiento y calidad

- Build de producción estático, sin hidratación ni servidor.
- Fuentes con `display=swap` y `preconnect`; fallback a fuentes del sistema.
- Imágenes: solo un favicon SVG; la identidad visual se resuelve con CSS.
- `content-visibility` no se aplica porque el número de tarjetas es acotado (40) y se prefiere un scroll consistente.
- TypeScript estricto + `noUnusedLocals` + `noUnusedParameters`; el build falla ante cualquier error de tipos.

## 9. Despliegue en Vercel

El proyecto incluye `vercel.json` con framework `vite`, salida en `dist`, cabeceras de caché inmutable para `/assets/*` y rewrite SPA.

```bash
npm i -g vercel
vercel login
vercel --prod
```

También puede importarse el repositorio desde el panel de Vercel; la configuración se detecta automáticamente.

## 10. Licencia

Código publicado con fines educativos. El texto histórico es original y se apoya en las especificaciones públicas citadas; las marcas mencionadas pertenecen a sus titulares.
