---
pubDatetime: 2025-03-08T08:18:19.693Z
title: AstroPaper 5.0
slug: astro-paper-v5
featured: true
ogImage: ../../../assets/images/AstroPaper-v5.png
tags:
  - release
description: "AstroPaper v5: manteniendo el aspecto limpio, actualizaciones bajo el capó."
---

Por fin, el esperado AstroPaper v5 ya está aquí. Mantiene su diseño minimalista y limpio, pero con actualizaciones internas significativas.

![AstroPaper v5](@/assets/images/AstroPaper-v5.png)

## Tabla de contenidos

## Cambios Principales

### Actualización a Astro v5

AstroPaper ahora funciona con Astro v5, trayendo todas sus nuevas características y mejoras.

### Tailwind v4

Hemos actualizado a Tailwind v4. El archivo `tailwind.config.js` se ha eliminado y toda la configuración está ahora en `src/styles/global.css`. Los estilos de tipografía se han movido a `src/styles/typography.css`.

Además, la paleta de colores de la interfaz se ha simplificado a solo cinco colores básicos para ambos temas (claro y oscuro).

### Adiós a React + Fuse.js, hola Pagefind

En versiones anteriores usábamos React y Fuse.js para la búsqueda. En v5, los hemos reemplazado por [Pagefind](https://pagefind.app/), una herramienta de búsqueda estática. Ahora se indexa todo el contenido, no solo títulos y descripciones.

### Alias de importación actualizados

Cambiamos de `@directorio` a `@/directorio` para las importaciones.

### Cambio a `pnpm`

AstroPaper ahora utiliza `pnpm` para una gestión de paquetes más rápida y eficiente.

### Componente SVG de Astro

Reemplazamos los SVGs inline por el componente experimental [SVG de Astro](https://docs.astro.build/en/reference/experimental-flags/svg/), haciendo el código más limpio.

### Separación de Constantes y Configuración

`src/config.ts` ahora solo contiene el objeto `SITE`. Las constantes como `LOCALE`, `SOCIALS` y `SHARE_LINKS` se han movido a `src/constants.ts`.

## Otros cambios notables

- El directorio de posts cambió de `src/content/blog/` a `src/data/blog/`.
- El archivo de definición de colecciones es ahora `src/content.config.ts`.
- Eliminada la fuente `IBM Plex Mono` en favor de la fuente mono del sistema.
- Lógica del botón "Volver" actualizada para usar la sesión del navegador.

## Outtro

AstroPaper v5 trae muchos cambios internos pero mantiene la experiencia central. ¡Disfruta de una plataforma de blogging más eficiente con el diseño minimalista de siempre!

Si te gusta el tema, considera darle una estrella en GitHub o invitarme a un café. ¡Gracias por tu apoyo!
