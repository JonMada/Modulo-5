//Importaciones
const menus = require('./menus');
const prompt = require('prompt-sync')();

//Creamos nuestra clase para la selección de los acompañamientos

class Principal {
    constructor(menus) {
        this.menus = menus;
        this.indicePrincipal = null;
    }

    respuestaPlatoPrincipal () {
        return prompt('Por favor, seleccione un plato del menú principal: ');
    }
        
    seleccionarPlatoMenuPrincipal () {
        let plato;

        do {
            plato = this.respuestaPlatoPrincipal();
            try {
                const platos = this.menus.menuPrincipal.platos;
                if (platos.includes(plato)) {
                    this.indicePrincipal = platos.indexOf(plato);
                    console.log(this.menus.menuPrincipal.comentarios[this.indicePrincipal]);
                    console.log(`El precio de este plato es de ${this.menus.menuPrincipal.precios[this.indicePrincipal]} euros.`);
                } else {
                    throw new ErrorPlatos();
                }                                                                    
        
            } catch (error) {
                console.error('Disculpa, ', error.message);
            } 

        } while(this.indicePrincipal === null);
       
    };

    calcularPrecio() {
        if (this.indicePrincipal !== null) {
            return this.menus.menuPrincipal.precios[this.indicePrincipal];
        } else {
            return 0; 
        }
    }

}

   

//Creamos nuestra clase personalizada para la gestión de error
class ErrorPlatos extends Error {
    constructor(mensaje = 'introduce un plato existente en el menú principal.') {
        super(mensaje);
        this.name = 'ErrorEnLaSelecciónDePlatos';
    }
}


//Realizamos nuestra instancia de clase para aplicar los métodos
const platoPrincipal = new Principal(menus);


//Exportamos nuestra función en un módulo
module.exports = platoPrincipal;


    




