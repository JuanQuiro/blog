---
title: Cómo desarrollo mi portafolio estilo terminal con React
author: Sat Naing
pubDatetime: 2022-06-09T03:42:51Z
slug: como-desarrollo-mi-portafolio-terminal-con-react
featured: false
draft: false
tags:
  - JavaScript
  - ReactJS
  - ContextAPI
  - Styled-Components
  - TypeScript
description:
  "POST DE EJEMPLO: Desarrollando un sitio web estilo terminal usando ReactJS, TypeScript y Styled-Components.
  Incluye autocompletado, múltiples temas, sugerencias de comandos, etc."
timezone: "Asia/Yangon"
---

> Este artículo es originalmente de mi [blog post](https://satnaing.dev/blog/posts/how-do-i-develop-my-terminal-portfolio-website-with-react). He incluido este artículo para demostrar cómo puedes escribir posts/artículos usando el tema AstroPaper.

Desarrollando un sitio web estilo terminal usando ReactJS, TypeScript y Styled-Components. Incluye autocompletado, múltiples temas, sugerencias de comandos, etc.

![Terminal Portfolio de Sat Naing](https://satnaing.dev/_ipx/w_2048,q_75/https%3A%2F%2Fres.cloudinary.com%2Fnoezectz%2Fimage%2Fupload%2Fv1654754125%2FSatNaing%2Fterminal-screenshot_gu3kkc.png?url=https%3A%2F%2Fres.cloudinary.com%2Fnoezectz%2Fimage%2Fupload%2Fv1654754125%2FSatNaing%2Fterminal-screenshot_gu3kkc.png&w=2048&q=75)

## Tabla de contenidos

## Intro

Recientemente, publiqué mi portafolio + blog y recibí buenos comentarios. Hoy quiero presentar mi nuevo portafolio estilo terminal, desarrollado con ReactJS y TypeScript. La idea surgió de CodePen y YouTube.

## Stack Tecnológico

Es un proyecto puramente de frontend. El diseño se realizó en Figma. Elegí React por encima de JavaScript puro o NextJS porque:

- Quería escribir código declarativo. Gestionar el DOM imperativamente es tedioso.
- ¡Es React! Rápido y confiable.
- No necesitaba las funciones de SEO o optimización de imágenes de NextJS para este caso concreto.

Para los estilos, usé Styled-Components (CSS-in-JS). Para el estado, usé ContextAPI para gestionar los temas y evitar el "prop drilling".

Recapitulando:

- Frontend: [ReactJS](https://reactjs.org/), [TypeScript](https://www.typescriptlang.org/)
- Estilos: [Styled-Components](https://styled-components.com/)
- UI/UX: [Figma](https://figma.com/)
- Gestión de estado: [ContextAPI](https://reactjs.org/docs/context.html)
- Despliegue: [Netlify](https://www.netlify.com/)

## Características

### Múltiples Temas

Los usuarios pueden cambiar entre 5 temas. El tema seleccionado se guarda en el local storage para que persista tras recargar la página.

### Autocompletado de comandos

Para que se sienta como una terminal real, incluí autocompletado al pulsar 'Tab' o 'Ctrl + i'.

### Comandos Previos

Se puede navegar por el historial de comandos usando las flechas arriba y abajo.

### Ver/Limpiar Historial

Escribiendo 'history' se ve lo tecleado anteriormente. 'clear' o 'Ctrl + l' limpia la pantalla.

## Outro

Ha sido un proyecto muy divertido donde me enfoqué más en la lógica que en la interfaz, a pesar de ser un proyecto de frontend.

## Enlaces del Proyecto

- Sitio web: [https://terminal.satnaing.dev/](https://terminal.satnaing.dev/)
- Repositorio: [https://github.com/satnaing/terminal-portfolio](https://github.com/satnaing/terminal-portfolio)
