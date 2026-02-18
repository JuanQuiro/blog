---
title: Plugin de Tipografía de Tailwind
author: Sat Naing
pubDatetime: 2022-07-05T02:05:51Z
featured: false
draft: false
tags:
  - TypeScript
  - Astro
description: "POST DE EJEMPLO: Sobre el plugin Tailwind Typography y cómo puedes usarlo eficazmente."
---

> Este artículo es de [TailwindLabs](https://tailwindcss-typography.vercel.app/). He incluido este artículo para demostrar cómo puedes escribir posts/artículos usando el tema AstroPaper.

Por defecto, Tailwind elimina todos los estilos predeterminados del navegador de los párrafos, encabezados, listas y más. Esto es muy útil para construir interfaces de usuario de aplicaciones porque pasas menos tiempo deshaciendo estilos del navegador, pero cuando _realmente_ estás tratando de dar estilo a un contenido que proviene de un editor de texto enriquecido o un archivo Markdown, puede ser sorprendente.

Recibimos muchas quejas al respecto, con gente preguntando cosas como:

> ¿Por qué Tailwind elimina los estilos predeterminados de mis elementos `h1`? ¿Cómo desactivo esto?

No estamos convencidos de que simplemente desactivar nuestros estilos base sea lo que realmente quieres. No quieres tener que eliminar márgenes molestos cada vez que usas un elemento `p` en tu panel de control. Y dudo que realmente quieras que tus posts usen los estilos predeterminados del navegador; quieres que se vean _increíbles_, no horribles.

El plugin `@tailwindcss/typography` es nuestro intento de darte lo que _realmente_ quieres, sin las desventajas de desactivar los estilos base.

Añade una nueva clase `prose` que puedes aplicar a cualquier bloque de HTML puro para convertirlo en un documento hermoso y bien formateado:

```html
<article class="prose">
  <h1>Pan de ajo con queso: Lo que nos dice la ciencia</h1>
  <p>
    Durante años, los padres han defendido los beneficios para la salud de comer
    pan de ajo con queso a sus hijos...
  </p>
  <!-- ... -->
</article>
```

Para más información, consulta el [README del plugin](https://github.com/tailwindcss/typography/blob/master/README.md).

---

## Qué esperar de aquí en adelante

Lo que sigue es solo un montón de tonterías que he escrito para probar el plugin. Incluye cada elemento tipográfico sensato que se me ocurrió, como **texto en negrita**, listas, bloques de código, citas e _incluso cursiva_.

### La tipografía debería ser fácil

Esperamos que si hemos hecho bien nuestro trabajo, esto se vea bastante razonable.

Algo que una persona sabia me dijo una vez sobre la tipografía es:

> La tipografía es muy importante si no quieres que tus cosas parezcan basura. Hazla bien y no será mala.

Es importante que las imágenes también se vean bien por defecto:

<figure>
  <img
    src="https://images.unsplash.com/photo-1556740758-90de374c12ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"
    alt=""
  />
  <figcaption>
    Contrario a la creencia popular, Lorem Ipsum no es simplemente texto aleatorio. Tiene sus raíces en la literatura latina clásica del 45 a.C.
  </figcaption>
</figure>

## ¿Qué pasa si apilamos encabezados?

A veces tienes encabezados uno debajo del otro. En esos casos, a menudo tienes que quitar el margen superior del segundo encabezado porque suele verse mejor más cerca.

### Cuándo un encabezado va tras un párrafo…

Necesitamos un poco más de espacio. Veamos cómo se vería una lista más compleja.

- **A menudo hago esto donde los elementos de la lista tienen encabezados.**

  Por alguna razón creo que esto queda genial, aunque es un poco molesto ajustar bien los estilos.

---

## El código debería verse bien por defecto.

La mayoría usará [highlight.js](https://highlightjs.org/) o [Prism](https://prismjs.com/), pero no está de más que se vean bien sin resaltado.

```js
module.exports = {
  purge: [],
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
};
```

## Hay otros elementos que necesitamos estilizar

No olvidemos los enlaces, como [este enlace al sitio de Tailwind CSS](https://tailwindcss.com).

También incluimos estilos para tablas:

| Luchador                | Origen       | Finalizador        |
| ----------------------- | ------------ | ------------------ |
| Bret "The Hitman" Hart  | Calgary, AB  | Sharpshooter       |
| Stone Cold Steve Austin | Austin, TX   | Stone Cold Stunner |
| Randy Savage            | Sarasota, FL | Elbow Drop         |

## Outro

Con suerte, estos estilos base te servirán de mucho para tus propios posts. ¡Disfrútalo!
