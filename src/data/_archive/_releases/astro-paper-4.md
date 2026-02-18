---
author: Sat Naing
pubDatetime: 2024-01-04T09:30:41.816Z
title: AstroPaper 4.0
slug: "astro-paper-v4"
featured: false
ogImage: ../../../assets/images/AstroPaper-v4.png
tags:
  - release
description: "AstroPaper v4: asegurando una experiencia de blogging más fluida y rica en funciones."
---

¡Hola a todos! ¡Feliz Año Nuevo 🎉 y lo mejor para 2024! Estamos emocionados de anunciar AstroPaper v4, una actualización significativa con nuevas funciones y mejoras. ¡Gracias a todos los colaboradores!

![AstroPaper v4](@/assets/images/AstroPaper-v4.png)

## Tabla de contenidos

## Cambios Principales

### Actualización a Astro v4

AstroPaper ahora aprovecha la potencia de Astro v4. Es una actualización sutil que no debería romper la mayoría de los sitios.

### Reemplazo de `postSlug` por el `slug` de contenido de Astro

`postSlug` ya no está disponible. Ahora usamos la función de `slug` nativa de las Colecciones de Contenido de Astro.

```bash
---
title: AstroPaper 4.0
slug: "astro-paper-v4" # si no se especifica, será el nombre del archivo.
---
```

Si el campo `slug` se omite, se usará el nombre del archivo markdown. No puede ser un string vacío.

## Nuevas Funciones

### Fragmentos de código (snippets) para creación de contenido

AstroPaper incluye ahora snippets de VSCode para nuevos posts, eliminando la necesidad de copiar manualmente el frontmatter y la estructura básica.

### Fecha de modificación en los posts

Muestra cuándo se actualizó por última vez un artículo (`modDatetime`). Esto mejora la confianza del usuario y el SEO. Los posts se ordenan ahora teniendo en cuenta tanto la fecha de publicación como la de modificación.

### Botón de "Volver arriba"

Mejora la navegación en los posts largos con un nuevo botón para volver rápidamente al principio de la página.

### Paginación en páginas de etiquetas

Añadida paginación para las listas de posts por etiqueta, facilitando la exploración de contenido relacionado sin abrumar al lector.

### Generación dinámica de robots.txt

Ahora se genera automáticamente, incluyendo la URL del sitemap, dándote más control sobre la indexación.

### Archivo Docker-Compose

Facilita la gestión y despliegue del entorno de AstroPaper.

## Refactorización y Correcciones

### Nombres de etiquetas sin slugificar en títulos

Para mejorar la claridad y el SEO, los títulos en la página de etiquetas muestran el nombre original (`Etiqueta: Mi Etiqueta`) en lugar de la versión con guiones.

### Uso de 100svh para Min-Height

Mejor experiencia de usuario en dispositivos móviles.

### URL del sitio como fuente única de verdad

Configuración más sencilla y consistente de la URL base.

### Correcciones visuales

Solucionado el problema de texto invisible en bloques de código en modo claro y mejor visualización de caracteres Unicode en el breadcrumb.

## Outtro

Esperamos que estas actualizaciones mejoren tu experiencia con AstroPaper. ¡Gracias por vuestro apoyo y feliz blogging!
