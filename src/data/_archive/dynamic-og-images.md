---
author: Sat Naing
pubDatetime: 2022-12-28T04:59:04.866Z
modDatetime: 2025-03-12T13:39:20.763Z
title: Generación dinámica de imágenes OG en las publicaciones de AstroPaper
slug: generacion-dinamica-de-imagenes-og-en-las-publicaciones-de-astropaper
featured: false
draft: false
tags:
  - docs
  - release
description: Nueva característica en AstroPaper v1.4.0, introduciendo la generación dinámica de imágenes OG para publicaciones del blog.
---

Nueva característica en AstroPaper v1.4.0, introduciendo la generación dinámica de imágenes OG para publicaciones del blog.

## Tabla de contenidos

## Intro

Las imágenes OG (también conocidas como Imágenes Sociales) juegan un papel importante en la interacción en redes sociales. En caso de que no sepas qué significa imagen OG, es la imagen que se muestra cada vez que compartimos la URL de nuestro sitio web en plataformas como Facebook, Discord, etc.

> La imagen social utilizada para Twitter técnicamente no se llama imagen OG. Sin embargo, en este post utilizaré el término imagen OG para todos los tipos de imágenes sociales.

## Imagen OG por defecto/estática (la forma antigua)

AstroPaper ya proporcionaba una manera de añadir una imagen OG a un post. El autor puede especificarla en el frontmatter como `ogImage`. Si no se define, se utiliza una imagen por defecto (en este caso `public/astropaper-og.jpg`). El problema es que esta imagen es estática, lo que significa que todos los posts sin imagen propia usarían la misma a pesar de tener títulos o contenidos muy diferentes.

## Imagen OG Dinámica

Generar una imagen OG dinámica para cada post permite al autor evitar tener que especificar una para cada artículo. Además, evita que la imagen de respaldo sea idéntica en todas las publicaciones.

En AstroPaper v1.4.0, se utiliza el paquete [Satori](https://github.com/vercel/satori) de Vercel para esta generación.

Las imágenes OG dinámicas se generarán en tiempo de compilación (build time) para los posts que:

- no incluyan una `ogImage` en el frontmatter.
- no estén marcados como borradores (`draft`).

## Anatomía de la imagen OG dinámica de AstroPaper

Incluye _el título del post_, _el nombre del autor_ y _el título del sitio_. El nombre del autor y el título del sitio se obtienen de `SITE.author` y `SITE.title` en el archivo **"src/config.ts"**. El título se genera a partir del `title` del frontmatter.

![Enlace de ejemplo a imagen OG dinámica](https://user-images.githubusercontent.com/53733092/209704501-e9c2236a-3f4d-4c67-bab3-025aebd63382.png)

### Problemas con caracteres no latinos

Los títulos con caracteres no latinos no se mostrarán correctamente por defecto. Para solucionar esto, debemos reemplazar `fontsConfig` dentro de `loadGoogleFont.ts` con tu fuente preferida.

```ts file=src/utils/loadGoogleFont.ts
async function loadGoogleFonts(
  text: string
): Promise<
  Array<{ name: string; data: ArrayBuffer; weight: number; style: string }>
> {
  const fontsConfig = [
    {
      name: "Noto Sans JP",
      font: "Noto+Sans+JP",
      weight: 400,
      style: "normal",
    },
    // ...
  ];
  // ...
}
```

> Mira [este PR](https://github.com/satnaing/astro-paper/pull/318) para más detalles.

## Compromiso (Trade-off)

Aunque es una gran característica, hay un compromiso. Cada imagen tarda aproximadamente un segundo en generarse. Esto puede no notarse al principio, pero a medida que crezca el número de posts, quizás prefieras desactivarlo. El tiempo de build aumentará de forma lineal.

Ejemplo: Si una imagen tarda un segundo, 60 imágenes tardarán un minuto, y 600 imágenes tardarán aproximadamente 10 minutos.

Issue relacionado: [#428](https://github.com/satnaing/astro-paper/issues/428)

## Limitaciones

Al momento de escribir esto, [Satori](https://github.com/vercel/satori) es bastante nuevo.

- Los lenguajes RTL aún no están soportados.
- [Usar emojis](https://github.com/vercel/satori#emojis) en el título puede ser algo complicado.
