//Importaciones
const mostrarMenus = require('./mostrarMenus');
const platoPrincipal = require('./seleccionPlatoPrincipal');
const primerAcompañamiento = require ('./seleccionAcompañamientos');
const segundoAcompañamiento = require('./seleccionAcompañamientos');


//Mostramos el menú a nuestros comensales
mostrarMenus();

//Seleccionar el plato principal
platoPrincipal.seleccionarPlatoMenuPrincipal();

//Seleccionar primer plato de acompañamiento
primerAcompañamiento.seleccionarPlatoMenuAcompañamiento();

//Seleccionar segundo plato de acompañamiento
segundoAcompañamiento.seleccionarPlatoMenuAcompañamiento();

//Precio total a pagar
const laCuenta = () => {
    let suma = platoPrincipal.calcularPrecio() +
    segundoAcompañamiento.calcularPrecio() +
    primerAcompañamiento.calcularPrecio();

    console.log(`El precio total a pagar por su comida sería de ${suma} euros.`);
};

laCuenta();









