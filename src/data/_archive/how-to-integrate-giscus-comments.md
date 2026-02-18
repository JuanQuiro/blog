---
author: FjellOverflow
pubDatetime: 2024-07-25T11:11:53Z
modDatetime: 2025-03-12T12:28:53Z
title: Cómo integrar comentarios de Giscus en AstroPaper
slug: como-integrar-comentarios-de-giscus-en-astropaper
featured: false
draft: false
tags:
  - astro
  - blog
  - docs
description: Función de comentarios en un blog estático alojado en GitHub Pages con Giscus.
---

Alojar un blog estático ligero en una plataforma como [GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site) tiene numerosas ventajas, pero también elimina cierta interactividad. Afortunadamente, existe [Giscus](https://giscus.app/) y ofrece una forma de incrustar comentarios de usuarios en sitios estáticos.

## Tabla de contenidos

## Cómo funciona _Giscus_

[Giscus utiliza la API de GitHub](https://github.com/giscus/giscus?tab=readme-ov-file#how-it-works) para leer y almacenar comentarios realizados por usuarios de _GitHub_ en las `Discussions` (Discusiones) asociadas a un repositorio.

Al incrustar el script de _Giscus_ en tu sitio y configurarlo con la URL del repositorio correcta, los usuarios pueden ver y escribir comentarios (siempre que hayan iniciado sesión en _GitHub_).

El enfoque es "serverless", ya que los comentarios se almacenan en _GitHub_ y se cargan dinámicamente desde allí en el lado del cliente, por lo que es perfecto para un blog estático como _AstroPaper_.

## Configurando _Giscus_

_Giscus_ se puede configurar fácilmente en [giscus.app](https://giscus.app/), pero resumiré el proceso aquí.

### Prerrequisitos

Para que _Giscus_ funcione, necesitas:

- que el repositorio sea [público](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/setting-repository-visibility#making-a-repository-public)
- que la [aplicación Giscus](https://github.com/apps/giscus) esté instalada
- que la función de [Discussions](https://docs.github.com/en/github/administering-a-repository/managing-repository-settings/enabling-or-disabling-github-discussions-for-a-repository) esté activada en tu repositorio

Si alguna de estas condiciones no se cumple, lamentablemente _Giscus_ no podrá integrarse.

### Configuración

A continuación, es necesario configurar _Giscus_. En la mayoría de los casos, los valores predeterminados son adecuados.

Debes:

- seleccionar el idioma de la interfaz (UI)
- especificar el repositorio de _GitHub_ al que quieres conectarte
- crear y configurar una discusión de tipo `Announcement` (Anuncio) en _GitHub_ si quieres evitar comentarios aleatorios directos en GitHub
- definir el esquema de colores

Tras configurar los ajustes, _Giscus_ te proporcionará una etiqueta `<script>` generada que necesitarás en los siguientes pasos.

## Etiqueta de script simple

Deberías tener una etiqueta de script similar a esta:

```html
<script
  src="https://giscus.app/client.js"
  data-repo="[INTRODUCE EL REPO AQUÍ]"
  data-repo-id="[INTRODUCE EL ID DEL REPO AQUÍ]"
  data-category="[INTRODUCE EL NOMBRE DE LA CATEGORÍA AQUÍ]"
  data-category-id="[INTRODUCE EL ID DE LA CATEGORÍA AQUÍ]"
  data-mapping="pathname"
  data-strict="0"
  data-reactions-enabled="1"
  data-emit-metadata="0"
  data-input-position="bottom"
  data-theme="preferred_color_scheme"
  data-lang="es"
  crossorigin="anonymous"
  async
></script>
```

Simplemente añádela al código fuente del sitio. Si usas _AstroPaper_ y quieres habilitar comentarios en los posts, navega a `PostDetails.astro` y pégalo en la ubicación deseada, por ejemplo, debajo de los botones de compartir.

```astro file=src/layouts/PostDetails.astro
<Layout {...layoutProps}>
  <main>
    <ShareLinks />

    <!-- [!code ++:6] -->
    <script
      src="https://giscus.app/client.js"
      data-repo="[TU REPO]"
      data-repo-id="[ID DE TU REPO]"
      data-category="[CATEGORÍA]"
      data-category-id="[ID DE LA CATEGORÍA]"></script>
  </main>
  <Footer />
</Layout>
```

¡Y listo! ¡Has integrado comentarios en _AstroPaper_ con éxito!

## Componente React con tema claro/oscuro

La etiqueta de script es estática. Como _AstroPaper_ permite cambiar entre modo claro y oscuro, sería ideal que los comentarios también cambiaran automáticamente. Para ello, necesitamos un enfoque más sofisticado.

Primero, instalamos el [componente de React](https://www.npmjs.com/package/@giscus/react) para _Giscus_:

```bash
npm i @giscus/react && npx astro add react
```

Luego creamos un nuevo componente `Comments.tsx` en `src/components`:

```tsx file=src/components/Comments.tsx
import Giscus, { type Theme } from "@giscus/react";
import { GISCUS } from "@/constants";
import { useEffect, useState } from "react";

interface CommentsProps {
  lightTheme?: Theme;
  darkTheme?: Theme;
}

export default function Comments({
  lightTheme = "light",
  darkTheme = "dark",
}: CommentsProps) {
  const [theme, setTheme] = useState(() => {
    const currentTheme = localStorage.getItem("theme");
    const browserTheme = window.matchMedia("(prefers-color-scheme: dark)")
      .matches
      ? "dark"
      : "light";

    return currentTheme || browserTheme;
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = ({ matches }: MediaQueryListEvent) => {
      setTheme(matches ? "dark" : "light");
    };

    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    const themeButton = document.querySelector("#theme-btn");
    const handleClick = () => {
      setTheme(prevTheme => (prevTheme === "dark" ? "light" : "dark"));
    };

    themeButton?.addEventListener("click", handleClick);

    return () => themeButton?.removeEventListener("click", handleClick);
  }, []);

  return (
    <div className="mt-8">
      <Giscus theme={theme === "light" ? lightTheme : darkTheme} {...GISCUS} />
    </div>
  );
}
```

Este componente de _React_ permite que los comentarios de _Giscus_ se alineen con el tema del sitio, cambiando dinámicamente cuando el usuario pulsa el botón de tema o el sistema cambia de modo.

También necesitamos definir la configuración de `GISCUS` en `constants.ts`:

```ts file=src/constants.ts
import type { GiscusProps } from "@giscus/react";

// ...

export const GISCUS: GiscusProps = {
  repo: "[INTRODUCE EL REPO AQUÍ]",
  repoId: "[INTRODUCE EL ID DEL REPO AQUÍ]",
  category: "[INTRODUCE LA CATEGORÍA AQUÍ]",
  categoryId: "[INTRODUCE EL ID DE LA CATEGORÍA AQUÍ]",
  mapping: "pathname",
  reactionsEnabled: "0",
  emitMetadata: "0",
  inputPosition: "bottom",
  lang: "es",
  loading: "lazy",
};
```

Finalmente, añade el componente `Comments` a `PostDetails.astro`.

```jsx file=src/layouts/PostDetails.astro
import Comments from "@/components/Comments";

<ShareLinks />

<Comments client:only="react" />

<hr class="my-6 border-dashed" />

<Footer />
```

¡Eso es todo!
