---
author: Sat Naing
pubDatetime: 2022-09-23T04:58:53Z
modDatetime: 2026-01-10T13:04:53.851Z
title: Cómo configurar el tema AstroPaper
slug: como-configurar-el-tema-astropaper
featured: true
draft: false
tags:
  - configuration
  - docs
description: Cómo puedes hacer que el tema AstroPaper sea totalmente tuyo.
---

AstroPaper es un tema de blog Astro altamente personalizable. Con AstroPaper, puedes personalizar todo según tu gusto personal. Este artículo explicará cómo puedes realizar algunas personalizaciones fácilmente en el archivo de configuración.

## Tabla de contenidos

## Configurando SITE

Las configuraciones importantes residen en el archivo `src/config.ts`. Dentro de ese archivo, verás el objeto `SITE` donde puedes especificar las configuraciones principales de tu sitio web.

Durante el desarrollo, no hay problema en dejar `SITE.website` vacío. Pero en modo producción, debes especificar tu URL desplegada en la opción `SITE.website`, ya que se usará para la URL canónica, la URL de la tarjeta social, etc., lo cual es importante para el SEO.

```js file=src/config.ts
export const SITE = {
  website: "https://astro-paper.pages.dev/", // reemplaza esto con tu dominio
  author: "Sat Naing",
  profile: "https://satnaing.dev/",
  desc: "Un tema de blog Astro minimalista, responsivo y amigable con SEO.",
  title: "AstroPaper",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 4,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutos
  showArchives: true,
  showBackButton: true, // botón de retroceso en detalle
  editPost: {
    enabled: true,
    text: "Sugerir Cambios",
    url: "https://github.com/satnaing/astro-paper/edit/main/",
  },
  dynamicOgImage: true, // habilitar generación dinámica automática de og-image
  dir: "ltr", // "rtl" | "auto"
  lang: "es", // código de idioma html.
  timezone: "Asia/Bangkok", // Zona horaria IANA predeterminada
} as const;
```

Aquí tienes las opciones de configuración de SITE:

