---
title: "¿Como centrar un div?"
description: "Esto ya no da gracia, por favor dejar de publicarlo en twitter... Pero quiero compartir mi solución"
publishDate: "15 August 2023"
# coverImage:
#   src: './cover-image/cover.png'
#   alt: 'Astro build wallpaper'
tags: ["tutoriales", "html", "css"]
---

## Ok, vamos a ello. Cortita y al pie.

Tratare de explicar como suelo centrar cualquier contener que esta dentro de otro contenedor. De una manera semántica, ordenada y sencilla. Como me enseñaron en la escuela.

### HTML

Lo primer es tener nuestro documento HTML preparado para ser estilado:

1. Para centrar cualquier elemento debe este estar dentro de un contenedor. Las clases que les he puesto a cada elemento ayudan a ilustrar un poco esta técnica.

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Centrando un div por Quintupliquesima vez</title>
  </head>
  <body class="abuelo">
    <main class="papa">
      <section class="hijo">Tienes que centrarme 😏</section>
    </main>
  </body>
</html>
```

### CSS

2. Ahora tocaría dar los respectivos estilos a cada elemento. Tenemos dos maneras de hacerlo en caso de que los elementos estén en **posición relativa**.

```css
.papa {
  min-height: 100dvh;
  display: grid;
  place-items: center;
}
```

- `min-height: 100dvh`: Da una altura minima del 100% respecto al viewport del dispositivo.

- `display: grid;`: Otorga al elemento padre la capacidad de organizar los elementos en su interior en filas y columnas.

- `place-items: center;`: Esta propiedad, que creo es exclusiva de **grid**, colocara todos los elementos dentro del contenedor en el centro del mismo.

Con tres lineas de código ya hemos centrado nuestro elemento. ¿No ha sido tan difícil verdad? Pues eso, úsalo en tu proximo en tu proximo proyecto y no te vuelvas loco que en 2023, casi 2024 no estamos para estos trotes.
