---
author: Sat Naing
pubDatetime: 2022-09-23T15:22:00Z
modDatetime: 2025-06-13T16:52:45.934Z
title: Cómo añadir nuevas publicaciones en el tema AstroPaper
slug: como-anadir-nuevas-publicaciones-en-el-tema-astropaper
featured: true
draft: false
tags:
  - docs
description: Algunas reglas y recomendaciones para crear o añadir nuevas publicaciones usando el tema AstroPaper.
---

Aquí tienes algunas reglas/recomendaciones, consejos y trucos para crear nuevas publicaciones en el tema de blog AstroPaper.

<figure>
  <img
    src="https://images.pexels.com/photos/159618/still-life-school-retro-ink-159618.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    alt="Escritorio de madera clásico con materiales de escritura, reloj vintage y un bolso de cuero. Foto de stock"
  />
    <figcaption class="text-center">
    Foto de <a href="https://www.pexels.com/photo/brown-wooden-desk-159618/">Pixabay</a>
  </figcaption>
</figure>

## Tabla de contenidos

## Creando una Publicación de Blog

Para escribir una nueva publicación de blog, crea un archivo markdown dentro del directorio `src/data/blog/`.

> Antes de AstroPaper v5.1.0, todas las publicaciones del blog debían estar en `src/data/blog/`, lo que significa que no podías organizarlas en subdirectorios.

A partir de AstroPaper v5.1.0, ahora puedes organizar las publicaciones del blog en subdirectorios, lo que facilita la gestión de tu contenido.

Por ejemplo, si deseas agrupar publicaciones bajo `2025`, puedes colocarlas en `src/data/blog/2025/`. Esto también afecta la URL de la publicación, por lo que `src/data/blog/2025/example-post.md` estará disponible en `/posts/2025/example-post`.

Si no deseas que los subdirectorios afecten la URL de la publicación, simplemente coloca un guion bajo `_` como prefijo al nombre de la carpeta.

```bash
# Ejemplo: estructura de publicaciones y URLs
src/data/blog/very-first-post.md          -> mysite.com/posts/very-first-post
src/data/blog/2025/example-post.md        -> mysite.com/posts/2025/example-post
src/data/blog/_2026/another-post.md       -> mysite.com/posts/another-post
src/data/blog/docs/_legacy/how-to.md      -> mysite.com/posts/docs/how-to
src/data/blog/Example Dir/Dummy Post.md   -> mysite.com/posts/example-dir/dummy-post
```

> 💡 Consejo: También puedes sobrescribir el slug de una publicación de blog en el frontmatter. Consulta la siguiente sección para más detalles.

Si la URL del subdirectorio no aparece en la salida del build, elimina node_modules, reinstala los paquetes y vuelve a compilar.

## Frontmatter

