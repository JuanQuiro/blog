---
title: Cómo desarrollo mi sitio web de portafolio y mi blog
author: Sat Naing
pubDatetime: 2022-03-25T16:55:12.000+00:00
slug: como-desarrollo-mi-portafolio-y-blog
featured: false
draft: false
tags:
  - NextJS
  - TailwindCSS
  - HeadlessCMS
  - Blog
description:
  "POST DE EJEMPLO: Mi experiencia desarrollando mi primer sitio web de portafolio y un blog
  usando NextJS y un CMS headless."
timezone: "Asia/Yangon"
---

> Este artículo es originalmente de mi [blog post](https://satnaing.dev/blog/posts/how-do-i-develop-my-portfolio-and-blog). He incluido este artículo para demostrar cómo puedes escribir posts/artículos usando el tema AstroPaper.

Mi experiencia desarrollando mi primer sitio web de portafolio y un blog usando NextJS y un CMS headless.

![Construyendo portafolio](https://satnaing.dev/_ipx/w_2048,q_75/https%3A%2F%2Fres.cloudinary.com%2Fnoezectz%2Fimage%2Fupload%2Fv1653050141%2FSatNaing%2Fblog_at_cafe_ei1wf4.jpg?url=https%3A%2F%2Fres.cloudinary.com%2Fnoezectz%2Fimage%2Fupload%2Fv1653050141%2FSatNaing%2Fblog_at_cafe_ei1wf4.jpg&w=2048&q=75)

## Motivación

Siempre había pensado en lanzar mi propio sitio web con mi nombre de dominio personalizado (**satnaing.dev**) desde mis días de estudiante. Pero eso nunca sucedió hasta este proyecto. He realizado varios proyectos de desarrollo de aplicaciones web, pero nunca hice el esfuerzo de hacer esto para mí.

¿Y qué hay del blog? Sí, el blog también estuvo en mi lista de proyectos durante algún tiempo. Quería hacer un proyecto de blog usando algunas de las tecnologías más recientes. Sin embargo, he estado ocupado con mi trabajo y otros proyectos, por lo que el blog nunca se inició.

Últimamente, tiendo a desarrollar mis propios proyectos enfocándome en la calidad más que en la cantidad. Cuando termino un proyecto, suelo poner un archivo README adecuado en el repositorio de GitHub. Pero el README solo es adecuado para aspectos técnicos (en mi opinión). Quiero escribir sobre mis experiencias y desafíos. Por eso, decidí hacer mi propio blog. Además, en este punto, tengo la experiencia y confianza necesarias para desarrollar este proyecto.

## Stack Tecnológico

Para el front-end, quería usar [React](https://reactjs.org/). Pero React por sí solo no es suficiente para el SEO; y tenía que considerar factores como el enrutamiento, la optimización de imágenes, etc. Así que elegí [NextJS](https://nextjs.org/) como mi stack principal de front-end. Y por supuesto TypeScript para el control de tipos. (Dicen que amarás TypeScript cuando te acostumbres 😉)

Para los estilos, uso [TailwindCSS](https://tailwindcss.com/). Me encanta la experiencia de desarrollador que ofrece Tailwind y tiene mucha flexibilidad en comparación con otras bibliotecas de componentes como MUI o React Bootstrap.

Todos los contenidos residen en el repositorio de GitHub. Mis posts están escritos en formato Markdown, ya que estoy muy acostumbrado a él. Pero para escribir Markdown y su frontmatter sin esfuerzo, uso el CMS headless [Forestry](https://forestry.io/). Es un CMS basado en Git que puede servir Markdown y otros contenidos.

Las imágenes y recursos se suben y almacenan en [Cloudinary](https://cloudinary.com/). Conecto Cloudinary a través de Forestry y los gestiono directamente en el panel.

En resumen, este es el stack técnico:

- Front-end: NextJS (TypeScript)
- Estilos: TailwindCSS
- Animaciones: GSAP
- CMS: Forestry Headless CMS
- Despliegue: Vercel

## Características

Estas son algunas características de mi portafolio y blog:

### Amigable con SEO

Todo el proyecto se desarrolló pensando en el SEO. He usado etiquetas meta adecuadas, descripciones y alineación de encabezados. Este sitio ya está indexado por Google.

### Sitemap Dinámico

El sitemap es vital para el SEO. He creado un sitemap autogenerado que se actualiza cada vez que creo nuevo contenido, etiquetas o categorías.

### Temas Claro y Oscuro

Dada la tendencia de los temas oscuros, mi sitio web soporta ambos modos.

### Totalmente Accesible

Este sitio es totalmente accesible. Puedes navegar usando solo el teclado. He incluido todas las mejores prácticas de accesibilidad como textos alt en imágenes, uso de etiquetas HTML semánticas y atributos aria adecuados.

### Buscador, Categorías y Etiquetas

Todo el contenido se puede buscar mediante un cuadro de búsqueda. Además, los contenidos se pueden filtrar por categorías y etiquetas.

### Rendimiento y Puntos Lighthouse

El sitio tiene un rendimiento excelente gracias a las mejores prácticas. Aquí puedes ver la puntuación de Lighthouse.

### Animaciones

Inicialmente usé [Framer Motion](https://www.framer.com/motion/), pero para animaciones complejas y efectos de parallaje me resultó incómodo. Por ello, decidí usar [GSAP](https://greensock.com/). Es una de las librerías más populares y capaz de hacer animaciones avanzadas. Puedes ver micro-interacciones en casi todas las páginas.

## Outro

Este proyecto me ha dado mucha experiencia sobre el desarrollo de sitios de blog (SSG). He aprendido sobre CMS basados en Git, SEO, generación dinámica de sitemaps e indexación en Google. Haré mejores proyectos en el futuro. ¡Estad atentos! ✌🏻

Por último, quiero dar las gracias a mi amigo [Swann Fevian Kyaw](https://www.facebook.com/bon.zai.3910) por la hermosa ilustración de la sección hero.

## Enlaces del Proyecto

- Sitio web: [https://satnaing.dev/](https://satnaing.dev/)
- Blog: [https://satnaing.dev/blog](https://satnaing.dev/blog)
- Repositorio: [https://github.com/satnaing/my-portfolio](https://github.com/satnaing/my-portfolio)
