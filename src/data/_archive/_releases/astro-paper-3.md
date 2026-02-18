---
author: Sat Naing
pubDatetime: 2023-09-25T10:25:54.547Z
title: AstroPaper 3.0
slug: astro-paper-v3
featured: false
ogImage: https://github.com/satnaing/astro-paper/assets/53733092/1ef0cf03-8137-4d67-ac81-84a032119e3a
tags:
  - release
description: "AstroPaper Versión 3: Elevando tu experiencia web con Astro v3 y View Transitions fluidas"
---

Estamos emocionados de anunciar el lanzamiento de AstroPaper v3, repleto de nuevas características y mejoras para elevar tu experiencia de desarrollo web.

![AstroPaper v3](@/assets/images/AstroPaper-v3.png)

## Tabla de contenidos

## Características y Cambios

### Integración con Astro v3

AstroPaper ahora soporta totalmente [Astro v3](https://astro.build/blog/astro-3/), ofreciendo mejor rendimiento y velocidad de renderizado.

Además, hemos añadido soporte para la API de [ViewTransitions](https://docs.astro.build/en/guides/view-transitions/) de Astro, permitiendo crear transiciones dinámicas y cautivadoras entre vistas.

En la "Sección Recientes", solo se mostrarán posts no destacados para evitar duplicidades y mejorar el soporte de ViewTransitions.

### Actualización de la lógica de generación de imágenes OG

Hemos actualizado la lógica para que sea más fiable y eficiente. Ahora soporta caracteres especiales en los títulos de los posts, asegurando previsualizaciones precisas en redes sociales.

`SITE.ogImage` es ahora opcional. Si no se especifica, se generará una automáticamente usando el título, descripción y URL del sitio.

### Meta etiqueta de tema

Se ha añadido la meta etiqueta `theme-color` para adaptarse dinámicamente a los cambios de tema.

## Otros Cambios

### Plugin de Prettier para Astro

Se instala por defecto para mantener el proyecto organizado.

### Cambios menores de estilo

Se solucionó el problema del ajuste de línea en bloques de código de una sola línea. Actualización del CSS de navegación para permitir más enlaces.

## Actualizar a AstroPaper v3

> Esta sección es solo para quienes actualizan desde versiones anteriores.

### Opción 1: Reinicio limpio (recomendado)

Dados los muchos cambios en las APIs de Astro, si no has hecho muchas personalizaciones, esta es la mejor ruta.

**_Paso 1: Conserva tus archivos actualizados_**
Como `/src/config.ts`, `/src/assets/`, `/content/blog/`, etc.

**_Paso 2: Reemplaza todo lo demás con AstroPaper v3_**

**_Paso 3: Actualizaciones de Esquema_**
`/src/content/_schemas.ts` ha sido reemplazado por `/src/content/config.ts`. El tipo `BlogFrontmatter` ahora es `CollectionEntry<"blog">["data"]`.

### Opción 2: Actualización usando Git

Consulta [este artículo](https://astro-paper.pages.dev/posts/como-actualizar-las-dependencias/#actualizacion-de-astropaper-usando-git) si prefieres usar Git y sabes resolver conflictos.

## Outro

¿Listo para explorar AstroPaper v3? Empieza a [usarlo aquí](https://github.com/satnaing/astro-paper). Si encuentras errores, abre un issue en GitHub.