| Opciones              | Descripción                                                                                                                                                                                                                                        |
| --------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `website`             | La URL de tu sitio web desplegado.                                                                                                                                                                                                                 |
| `author`              | Tu nombre.                                                                                                                                                                                                                                         |
| `profile`             | Tu URL web personal para un mejor SEO. Pon `null` o un string vacío `""` si no tienes.                                                                                                                                                             |
| `desc`                | Descripción del sitio. Útil para SEO y compartir en redes sociales.                                                                                                                                                                                |
| `title`               | El nombre de tu sitio.                                                                                                                                                                                                                             |
| `ogImage`             | Imagen OG predeterminada del sitio. Puede ser externa o estar bajo `/public`.                                                                                                                                                                      |
| `lightAndDarkMode`    | Activa o desactiva el `modo claro y oscuro`. Si se desactiva, se usará el esquema primario.                                                                                                                                                        |
| `postPerIndex`        | El número de posts que se mostrarán en la página de inicio bajo la sección `Recientes`.                                                                                                                                                            |
| `postPerPage`         | Especifica cuántos posts se mostrarán en cada página de listado (ej: si pones 3, cada página solo mostrará 3).                                                                                                                                     |
| `scheduledPostMargin` | En producción, los posts futuros no serán visibles. Si la fecha es en los próximos 15 min, sí lo serán. Puedes cambiar este margen aquí.                                                                                                           |
| `showArchives`        | Determina si se muestra el menú `Archivo` y su página correspondiente. Activado por defecto.                                                                                                                                                       |
| `showBackButton`      | Determina si se muestra el botón `Volver` en cada publicación.                                                                                                                                                                                     |
| `editPost`            | Permite a los usuarios sugerir cambios con un enlace de edición bajo el título. Se puede desactivar con `SITE.editPost.enabled`.                                                                                                                   |
| `dynamicOgImage`      | Controla si se [genera una og-image dinámica](https://astro-paper.pages.dev/posts/dynamic-og-image-generation-in-astropaper-blog-posts/) si no hay una especificada. Si tienes muchos posts, quizás prefieras desactivarlo por el tiempo de build. |
| `dir`                 | Especifica la dirección del texto de todo el blog ( atributo [HTML dir](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Global_attributes/dir) ). Valores: `ltr` \| `rtl` \| `auto`                                                    |
| `lang`                | Usado como código ISO de idioma HTML en `<html lang"en">`.                                                                                                                                                                                         |
| `timezone`            | Permite especificar tu zona horaria usando el [formato IANA](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones). Asegura consistencia entre localhost y el sitio desplegado.                                                            |

## Actualizar el ancho del diseño

El `max-width` predeterminado es `768px` (`max-w-3xl`). Si quieres cambiarlo, puedes actualizar la utilidad `max-w-app` en `global.css`. Por ejemplo:

```css file=src/styles/global.css
@utility max-w-app {
  /* [!code --:1] */
  @apply max-w-3xl;
  /* [!code ++:1] */
  @apply max-w-4xl xl:max-w-5xl;
}
```

Puedes explorar más valores de `max-width` en la [documentación de Tailwind CSS](https://tailwindcss.com/docs/max-width).

## Configurando el logo o título

Antes de AstroPaper v5, actualizabas el nombre/logo en `LOGO_IMAGE` dentro de `src/config.ts`. En la v5, esta opción se eliminó a favor de los componentes integrados de SVG e Imagen de Astro.

Hay 3 opciones que puedes usar:

### Opción 1: Texto del título SITE

Es la opción más fácil. Solo debes actualizar `SITE.title` en `src/config.ts`.

### Opción 2: Componente SVG de Astro

Ideal si quieres usar un logo SVG.

- Primero añade un SVG en `src/assets` (ej: `src/assets/dummy-logo.svg`).
- Impórtalo en `Header.astro`.

  ```astro file=src/components/Header.astro
  ---
  // ...
  import DummyLogo from "@/assets/dummy-logo.svg";
  ---
  ```

- Finalmente, reemplaza `{SITE.title}` con el logo importado.

  ```html
  <a
    href="/"
    class="absolute py-1 text-left text-2xl leading-7 font-semibold whitespace-nowrap sm:static"
  >
    <DummyLogo class="scale-75 dark:invert" />
    <!-- {SITE.title} -->
  </a>
  ```

Lo mejor es que puedes personalizar los estilos del SVG. En el ejemplo, el color se invierte en modo oscuro.

### Opción 3: Componente Imagen de Astro

Si tu logo es una imagen (no SVG), usa el componente Image de Astro.

- Añade tu logo en `src/assets` (ej: `src/assets/dummy-logo.png`).
- Importa `Image` y tu logo en `Header.astro`.

  ```astro file=src/components/Header.astro
  ---
  // ...
  import { Image } from "astro:assets";
  import dummyLogo from "@/assets/dummy-logo.png";
  ---
  ```

- Luego, reemplaza `{SITE.title}`.

  <!-- prettier-ignore -->
  ```html
  <a
    href="/"
    class="absolute py-1 text-left text-2xl leading-7 font-semibold whitespace-nowrap sm:static"
  >
    <Image src="{dummyLogo}" alt="Blog de Ejemplo" class="dark:invert" />
    <!-- {SITE.title} -->
  </a>
  ```

Aún puedes ajustar la apariencia con clases CSS. Si necesitas logos diferentes para modo claro/oscuro, mira cómo se manejan los iconos en `Header.astro`.

## Configurando redes sociales

Puedes configurarlas en el objeto `SOCIALS` dentro de `constants.ts`.

```ts file=src/constants.ts
export const SOCIALS = [
  {
    name: "GitHub",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: ` ${SITE.title} en GitHub`,
    icon: IconGitHub,
  },
  {
    name: "X",
    href: "https://x.com/username",
    linkTitle: `${SITE.title} en X`,
    icon: IconBrandX,
  },
  // ...
] as const;
```

## Configurando enlaces de compartir

Puedes configurarlos en `SHARE_LINKS` dentro de `src/constants.ts`.

## Configurando fuentes

AstroPaper usa la [experimental fonts API](https://docs.astro.build/en/reference/experimental-flags/fonts/) de Astro con [Google Sans Code](https://fonts.google.com/specimen/Google+Sans+Code) por defecto.

### Usar la fuente predeterminada

Se configura en `astro.config.ts` y se carga en `Layout.astro`. No se necesita configuración adicional para Google Sans Code.

### Personalizar la fuente

Debes actualizar tres sitios:

1.  **Configuración en `astro.config.ts`:**

    ```ts file=astro.config.ts
    // ...
    experimental: {
      fonts: [
        {
          name: "Nombre de tu Fuente",
          cssVariable: "--font-tu-fuente",
          // ...
        },
      ],
    },
    ```

2.  **Componente Font en `Layout.astro`:**

    ```astro file=src/layouts/Layout.astro
    <Font
      cssVariable="--font-tu-fuente"
      preload={[{ subset: "latin", weight: 400, style: "normal" }]}
    />
    ```

3.  **Variable CSS en `global.css`:**

    ```css file=src/styles/global.css
    @theme inline {
      --font-app: var(--font-tu-fuente);
    }
    ```

La variable `--font-app` se usa en todo el tema. Actualizarla aplicará el cambio en todas partes.

## Conclusión

Esta es la especificación breve de cómo personalizar este tema. Si sabes programar, puedes personalizar mucho más. Para estilos, lee [este artículo](https://astro-paper.pages.dev/posts/customizing-astropaper-theme-color-schemes/). Gracias por leer.✌🏻
