---
title: Cómo actualizar las dependencias de AstroPaper
author: Sat Naing
pubDatetime: 2023-07-20T15:33:05.569Z
slug: como-actualizar-las-dependencias
featured: false
draft: false
ogImage: ../../assets/images/forrest-gump-quote.png
tags:
  - FAQ
description: Cómo actualizar las dependencias del proyecto y la plantilla de AstroPaper.
---

Actualizar las dependencias de un proyecto puede ser tedioso. Sin embargo, descuidarlas tampoco es una buena idea 😬. En este post, compartiré cómo suelo actualizar mis proyectos, usando AstroPaper como ejemplo. No obstante, estos pasos se pueden aplicar a cualquier otro proyecto de JS/Node.

![Cita falsa de Forrest Gump](@/assets/images/forrest-gump-quote.png)

## Tabla de contenidos

## Actualización de las dependencias del paquete

Hay varias formas de actualizar las dependencias. Una forma es hacerlo manualmente para cada paquete usando `npm install nombre-del-paquete@latest`. Es el método más directo, pero quizás no el más eficiente.

Mi recomendación es usar el paquete [npm-check-updates](https://www.npmjs.com/package/npm-check-updates).

Primero, instala el paquete de forma global:

```bash
npm install -g npm-check-updates
```

Antes de hacer cualquier cambio, verifica qué paquetes pueden actualizarse:

```bash
ncu
```

La mayoría de las veces, las dependencias de tipo "patch" (parche) pueden actualizarse sin afectar al proyecto. Suelo hacerlo ejecutando `ncu -i --target patch` o `ncu -u --target patch`. La opción `-i` permite elegir interactivamente qué paquete actualizar.

La siguiente parte es actualizar las dependencias "minor". Normalmente no rompen el proyecto, pero siempre es bueno revisar las notas de lanzamiento (release notes).

```bash
ncu -i --target minor
```

Por último, pueden existir actualizaciones "major". Compruébalas con:

```bash
ncu -i
```

Si hay actualizaciones de versiones mayores, ten mucho cuidado, ya que es probable que rompan el proyecto. Lee las notas de lanzamiento con atención y realiza los cambios necesarios en tu código.

Si tras ejecutar `ncu -i` no aparecen más paquetes, _**¡Felicidades!**_ has actualizado con éxito todas las dependencias.

## Actualización de la plantilla AstroPaper

Como cualquier proyecto de código abierto, AstroPaper evoluciona con correcciones de errores y nuevas funciones. Si usas AstroPaper como plantilla, querrás estar al día.

Dado que probablemente ya hayas modificado la plantilla a tu gusto, no hay una forma única perfecta de actualizar. Aquí tienes algunos consejos para hacerlo sin romper tu repositorio.

### Archivos y directorios a tener en cuenta

Normalmente, no querrás sobrescribir directorios donde tienes contenido propio, como `src/content/blog/`, `src/config.ts`, `src/pages/about.md`, y otros estilos en `public/` o `src/styles/base.css`.

Cuanto menos modifiques la base del tema, más fácil será actualizar.

Puedes reemplazar cada archivo manualmente uno por uno, o usar la magia de Git.

### Actualización de AstroPaper usando Git

**¡IMPORTANTE!**

> Solo haz esto si sabes cómo resolver conflictos de fusión (merge conflicts). De lo contrario, es mejor hacerlo manualmente.

Primero, añade AstroPaper como remoto:

```bash
git remote add astro-paper https://github.com/satnaing/astro-paper.git
```

Crea una nueva rama para realizar la actualización:

```bash
git checkout -b build/update-astro-paper
```

Luego, trae los cambios de AstroPaper:

```bash
git pull astro-paper main
```

Si aparece el error `fatal: refusing to merge unrelated histories`, soluciónalo con:

```bash
git pull astro-paper main --allow-unrelated-histories
```

Tras ejecutar este comando, es probable que encuentres conflictos. Deberás resolverlos manualmente y ajustar el código según tus necesidades.

Finalmente, prueba tu blog a fondo para asegurar que todo funciona: artículos, componentes y personalizaciones.

Cuando estés satisfecho, fusiona la rama en tu rama principal. ¡Listo! Tu blog está actualizado. 🎉

## Conclusión

En este artículo, he compartido mis procesos para actualizar dependencias y la plantilla AstroPaper. Espero que te sea de gran utilidad.

Si tienes otros métodos o mejoras, no dudes en iniciar una discusión en el repositorio o abrir un issue. ¡Toda ayuda es bienvenida!

Gracias por leer y ¡mucha suerte con tus proyectos!
