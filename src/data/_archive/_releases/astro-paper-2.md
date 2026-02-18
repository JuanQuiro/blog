---
author: Sat Naing
pubDatetime: 2023-01-30T15:57:52.737Z
title: AstroPaper 2.0
slug: astro-paper-2
featured: false
ogImage: https://user-images.githubusercontent.com/53733092/215771435-25408246-2309-4f8b-a781-1f3d93bdf0ec.png
tags:
  - release
description: AstroPaper con las mejoras de Astro v2. Contenidos markdown con tipos seguros, corrección de errores y mejor experiencia de desarrollo.
---

Astro 2.0 ha sido lanzado con algunas características geniales, cambios disruptivos (breaking changes), mejoras en DX y mucho más. AstroPaper aprovecha estas funciones, especialmente la API de Content Collections.

![Presentando AstroPaper 2.0](https://user-images.githubusercontent.com/53733092/215771435-25408246-2309-4f8b-a781-1f3d93bdf0ec.png)

## Tabla de contenidos

## Características y Cambios

### Frontmatters con tipos seguros y esquema de blog redefinido

El frontmatter de los contenidos markdown de AstroPaper 2.0 ahora tiene tipos seguros gracias a las Colecciones de Contenido de Astro. El esquema del blog se define dentro del archivo `src/content/_schemas.ts`.

### Nuevo hogar para los contenidos del blog

Todos los posts del blog se movieron de `src/contents` al directorio `src/content/blog`.

### Nueva API de obtención de datos (Fetch)

Los contenidos ahora se obtienen con la función `getCollection`. Ya no es necesario especificar rutas relativas al contenido.

```ts
// método antiguo
- const postImportResult = import.meta.glob<MarkdownInstance<Frontmatter>>(
  "../contents/**/**/*.md",);

// nuevo método
+ const postImportResult = await getCollection("blog");
```

### Lógica de búsqueda modificada

En versiones anteriores, la búsqueda incluía `title`, `description` y `headings`. En AstroPaper v2, solo se buscan `title` y `description` mientras el usuario escribe, para mejorar resultados.

### Propiedades de Frontmatter renombradas

Se han renombrado las siguientes propiedades:

| Nombres antiguos | Nombres nuevos |
| ---------------- | -------------- |
| datetime         | pubDatetime    |
| slug             | postSlug       |

### Etiqueta predeterminada

Si un post no tiene etiquetas, se usará `others` por defecto. Puedes cambiarlo en `/src/content/_schemas.ts`.

### Nuevo esquema de color oscuro predefinido

AstroPaper v2 incluye un nuevo esquema oscuro (alto y bajo contraste) basado en el logo de Astro.

### Ordenación automática de clases

AstroPaper 2.0 incluye ordenación automática de clases con el plugin de [TailwindCSS para Prettier](https://tailwindcss.com/blog/automatic-class-sorting-with-prettier).

### Documentación y README actualizados

Todos los posts de [#docs](https://astro-paper.pages.dev/tags/docs/) y el [README](https://github.com/satnaing/astro-paper#readme) han sido actualizados.

## Corrección de errores

- Corrección de etiquetas rotas en la página de posts.
- El último elemento del breadcrumb en la página de etiquetas ahora está en minúsculas por consistencia.
- Se excluyen los borradores de la página de etiquetas.
- Corrección de error de valor onChange tras recargar página.
