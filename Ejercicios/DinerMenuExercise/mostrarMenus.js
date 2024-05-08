//Importaciones
const menus = require('./menus');

//Función para mostrar el menú a nuestros comensales
const mostrarMenus = () => {
    var i = 0;
    console.log('Hola, mi nombres es Jon y estos son los platos disponibles en nuestro menú principal: ')
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
    
}

module.exports = mostrarMenus;