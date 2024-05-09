//Importaciones
const prompt = require('prompt-sync')();

//Generamos el objeto que contiene nuestros platos, comentarios y precios.

const menus = {
    menuPrincipal : {
  
    platos : [
        'Bacalao al Pil Pil', 
        'Marmitako', 
        'Txuleton a la Parrilla',
        'Merluza a la Koskera', 
        'Chipirones en su Tinta', 
        'Pimientos Rellenos de Bacalao',
        'Alubias de Tolosa', 
        'Txangurro', 
        'Solomillo al Foie'],
    
    precios : [20, 14, 50, 25, 18, 17, 15, 42, 30],

    comentarios : [
        "Nuestro Bacalao al Pil Pil es uno de los platos más solicitados, su textura suave y su salsa cremosa lo hacen irresistible.",
        "El Marmitako es un plato tradicional vasco que destaca por su sabor intenso a mar. ¡Es perfecto para los amantes del pescado!",
        "Nuestro Txuletón a la Parrilla es una verdadera obra maestra. La carne se cocina a la perfección y se sirve con un toque de sal que resalta su sabor.",
        "La Merluza a la Koskera es una opción ligera y sabrosa. Su salsa de pimientos y espárragos complementa perfectamente el sabor delicado del pescado.",
        "Los Chipirones en su Tinta son todo un clásico. Su salsa oscura y suave es simplemente deliciosa, ¡te hará chuparte los dedos!",
        "Los Pimientos Rellenos de Bacalao son una excelente opción para los amantes del bacalao. Su combinación de sabores es única y deliciosa.",
        "Nuestras Alubias de Tolosa son reconfortantes y sabrosas. Perfectas para disfrutar en un día frío, ¡te dejarán satisfecho y contento!",
        "El Txangurro es un plato típico del País Vasco que no te puedes perder. Su carne de cangrejo está tan fresca y su salsa es tan deliciosa que querrás repetir.",
        "Nuestro Solomillo al Foie es una verdadera delicia para los amantes de la carne. La combinación de solomillo tierno y foie gras derretido es simplemente irresistible."],
    },


    menuAcompañamientos : {

        platos : [
            "Ensalada verde con vinagreta balsamica",
            "Patatas bravas con salsa alioli",
            "Arroz blanco al vapor",
            "Pure de patatas cremoso",
            "Vegetales salteados con hierbas frescas",
            "Esparragos a la parrilla con aceite de oliva y sal marina",
            "Setas al ajillo",
            "Pimientos asados con cebolla caramelizada",
            "Coles de Bruselas glaseadas con miel y mostaza"
        ],

        precios : [ 11, 8, 10, 12, 18, 24, 15, 13, 16],

        comentarios : ["Nuestra Ensalada Verde con vinagreta balsámica es una opción refrescante y saludable, perfecta como acompañamiento ligero.",
        "Las Patatas Bravas con salsa alioli son un clásico irresistible. La combinación de crujientes patatas con la suavidad del alioli es simplemente deliciosa.",
        "El Arroz Blanco al vapor es un acompañamiento versátil que complementa cualquier plato principal. Su textura suave y neutra permite disfrutar plenamente de los sabores del plato principal.",
        "Nuestro Puré de Patatas Cremoso es reconfortante y sabroso. Su textura suave y cremosa lo convierte en el acompañamiento perfecto para platos de carne o pescado.",
        "Los Vegetales Salteados con hierbas frescas son una excelente opción para los amantes de los vegetales. Su sabor fresco y las hierbas aromáticas realzan su delicioso sabor.",
        "Los Espárragos a la Parrilla con aceite de oliva y sal marina son una delicia primaveral. Su sabor fresco y la ligera caramelización que obtienen en la parrilla los hacen irresistibles.",
        "Las Setas al Ajillo son un acompañamiento sabroso y aromático. El ajo y el aceite de oliva realzan el sabor de las setas, creando una combinación deliciosa.",
        "Los Pimientos Asados con cebolla caramelizada son una opción llena de sabor. La dulzura de la cebolla caramelizada complementa perfectamente el sabor ahumado de los pimientos asados.",
        "Nuestras Coles de Bruselas glaseadas con miel y mostaza son una delicia para el paladar. La combinación de sabores dulces y picantes las hace irresistibles como acompañamiento."]
    }
};

//Mostramos el menú a nuestros comensales
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

mostrarMenus();


//Seleccionar el plato principal
//Creamos nuestra clase para la selección del plato principal

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

//Llamamos a nuestro método para la selección del plato principal
platoPrincipal.seleccionarPlatoMenuPrincipal();

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
                    throw new ErrorPlatosAcompañamientono();
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
class ErrorPlatosAcompañamiento extends Error {
    constructor(mensaje = 'introduce un plato existente en el menú de acompañamiento.') {
        super(mensaje);
        this.name = 'ErrorEnLaSelecciónDePlatos';
    }
}

//Creamos nuestras instancias de clase para aplicar los métodos
const primerAcompañamiento = new Acompañamientos (menus);
const segundoAcompañamiento = new Acompañamientos (menus);


//Llamamos al método para primer plato de acompañamiento
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









