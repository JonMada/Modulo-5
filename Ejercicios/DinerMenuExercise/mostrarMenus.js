//Importaciones
const menus = require('./menus');
const prompt = require('prompt-sync')();

//Función para mostrar el menú a nuestros comensales
const mostrarMenus = () => {
    console.log('Bienvenido a nuestro restaurante. ¿Te gustaría ver los menús de los que disponemos?');
    const respuesta = prompt ('Responde si/no: ');

    if (respuesta.toLowerCase() === 'si') {

        console.log('Perfecto. Aquí te muestro los platos');
        var i = 0;
        console.log('Este es nuestro menú principal: ')
        while (i < menus.menuPrincipal.platos.length) {
        console.log(' - ' + menus.menuPrincipal.platos[i]);
        i ++;
        }

        var i = 0;
        console.log('Por otro lado, estos son los platos disponibles en nuestro menú de acompañamiento: ')
        while (i < menus.menuAcompañamientos.platos.length) {
            console.log(' - ' + menus.menuAcompañamientos.platos[i]);
            i ++;
        }
    } else if (respuesta.toLowerCase() === 'no') {
        throw new Error('De acuerdo. Hasta la próxima');
    } else {
        console.log('Por favor, responda si o no');
    }
}

module.exports = mostrarMenus;