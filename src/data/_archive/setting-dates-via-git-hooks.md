---
author: Simon Smale
pubDatetime: 2024-01-03T20:40:08Z
modDatetime: 2024-01-08T18:59:05Z
title: Cómo usar Git Hooks para configurar fechas de creación y modificación
slug: como-usar-git-hooks-para-configurar-fechas
featured: false
draft: false
tags:
  - docs
  - FAQ
canonicalURL: https://smale.codes/posts/setting-dates-via-git-hooks/
description: Cómo usar Git Hooks para automatizar tus fechas de Publicación y Modificación en AstroPaper.
---

En este post explicaré cómo usar el "hook" de `pre-commit` de Git para automatizar la entrada de las fechas de creación (`pubDatetime`) y modificación (`modDatetime`) en el frontmatter del tema AstroPaper.

## Tabla de contenidos

## Tenlos en todas partes

Los [Git hooks](https://git-scm.com/book/en/v2/Customizing-Git-Git-Hooks) son geniales para automatizar tareas como añadir o comprobar el nombre de la rama en tus mensajes de commit o evitar el envío de secretos en texto plano. Su mayor defecto es que son locales por máquina.

Puedes solucionar esto teniendo un directorio `hooks` y copiándolos manualmente a `.git/hooks` o configurando un enlace simbólico, pero requiere que te acuerdes de hacerlo.

Como este proyecto usa npm, podemos usar un paquete llamado [Husky](https://typicode.github.io/husky/) (ya instalado en AstroPaper) para instalar los hooks automáticamente por nosotros.

> ¡Actualización! En AstroPaper [v4.3.0](https://github.com/satnaing/astro-paper/releases/tag/v4.3.0), el hook de pre-commit se eliminó en favor de GitHub Actions. Sin embargo, puedes instalar Husky tú mismo fácilmente.

## El Hook

Queremos que este hook se ejecute al hacer el commit para actualizar las fechas como parte de nuestro cambio, así que usaremos `pre-commit`.

En el archivo `hooks/pre-commit`, añadiremos estos fragmentos:

### Actualizar la fecha de modificación al editar un archivo

---

ACTUALIZACIÓN:
Esta sección usa una versión más inteligente del hook. No incrementará `modDatetime` hasta que el post sea publicado. Al publicar por primera vez, pon el estado `draft: first` y mira la magia.

---

```shell
# Archivos modificados, actualizar modDatetime
git diff --cached --name-status |
grep -i '^M.*\.md$' |
while read _ file; do
  filecontent=$(cat "$file")
  frontmatter=$(echo "$filecontent" | awk -v RS='---' 'NR==2{print}')
  draft=$(echo "$frontmatter" | awk '/^draft: /{print $2}')
  if [ "$draft" = "false" ]; then
    echo "$file modDateTime actualizado"
    cat $file | sed "/---.*/,/---.*/s/^modDatetime:.*$/modDatetime: $(date -u "+%Y-%m-%dT%H:%M:%SZ")/" > tmp
    mv tmp $file
    git add $file
  fi
  if [ "$draft" = "first" ]; then
    echo "Primer lanzamiento de $file, draft puesto en false y modDateTime eliminado"
    cat $file | sed "/---.*/,/---.*/s/^modDatetime:.*$/modDatetime:/" | sed "/---.*/,/---.*/s/^draft:.*$/draft: false/" > tmp
    mv tmp $file
    git add $file
  fi
done
```

`git diff --cached --name-status` obtiene los archivos que han sido preparados para el commit (staged).

Filtramos con `grep` los archivos markdown modificados. El regex busca líneas que empiecen por `M` y terminen en `.md`.

Extraemos el frontmatter con `awk` para conocer el estado de `draft`. Dependiendo de si es `false` o `first`, actualizamos la fecha de modificación o limpiamos el campo y publicamos.

---

#### NOTA

Para que el `sed` funcione, la clave `modDatetime` ya debe existir en el frontmatter. Hay cambios adicionales necesarios para que la app compile con fechas en blanco.

---

### Añadir la fecha para archivos nuevos

Es el mismo proceso, pero buscando archivos añadidos (`A`) y reemplazando `pubDatetime`.

```shell
# Archivos nuevos, añadir/actualizar pubDatetime
git diff --cached --name-status | egrep -i "^(A).*\.(md)$" | while read a b; do
  cat $b | sed "/---.*/,/---.*/s/^pubDatetime:.*$/pubDatetime: $(date -u "+%Y-%m-%dT%H:%M:%SZ")/" > tmp
  mv tmp $b
  git add $b
done
```

## Rellenar el frontmatter

Si tu IDE soporta snippets, puedes crear uno personalizado. AstroPaper v4 incluye uno para VSCode por defecto.

## Cambios para `modDatetime` vacío

Para permitir a Astro compilar markdown con valores nulos o vacíos, editamos `src/content/config.ts`:

```ts
// ...
      modDatetime: z.date().optional().nullable(), // [!code highlight]
// ...
```

También añadimos `| null` en `src/layouts/Layout.astro` y `src/components/Datetime.tsx` para evitar advertencias del IDE.

## Conclusión

He compartido mis procesos para automatizar fechas en AstroPaper. Espero que te sea valioso.
