# Diner Menu Exercise

<p align="center">
    <img src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt='Foto Portada' width = 350>
</p>

#### Descripción del programa

El siguiente programa simula la interacción con el servicio de un restaurante. Primeramente, se muestran los diferentes menus disponibles y sus platos correspondientes. Posteriormente, el programa nos solicita que pidamos un plato, en el caso del menú principal, y dos, en el caso del menú de acompañamientos; devolviéndonos un comentario sobre nuestras selecciones y su precio. Finalmente, el programa nos devuelve el gasto total que supone la comida seleccionada. 

#### Instrucciones de uso

* Antes de nada, deberemos abrir nuestro archivo `index.js` desde el que ejecutaremos todo nuestro programa.

* La función `mostrarMenus();` al ejecutarla nos mostrará en consola los menús disponibles y los diferentes platos que los componen.
  
* El método `platoPrincipal.seleccionarPlatoMenuPrincipal();` espera como parámetro uno de los platos disponibles en el área **menú prinicipal** en forma de `string`. Esta función nos devolverá en el terminal  un comentario sobre el plato que hemos seleccionado y el precio del mismo. En caso de que no introduzcamos el parámetro correcto, nos devolverá `error`.

```JavaScript
platoPrincipal.seleccionarPlatoMenuPrincipal('Txuletón a la Parrilla');

/*
salida --> Nuestro Txuletón a la Parrilla es una verdadera obra maestra. La carne se cocina a la perfección y se sirve con un toque de sal que resalta su sabor.
El precio de este plato es de 50 euros.
*/
```

* Los métodos `primerAcompañamiento.seleccionarPlatoMenuAcompañamiento();` y `segundoAcompañamiento.seleccionarPlatoMenuAcompañamiento();` funcionan del mismo modo que el método anterior, esperando un parámetro `string`, pero en este caso relativo a los platos disponibles en **menú de acompañamiento**.

```JavaScript
primerAcompañamiento.seleccionarPlatoMenuAcompañamiento('Pimientos asados con cebolla caramelizada');

/*salida --> Los Pimientos Asados con cebolla caramelizada son una opción llena de sabor. La dulzura de la cebolla caramelizada complementa perfectamente el sabor ahumado de los pimientos asados.
El precio de este plato es de 13 euros.
*/

segundoAcompañamiento.seleccionarPlatoMenuAcompañamiento(2); //En caso de no utilizar un argumento válido.

//salida --> Disculpa,  introduce un plato existente en el menú de acompañamiento.

```
* La función `laCuenta();` nos devuelve un `string` que contiene el precio total de los productos que hemos ido seleccionando en nuestro pedido.


  