---
author: Alberto Perdomo
pubDatetime: 2024-09-08T20:58:52.737Z
modDatetime: 2025-03-22T09:25:46.734Z
title: Cómo añadir ecuaciones LaTeX en las publicaciones de Astro
slug: como-anadir-ecuaciones-latex-en-las-publicaciones-de-astro
tags:
  - docs
description: Aprende cómo añadir ecuaciones LaTeX en tus posts de Astro usando Markdown, KaTeX y plugins de remark/rehype.
---

Este documento demuestra cómo usar ecuaciones LaTeX en tus archivos Markdown para AstroPaper. LaTeX es un sistema de tipografía potente, frecuentemente utilizado para documentos matemáticos y científicos.

<figure>
  <img
    src="https://images.pexels.com/photos/22690748/pexels-photo-22690748/free-photo-of-close-up-of-complicated-equations-written-on-a-blackboard.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    alt="Primer plano de ecuaciones complejas en una pizarra, mostrando símbolos de química y matemáticas. Foto de stock"
  />
  <figcaption class="text-center">
    Foto de <a href="https://www.pexels.com/photo/close-up-of-complicated-equations-written-on-a-blackboard-22690748/">Vitaly Gariev</a>
  </figcaption>
</figure>

## Tabla de contenidos

## Instrucciones

En esta sección, encontrarás instrucciones sobre cómo añadir soporte para LaTeX en tus archivos Markdown para AstroPaper.

1. Instala los plugins necesarios de remark y rehype ejecutando:

   ```bash
   pnpm install rehype-katex remark-math katex
   ```

2. Actualiza la configuración de Astro para usar estos plugins:

   ```ts file=astro.config.ts
   // ...
   import remarkMath from "remark-math";
   import rehypeKatex from "rehype-katex";

   export default defineConfig({
     // ...
     markdown: {
       remarkPlugins: [
         remarkMath, // [!code ++]
         remarkToc,
         [remarkCollapse, { test: "Tabla de contenidos" }],
       ],
       rehypePlugins: [rehypeKatex], // [!code ++]
       shikiConfig: {
         // Para más temas, visita https://shiki.style/themes
         themes: { light: "min-light", dark: "night-owl" },
         wrap: false,
       },
     },
     // ...
   });
   ```

3. Importa el CSS de KaTeX en el archivo de diseño principal (layout):

   ```astro file=src/layouts/Layout.astro
   ---
   import { SITE } from "@config";

   // astro code
   ---

   <!doctype html>
   <!-- Otros elementos  -->
   <meta property="og:image" content={socialImageURL} />

   <!-- [!code highlight:4] -->
   <link
     rel="stylesheet"
     href="https://cdn.jsdelivr.net/npm/katex@0.15.2/dist/katex.min.css"
   />

   <body>
     <slot />
   </body>
   ```

4. Como último paso, añade un color de texto para `katex` en `typography.css`.

   ```css file=src/styles/typography.css
   @plugin "@tailwindcss/typography";

   @layer base {
     /* otras clases */

     /* Color de texto Katex */
     /* [!code highlight:3] */
     .prose .katex-display {
       @apply text-foreground;
     }

     /* ===== Bloques de código y resaltado de sintaxis ===== */
     /* otras clases */
   }
   ```

Y _voilà_, esta configuración te permite escribir ecuaciones LaTeX en tus archivos Markdown, las cuales se renderizarán correctamente cuando se construya el sitio.

---

## Ecuaciones en línea (Inline)

Las ecuaciones en línea se escriben entre signos de dólar simples `$...$`. Aquí tienes algunos ejemplos:

1. La famosa fórmula de equivalencia masa-energía: `$E = mc^2$`
2. La fórmula cuadrática: `$x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$`
3. La identidad de Euler: `$e^{i\pi} + 1 = 0$`

---

## Bloques de ecuaciones

Para ecuaciones más complejas o cuando quieras que la ecuación se muestre en su propia línea, usa signos de dólar dobles `$$...$$`:

La integral Gaussiana:

```bash
$$ \int_{-\infty}^{\infty} e^{-x^2} dx = \sqrt{\pi} $$
```

La definición de la función zeta de Riemann:

```bash
$$ \zeta(s) = \sum_{n=1}^{\infty} \frac{1}{n^s} $$
```

Ecuaciones de Maxwell en forma diferencial:

```bash
$$
\begin{aligned}
\nabla \cdot \mathbf{E} &= \frac{\rho}{\varepsilon_0} \\
\nabla \cdot \mathbf{B} &= 0 \\
\nabla \times \mathbf{E} &= -\frac{\partial \mathbf{B}}{\partial t} \\
\nabla \times \mathbf{B} &= \mu_0\left(\mathbf{J} + \varepsilon_0 \frac{\partial \mathbf{E}}{\partial t}\right)
\end{aligned}
$$
```

---

## Uso de símbolos matemáticos

LaTeX proporciona una amplia gama de símbolos matemáticos:

- Letras griegas: `$\alpha$`, `$\beta$`, `$\gamma$`, `$\delta$`, `$\epsilon$`, `$\pi$`
- Operadores: `$\sum$`, `$\prod$`, `$\int$`, `$\partial$`, `$\nabla$`
- Relaciones: `$\leq$`, `$\geq$`, `$\approx$`, `$\sim$`, `$\propto$`
- Símbolos lógicos: `$\forall$`, `$\exists$`, `$\neg$`, `$\wedge$`, `$\vee$`
