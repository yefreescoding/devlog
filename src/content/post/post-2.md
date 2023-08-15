---
title: 'Mi primer custom hook'
publishDate: '15 August 2023'
description: 'Un custom hook del cual estoy muy orgulloso y me gustaría compartir con la comunidad'
tags: ['tutoriales', 'javascript', 'react']
---

## Un hook para crear animaciones on scroll de forma fácil.

### ¿Qué problema soluciona este código?

Unas de las maneras en las que me gusta agregar classes a mis elementos cuando el usuario esta scrolliando hacia abajo (verbo que me acabo de inventar) para crear animaciones y asi dar un efecto muy chulo a mi pagina es con la API IntersectionObserver, primero porque es super fácil tenerla lista para utilizar y segundo por su versatilidad.

```js
// Ejemplo de uso
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {});
});
```

Estas lineas de código me dan la vida. 🤤

En este post no entrare en mucho detalle sobre como funciona esta API, porque aun estoy tratando de entenderla honestamente, asi que dejare dos recursos que la verdad lo dejan muy claro:

- Este video de Fireship, esta publicado en su segundo canal Beyond Fireship, lo explica bastante bien <a href="https://youtu.be/T33NN_pPeNI">Subtle, yet Beautiful Scroll Animations</a>

- Y este articulo de Mozilla Developer <a href="https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API">Intersection Observer API</a>

Seguimos.

### ¿Como utilizarla esta API en React como custom Hook?

Ahora que estoy dando mis primeros pasos con React tengo que me considero un fan, tener la posibilidad de utilizar esta librería y la libertad de hacer prácticamente lo que quiera es un puntazo para mi.

Y después de tanta charla vamos a lo que vinimos. Después de varios intentos, tests, mucha documentación y mi amigo ChatGPT he creado este hook. Vamos a analizarlo.

Como ya dije este custom hook llamado `useIntersectionObserver` utiliza la API `IntersectionObserver` para añadir o eliminar clases CSS a elementos del DOM cuando entran o salen del área visible del usuario (viewport).

```jsx
/*
 * The `useIntersectionObserver` function is a custom React hook that uses the Intersection Observer API
 *  To add a CSS class to elements when they become visible in the viewport.
 */
import { useEffect } from 'react';

function useIntersectionObserver(targetSelector, inViewClass, options = {}) {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(options.inViewClass || inViewClass);
        } else {
          entry.target.classList.remove(
            options.inViewClass || 'animate__fadeInUp'
          );
        }
      });
    }, options);

    const targets = document.querySelectorAll(targetSelector);
    targets.forEach((target) => observer.observe(target));

    return () => observer.disconnect();
  }, [targetSelector, inViewClass, options]);

  return null;
}

export default useIntersectionObserver;
```

### Funcionamiento paso por paso

1. Creamos el archivo **useIntersectionObserver.jsx** dentro de nuestra carpeta hooks.

2. importamos **useEffect** desde react.

3. Creamos nuestra function **useIntersectionObserver** y esta tomara tres argumentos:

   - _targetSelector_: Un selector CSS que se utiliza para seleccionar los elementos que se observarán para determinar si están en el área visible o no.
   - _inViewClass_: La clase CSS que se agregará al elemento cuando entre en el área visible.
   - _options_: Un objeto con opciones adicionales para la instancia de `IntersectionObserver`.

4. Dentro de nuestra function utilizaremos **useEffect** para poder ejecutar la API.

5. `useEffect(() => { ... }, [targetSelector, inViewClass, options])`: Este hook efecto se ejecutará cada vez que cambien los valores de `targetSelector`, `inViewClass` u `options`. En esencia, creará y administrará un nuevo `IntersectionObserver`.

6. `const observer = new IntersectionObserver((entries) => { ... }, options);`: Se crea una nueva instancia de `IntersectionObserver` que tomará una función de callback. Esta función se ejecutará cada vez que los elementos observados entren o salgan del área visible.

7. `const targets = document.querySelectorAll(targetSelector);`: Se seleccionan todos los elementos del DOM que coincidan con el selector `targetSelector`.

8. `targets.forEach((target) => observer.observe(target));`: Cada uno de los elementos seleccionados se observa utilizando el `IntersectionObserver` creado en el paso 3. Cuando un elemento entra o sale del área visible, la función de callback se activará.

9. `return () => observer.disconnect();`: Cuando el componente en el que se utiliza el hook se desmonta o cambian las dependencias, se llama a esta función de retorno. Aquí se desconecta el `IntersectionObserver` para liberar recursos.

10. `return null;`: Finalmente, se devuelve `null`. Esto es solo un marcador ya que este hook en sí mismo no tiene un componente visual.

### ¿Como utilizo este custom Hook en mis componentes?

Fácil, lo primero que tienes que hacer es importarlo en tu componente. Cada elemento que quieres que el aparezca on scroll tienes qu ponerle la misma clase.

```jsx
import useIntersectionObserver from '../hooks/useIntersectionObserver'

sectionWithAnimations(){
	useIntersectionObserver('articles', 'show');

	return (
		<section>
			<article className="articles">
				Cositas para mostrar
			</article>
			<article className="articles">
				Estas también
			</article>
			<article className="articles">
				Mira que chulo
			</article>
			<article className="articles">
				Soy el ultimo pero también aparezco
			</article>
		</section>
	)
}

export default sectionWithAnimations;

```

Demás esta decir que debes de tener tus estilos listos para que todo esto funcione correctamente.
