---
title: "Nueva etiqueta HTML dialog + React."
publishDate: "6 Febrero 2024"
description: "Una nueva etiqueta que nos da un mundo de posibilidades y soluciones."
tags: ["tutoriales", "programacion", "react", "javascript", "desarrollo"]
---

## Etiqueta `<dialog/>`

El elemento HTML `<dialog>` representa una ventana de diálogo modal o no modal u otro componente interactivo, como una alerta desechable, un inspector o una subventana.

El elemento HTML `<dialog>` se utiliza para crear tanto ventanas de diálogo modales como no modales. Las ventanas de diálogo modales interrumpen la interacción con el resto de la página, que queda inerte, mientras que las ventanas de diálogo no modales permiten la interacción con el resto de la página.

```html
<body>
  <dialog>
    <!-- Aquí puedes poner cositas -->
  </dialog>
</body>
```

## Etiqueta dialog y JavaScript

Debemos de utilizar JavaScript para darle funcionalidad mostrar el elemento `<dialog>`.

**.showModal()**

Utiliza el método `.showModal()` para mostrar un cuadro de diálogo modal y el método `.show()` para mostrar un cuadro de diálogo no modal.

**.close()**

La ventana de diálogo se puede cerrar utilizando el método `.close()` o utilizando el método de diálogo al enviar un `<form>` que está anidado dentro del elemento `<dialog>`. Las ventanas de diálogo modales también se pueden cerrar presionando la tecla Esc.

## React + Modal

Teniendo la base de como incluir la etiqueta `<dialog/>` en tu documento HTML y darle la funcionalidad necesaria para que tenga alguna utilidad con JavaScript. Déjame mostrarte como trasladar toda esa lógica a React.
