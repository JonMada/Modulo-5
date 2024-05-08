//Importaciones
const menus = require('./menus');
const prompt = require('prompt-sync')();


//Creamos nuestra clase para la selección de los acompañamientos

class Acompañamientos {
    
    constructor(menus) {
        this.menus = menus;
        this.indiceAcompañamiento = null;
    }
       
    respuestaPlatoAcompañamiento () {
        return prompt('Por favor seleccione un plato del menú acompañamiento: ')
    }

    seleccionarPlatoMenuAcompañamiento () {
        let plato;
        do {
            plato = this.respuestaPlatoAcompañamiento();
            try {
                const platos = this.menus.menuAcompañamientos.platos;
                if (platos.includes(plato)) {
                    this.indiceAcompañamiento = platos.indexOf(plato);
                    console.log(this.menus.menuAcompañamientos.comentarios[this.indiceAcompañamiento]);
                    console.log(`El precio de este plato es de ${this.menus.menuAcompañamientos.precios[this.indiceAcompañamiento]} euros.`);
                } else {
                    throw new ErrorPlatos();
                }                                                                    
        
            } catch (error) {
                console.error('Disculpa, ', error.message);
            } 
        } while (this.indiceAcompañamiento === null);   
    }
    
    
    calcularPrecio() {
        if (this.indiceAcompañamiento !== null) {
            return this.menus.menuAcompañamientos.precios[this.indiceAcompañamiento];
        } else {
            return 0; 
        }
    }
}

//Creamos nuestra clase personalizada para la gestión de errores
class ErrorPlatos extends Error {
    constructor(mensaje = 'introduce un plato existente en el menú de acompañamiento.') {
        super(mensaje);
        this.name = 'ErrorEnLaSelecciónDePlatos';
    }
}

//Creamos nuestras instancias de clase para aplicar los métodos
const primerAcompañamiento = new Acompañamientos (menus);
const segundoAcompañamiento = new Acompañamientos (menus);



//Exportamos nuestra función en un módulo
module.exports = primerAcompañamiento;
module.exports = segundoAcompañamiento;
