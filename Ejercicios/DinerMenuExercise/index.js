//Importaciones
const mostrarMenus = require('./mostrarMenus');
const platoPrincipal = require('./seleccionPlatoPrincipal');
const primerAcompañamiento = require ('./seleccionAcompañamientos');
const segundoAcompañamiento = require('./seleccionAcompañamientos');
const prompt = require('prompt-sync')();


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

    function respuestaCuenta () {
        return prompt('¿Desea la cuenta? si/no: ');
    }

    let respuesta;

    do {
        respuesta = respuestaCuenta().toLowerCase();
        if (respuesta === 'si') {
            console.log(`El precio total a pagar por su comida sería de ${suma} euros.`);
        } else if ( respuesta === 'no') {
            console.log('¡Estás de suerte! Invita la casa');
        } else {
            console.log('Responda sí o no')
        }
    } while (respuesta != 'si' && respuesta != 'no')
    
};

laCuenta();









