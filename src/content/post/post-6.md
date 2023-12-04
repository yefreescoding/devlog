---
title: "OOP con JavaScript. (Parte 2)"
publishDate: "24 Noviembre 2023"
description: "Object Constructors, prototipos, herencia y mas cositas de los objetos."
tags: ["tutoriales", "programacion", "desarrollo", "javascript"]
---

## Object Constructors

Un `Object Constructor` o un `constructor de objetos` es básicamente una función que crea objetos (valga la redundancia) y luce asi:

```js
function Jugador(nombre, turno) {
  this.nombre = nombre;
  this.turno = turno;
}
```

Y puedes llamar a esta función utilizando la palabra clave `new` de esta manera:

```js
const jugador = new Jugador("Yefree", "X");
console.log(Jugador.nombre); // Yefree
```

No tiene mas historia. De esta manera puedes crear la base, o el prototipo de tus objetos y asi solamente agregando los valores necesarios para crear uno o cientos de Jugadores, Personas, Villanos, Ciudades, etc, etc.