El Frontmatter es el lugar principal para almacenar información importante sobre la publicación del blog (artículo). El Frontmatter se encuentra en la parte superior del artículo y está escrito en formato YAML. Lee más sobre el frontmatter y su uso en la [documentación de Astro](https://docs.astro.build/en/guides/markdown-content/).

Aquí tienes la lista de propiedades de frontmatter para cada publicación.

| Propiedad          | Descripción                                                                                                                  | Nota                                           |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------- |
| **_title_**        | Título de la publicación. (h1)                                                                                               | requerido<sup>\*</sup>                         |
| **_description_**  | Descripción de la publicación. Se usa en el extracto y la descripción SEO.                                                   | requerido<sup>\*</sup>                         |
| **_pubDatetime_**  | Fecha y hora de publicación en formato ISO 8601.                                                                             | requerido<sup>\*</sup>                         |
| **_modDatetime_**  | Fecha y hora de modificación en formato ISO 8601. (solo añadir cuando se modifique el post)                                  | opcional                                       |
| **_author_**       | Autor de la publicación.                                                                                                     | defecto = SITE.author                          |
| **_slug_**         | Slug para la publicación. Este campo es opcional.                                                                            | defecto = nombre del archivo convertido a slug |
| **_featured_**     | Indica si se debe mostrar esta publicación en la sección de destacados de la página de inicio                                | defecto = false                                |
| **_draft_**        | Marca esta publicación como 'no publicada'.                                                                                  | defecto = false                                |
| **_tags_**         | Palabras clave relacionadas. Escrito en formato de array yaml.                                                               | defecto = others                               |
| **_ogImage_**      | Imagen OG de la publicación. Útil para compartir en redes sociales y SEO. Puede ser una URL remota o una ruta relativa.      | defecto = `SITE.ogImage` o imagen generada     |
| **_canonicalURL_** | URL canónica (absoluta), en caso de que el artículo ya exista en otra fuente.                                                | defecto = `Astro.site` + `Astro.url.pathname`  |
| **_hideEditPost_** | Oculta el botón de editar bajo el título del blog. Solo se aplica a la publicación actual.                                   | defecto = false                                |
| **_timezone_**     | Especifica una zona horaria en formato IANA. Esto sobrescribirá la configuración `SITE.timezone` para la publicación actual. | defecto = `SITE.timezone`                      |

> ¡Consejo! Puedes obtener la fecha ISO 8601 ejecutando `new Date().toISOString()` en la consola. Asegúrate de quitar las comillas.

Solo los campos `title`, `description` y `pubDatetime` en el frontmatter son obligatorios.

El título y la descripción (extracto) son importantes para el SEO, por lo que AstroPaper recomienda incluirlos.

`slug` es el identificador único de la URL. Por lo tanto, el `slug` debe ser único. Los espacios en el `slug` deben separarse con `-` o `_`, pero se recomienda `-`. El slug se genera automáticamente usando el nombre del archivo, pero puedes definirlo tú mismo.

Por ejemplo, si el nombre del archivo es `adding-new-post.md` y no especificas el slug, Astro creará automáticamente el slug `adding-new-post`. Si lo especificas, se sobrescribirá el valor predeterminado. Lee más en [Astro Docs](https://docs.astro.build/en/guides/content-collections/#defining-custom-slugs).

Si omites las `tags`, se usará la etiqueta por defecto `others`. Puedes configurar la etiqueta por defecto en el archivo `content.config.ts`.

```ts file="src/content.config.ts"
export const blogSchema = z.object({
  // ...
  draft: z.boolean().optional(),
  // [!code highlight:1]
  tags: z.array(z.string()).default(["others"]), // reemplaza "others" con lo que desees
  // ...
});
```

### Ejemplo de Frontmatter

Aquí tienes un ejemplo de frontmatter para una publicación.

```yaml file="src/data/blog/sample-post.md"
---
title: El título de la publicación
author: tu nombre
pubDatetime: 2022-09-21T05:17:19Z
slug: el-titulo-de-la-publicacion
featured: true
draft: false
tags:
  - algunos
  - ejemplo
  - etiquetas
ogImage: ../../assets/images/example.png # src/assets/images/example.png
# ogImage: "https://example.org/remote-image.png" # URL remota
description: Esta es la descripción de ejemplo de la publicación de ejemplo.
canonicalURL: https://example.org/mi-articulo-ya-fue-publicado-aqui
---
```

## Añadiendo tabla de contenidos

Por defecto, una publicación no incluye tabla de contenidos (toc). Para incluirla, debes especificarlo de una forma concreta.

Escribe `Tabla de contenidos` en formato h2 (## en markdown) y colócalo donde quieras que aparezca.

Por ejemplo, si quieres colocarla justo después del párrafo de introducción:

<!-- prettier-ignore-start -->
```md
---
# frontmatter
---

Aquí tienes algunas recomendaciones, consejos y trucos para crear nuevas publicaciones en AstroPaper.

<!-- [!code ++] -->
## Tabla de contenidos

<!-- el resto del post -->
```
<!-- prettier-ignore-end -->

## Encabezados

Hay una cosa a tener en cuenta sobre los encabezados. AstroPaper usa el título (title en el frontmatter) como el encabezado principal (h1) del post. Por lo tanto, el resto de los encabezados deben usar de h2 a h6.

Esta regla no es obligatoria, pero se recomienda por motivos visuales, de accesibilidad y SEO.

## Resaltado de Sintaxis

AstroPaper usa [Shiki](https://shiki.style/) como resaltador por defecto. A partir de AstroPaper v5.4, se usa [@shikijs/transformers](https://shiki.style/packages/transformers) para mejorar los bloques de código. Si no quieres usarlo, puedes eliminarlo así:

```bash
pnpm remove @shikijs/transformers
```

```js file="astro.config.ts"
// ...
// [!code --:5]
import {
  transformerNotationDiff,
  transformerNotationHighlight,
  transformerNotationWordHighlight,
} from "@shikijs/transformers";

export default defineConfig({
  // ...
  markdown: {
    remarkPlugins: [remarkToc, [remarkCollapse, { test: "Tabla de contenidos" }]],
    shikiConfig: {
      // Para más temas, visita https://shiki.style/themes
      themes: { light: "min-light", dark: "night-owl" },
      defaultColor: false,
      wrap: false,
      transformers: [
        transformerFileName(),
      // [!code --:3]
        transformerNotationHighlight(),
        transformerNotationWordHighlight(),
        transformerNotationDiff({ matchAlgorithm: "v3" }),
      ],
    },
  },
  // ...
}
```

## Almacenamiento de Imágenes

Aquí tienes dos métodos para almacenar imágenes y mostrarlas dentro de un archivo markdown.

> ¡Nota! Si necesitas estilos en imágenes optimizadas en markdown, deberías [usar MDX](https://docs.astro.build/en/guides/images/#images-in-mdx-files).

### Dentro del directorio `src/assets/` (recomendado)

Puedes almacenar imágenes en `src/assets/`. Astro las optimizará automáticamente a través de la [API de Servicio de Imágenes](https://docs.astro.build/en/reference/image-service-reference/).

Puedes usar rutas relativas o alias (`@/assets/`).

Ejemplo: Supongamos que quieres mostrar `example.jpg` en `/src/assets/images/example.jpg`.

```md
![algo](@/assets/images/example.jpg)

<!-- O -->

![algo](../../assets/images/example.jpg)

<!-- Usar etiqueta img o el componente Image no funcionará ❌ -->
<img src="@/assets/images/example.jpg" alt="algo">
<!-- ^^ Esto es incorrecto -->
```

> Técnicamente puedes guardarlas en cualquier directorio bajo `src`. `src/assets` es solo una recomendación.

### Dentro del directorio `public`

Las imágenes en `public` no son optimizadas por Astro. Debes encargarte tú mismo de la optimización.

Para estas imágenes, usa rutas absolutas. Pueden mostrarse usando [anotación markdown](https://www.markdownguide.org/basic-syntax/#images-1) o [etiqueta HTML img](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img).

Ejemplo: `example.jpg` en `/public/assets/images/example.jpg`.

```md
![algo](/assets/images/example.jpg)

<!-- O -->

<img src="/assets/images/example.jpg" alt="algo">
```

## Bonus

### Compresión de imágenes

Se recomienda comprimir las imágenes para mejorar el rendimiento.

Recomendaciones de sitios para compresión:

- [TinyPng](https://tinypng.com/)
- [TinyJPG](https://tinyjpg.com/)

### Imagen OG

Si no se especifica una imagen OG, se usará la por defecto. Se recomienda un tamaño de **_1200 X 640_** px.

> Desde AstroPaper v1.4.0, las imágenes OG se generan automáticamente si no se especifican. Mira el [anuncio](https://astro-paper.pages.dev/posts/dynamic-og-image-generation-in-astropaper-blog-posts/).
