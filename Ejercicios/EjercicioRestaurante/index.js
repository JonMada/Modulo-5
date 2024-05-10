
//Nuestros diferentes menus disponibles

const menuDesayuno = {
    menuPrincipal : {

        platos : [
            "Tostada de pan con tomate y aceite de oliva",
            "Tortilla de patatas",
            "Churros",
            "Bocadillo de jamón iberico",
            "Tarta de queso",
            "Pintxo de tortilla de bacalao",
            "Cuajada con miel y nueces",
            "Bizcocho casero",
            "Pintxo de anchoas con pimientos del piquillo"
        ],

        precios : [ 5, 4, 3, 8, 7, 4, 6, 2, 3.50 ],

        comentarios: ["Una opción clásica y saludable para empezar el día, el pan crujiente se combina perfectamente con el sabor fresco del tomate y el toque del aceite de oliva virgen extra.",
            "Una tortilla española tradicional, con una textura suave por dentro y dorada por fuera. Perfecta para aquellos que buscan un desayuno reconfortante y lleno de sabor.",
            "Deliciosos y crujientes, ideales para los amantes del dulce en el desayuno. Se sirven con una taza de chocolate caliente para mojar.",
            "Un clásico español, ofrece un equilibrio perfecto entre el sabor salado del jamón y la suavidad del pan fresco.",
            "Una opción indulgente para empezar el día, se hornea a la perfección, con una textura cremosa y un sabor deliciosamente dulce.",
            "Una variación del clásico pintxo de tortilla, esta versión incluye trozos tiernos de bacalao, ofreciendo un contraste delicioso entre el pescado y la suavidad de la tortilla.",
            "La cuajada es un postre lácteo tradicional, y nuestra versión se sirve con una generosa porción de miel y nueces, añadiendo un toque de dulzura y textura.",
            "Nuestro bizcocho casero es esponjoso y aromático, horneado con ingredientes frescos y de alta calidad. Perfecto para acompañar tu café o té de la mañana.",
            "Una deliciosa combinación de sabores, se sirve sobre una base de pimientos del piquillo asados, creando un bocado lleno de sabor y tradición vasca."
        ],
    },

    menuBebidas : {

        bebidasDesayuno : [
            "Café",
            "Té negro",
            "Zumo de naranja",
            "Leche",
            "Colacao",
            "Café con leche",
            "Infusión de manzanilla",
            "Chocolate caliente",
            "Zumo de pomelo"
        ],

        precios : [1.80, 1.60, 5, 2, 2.50, 1.80, 1.75, 3, 4.50],

        comentarios : ["Una bebida energizante y aromática que te ayudará a despertar por la mañana.",
            "Una opción clásica que te proporcionará un impulso de energía sin la cafeína.",
            "Una elección refrescante y llena de vitaminas para comenzar el día con buen pie.",
            "Una bebida reconfortante que combina perfectamente con una variedad de desayunos.",
            "Ideal para los amantes del chocolate, esta bebida te proporcionará un dulce inicio de día.",
            "Una mezcla perfecta de café y leche, suave y reconfortante para las mañanas frías.",
            "Una opción relajante que te ayudará a empezar el día de manera tranquila y calmada.",
            "Una deliciosa indulgencia para los amantes del chocolate, perfecta para el desayuno o la merienda.",
            "Una bebida refrescante con un toque cítrico, ideal para despertar tus papilas gustativas por la mañana."
        ]
    }
}

const menusTardeNoche = {
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
        "Nuestras Coles de Bruselas glaseadas con miel y mostaza son una delicia para el paladar. La combinación de sabores dulces y picantes las hace irresistibles como acompañamiento."],
    },

    menuBebidas : {

        bebidas : [
            "Txakoli de Bizkaia",
            "Sidra",
            "Kalimotxo",
            "Cañon",
            "Patxaran",
            "Cerveza artesanal vasca",
            "Vino de Rioja Alavesa",
            'Txakoli de Getaria',
            "Zurito"
        ],

        precios : [15, 10, 5, 7, 12, 8, 20, 18, 4],
        
        comentarios : ["Un vino blanco joven y afrutado, perfecto para acompañar estos platos típicos de la región.",
        "Refrescante y con un toque ácido característico, ideal para maridar con platos de pescado y mariscos.",
        "Una mezcla refrescante de vino tinto y cola, popular entre los jóvenes y perfecta para cualquier ocasión informal.",
        "Una cerveza rubia de cuerpo ligero y sabor suave, perfecta para disfrutar en cualquier momento del día.",
        "Licor típico vasco elaborado a base de endrinas, con un sabor dulce y una ligera sensación alcohólica.",
        "Variedad de cervezas locales con sabores y aromas únicos, producidas con métodos tradicionales.",
        "Vino tinto de gran calidad y complejidad, con notas frutales y un final largo y elegante.",
        "Otro excelente ejemplo de vino blanco vasco, fresco y con un ligero toque de acidez.",
        "Una pequeña caña de cerveza, perfecta para acompañar los pintxos y compartir con amigos."]

    }
};


//Preguntamos la hora al cliente
do {
    var hora = prompt("Por favor, introduce la hora de llegada a nuestro restaurante en formato HH:MM (24 horas):");

} while (!/^([01]?[0-9]|2[0-3]):[0-5][0-9]$/.test(hora));


//Creamos dos variables de la respuesta del prompt 'horas' y 'minutos' y convertimos la cadena a número
var [horas, minutos] = hora.split(':');
horas = parseInt(horas); 
minutos = parseInt(minutos);

//Creamos nuestra clase para la gestión de errores
class ErrorPlatos extends Error {
    constructor(mensaje = 'Upss...parece que ha habido un error en la selección que ha realizado.') {
        super(mensaje);
        this.name = 'ErrorEnLaSelecciónDePlatos';
    }
}

//Creamos nuestra variable para el precio total y producto
var productosSeleccionados = [];
var precioTotal = [];

//Preguntamos a nuestro cliente si quiere ver el menú
var respuestaInicial;
respuestaInicial = prompt('¡Bienvenido a nuestro restaurante! ¿Te gustaría ver los menús de los que disponemos? Responde si/no: ');

//Función para mostrar el menú a nuestros comensales
const mostrarMenus = () => {

    if (respuestaInicial.toLowerCase() === 'si' && horas >= 7 && horas <= 23) {

        if (horas >= 7 && horas <= 12 ) {
            
            //Plato para el desayuno
            alert('¡Hora del desayuno! Aquí te muestro los platos del desayuno');

            var platosDesayuno = "";
            for (let plato of menuDesayuno.menuPrincipal.platos) {
                platosDesayuno += plato + "\n"; 
            }

            var mensaje = `Seleccione uno de los platos:\n${platosDesayuno}`;
            
            const respuestaPlatoDesayuno = prompt(mensaje.toLowerCase());

            seleccionarPlatoDesayuno (respuestaPlatoDesayuno);

            //Bebida para el desayuno
            alert('A continuación, seleccione la bebida que prefiera para acompañar con su desayuno');

            var todasBebidasDesayuno = '';
            for (let bebida of menuDesayuno.menuBebidas.bebidasDesayuno) {
                todasBebidasDesayuno += bebida + "\n"; 
            }

            var mensaje = `Seleccione una de las bebidas:\n${todasBebidasDesayuno}`;
            const respuestaBebidaDesayuno = prompt(mensaje.toLowerCase());

            seleccionarBebidaDesayuno (respuestaBebidaDesayuno);
        }

        else if (horas >= 13 && horas <= 17 ) {

            //Plato para la comida
            alert('¡Hora de comer! Aquí tiene los platos principales para la comida');

            var platosComida = "";
            for (let plato of menusTardeNoche.menuPrincipal.platos) {
                platosComida += plato + "\n"; 
            }

            var mensaje = `Seleccione uno de los platos:\n${platosComida}`;
            
            const respuestaPlatoComida = prompt(mensaje.toLowerCase());

            seleccionarPlatoComida (respuestaPlatoComida);

            //Plato de acompañamiento
            alert('Para seguir, le muestro los acompañamientos para la comida');

            var acompañamientosComida = "";
            for (let plato of menusTardeNoche.menuAcompañamientos.platos) {
                acompañamientosComida += plato + "\n"; 
            }

            var mensaje = `Seleccione uno de los platos:\n${acompañamientosComida}`;
            
            const respuestaAcompañamientoComida = prompt(mensaje.toLowerCase());

            seleccionarAcompañamientoComida (respuestaAcompañamientoComida);

            //Bebida para la comida 
            alert('A continuación, seleccione la bebida que prefiera para acompañar con su comida');

            var todasBebidasComida = '';
            for (let bebida of menusTardeNoche.menuBebidas.bebidas) {
                todasBebidasComida += bebida + "\n"; 
            }

            var mensaje = `Seleccione una de las bebidas:\n${todasBebidasComida}`;
            const respuestaBebidaComida = prompt(mensaje.toLowerCase());

            seleccionarBebidaComida (respuestaBebidaComida);
        }

        else if (horas >= 18 && horas <= 23 ) {

            //Plato para la cena
            alert('¡Hora de cenar! Aquí tiene los platos principales para la cena');

            var platosCena = "";
            for (let plato of menusTardeNoche.menuPrincipal.platos) {
                platosCena += plato + "\n"; 
            }

            var mensaje = `Seleccione uno de los platos:\n${platosCena}`;
            
            const respuestaPlatoCena = prompt(mensaje.toLowerCase());

            seleccionarPlatoCena (respuestaPlatoCena);

            //Plato de acompañamiento
            alert('Para seguir, le muestro los acompañamientos para su cena');

            var acompañamientosCena = "";
            for (let plato of menusTardeNoche.menuAcompañamientos.platos) {
                acompañamientosCena += plato + "\n"; 
            }

            var mensaje = `Seleccione uno de los platos:\n${acompañamientosCena}`;
            
            const respuestaAcompañamientoCena = prompt(mensaje.toLowerCase());

            seleccionarAcompañamientoCena (respuestaAcompañamientoCena);

            //Bebida para la cena
            alert('A continuación, seleccione la bebida que prefiera para acompañar con su cena');

            var todasBebidasCena = '';
            for (let bebida of menusTardeNoche.menuBebidas.bebidas) {
                todasBebidasCena += bebida + "\n"; 
            }

            var mensaje = `Seleccione una de las bebidas:\n${todasBebidasCena}`;
            const respuestaBebidaCena = prompt(mensaje.toLowerCase());

            seleccionarBebidaCena (respuestaBebidaCena);   
        }

        //La cuenta

        function laCuenta (productos, precios) {
            var cuenta = precios.reduce(function(total, precio) {
                return total + precio
            }, 0);

            if (productos.length === 2) {
                alert ( `Esto es la cuenta total a pagar: \n 
                ${productos[0]} --> ${precios[0]} \n
                ${productos[1]} --> ${precios[1]} \n
                Total: ${cuenta}) euros.`);
            } else {
                alert ( `Esto es la cuenta total a pagar: \n 
                ${productos[0]} --> ${precios[0]} \n
                ${productos[1]} --> ${precios[1]} \n
                ${productos[2]} --> ${precios[2]} \n
                Total:  ${cuenta} euros.`);
            }
        }

        laCuenta(productosSeleccionados, precioTotal);

    } else if (respuestaInicial.toLowerCase() === 'si' && horas < 7) {
            var cerrado = true;

            alert('¡Vaya!...Restaurante cerrado disculpe las molestias');
            
            if(cerrado) {
                var res = prompt('¿Quiere consultar nuestros horarios? si/no');
                if (res.toLowerCase() === 'si') {
                    alert('Estos son nuestros horarios: Desayunos --> 07:00 - 12:59\n Comidas --> 13:00 - 17:59\n Cenas --> 20:00 - 23:59');
                } else {
                    alert ('De acuerdo, hasta la próxima')
                }
            }

    } else if (respuestaInicial.toLowerCase() === 'no') {
        alert('De acuerdo, hasta la próxima');

    } else {
        do {
            respuestaInicial = prompt('Por favor, responde correctamente. ¿Quiere ver los menús? si/no: ').toLowerCase();
        } while (respuestaInicial !== 'si' && respuestaInicial !== 'no');
        mostrarMenus();
    }

}


//Funciones desayuno

function seleccionarPlatoDesayuno (platoDesayunoSeleccionado) {
    var indicePrincipal = null;
    
    do {
        try {
            var platos = menuDesayuno.menuPrincipal.platos.map(plato => plato.toLowerCase());
            if (platos.includes(platoDesayunoSeleccionado.toLowerCase())) {
                indicePrincipal = platos.indexOf(platoDesayunoSeleccionado);
                alert(`¡Ha seleccionado ${platoDesayunoSeleccionado}! ${menuDesayuno.menuPrincipal.comentarios[indicePrincipal]}`);
                productosSeleccionados.push(platoDesayunoSeleccionado);
                alert(`Su precio es de ${menuDesayuno.menuPrincipal.precios[indicePrincipal]} euros.`);
                precioTotal.push(menuDesayuno.menuPrincipal.precios[indicePrincipal]);
            } else {
                throw new ErrorPlatos();
            }                                                                    
        
        } catch (error) {
            alert(error.message);
            platoDesayunoSeleccionado = prompt('Disculpe, seleccione uno de los platos disponibles en el menú:\n' + platos.join('\n')).toLowerCase();
            
        } 

    } while(indicePrincipal === null);
}



function seleccionarBebidaDesayuno (bebidaDesayunoSeleccionada) {
    var indicePrincipal = null;
    
    do {
        try {
            var bebidas = menuDesayuno.menuBebidas.bebidasDesayuno.map(bebida => bebida.toLowerCase());
            if (bebidas.includes(bebidaDesayunoSeleccionada.toLowerCase())) {
                indicePrincipal = bebidas.indexOf(bebidaDesayunoSeleccionada);
                alert(`¡Ha seleccionado ${bebidaDesayunoSeleccionada}! ${menuDesayuno.menuBebidas.comentarios[indicePrincipal]}`);
                productosSeleccionados.push(bebidaDesayunoSeleccionada); 
                alert(`Su precio es de ${menuDesayuno.menuBebidas.precios[indicePrincipal]} euros.`);
                precioTotal.push(menuDesayuno.menuBebidas.precios[indicePrincipal]);
            } else {
                throw new ErrorPlatos();
            }                                                                    
        
        } catch (error) {
            alert(error.message);
            bebidaDesayunoSeleccionada = prompt('Disculpe, seleccione uno de las bebidas disponibles en el menú:\n' + bebidas.join('\n')).toLowerCase();
            
        } 

    } while(indicePrincipal === null);
}


//Funciones comida

function seleccionarPlatoComida  (platoComidaSeleccionado) {
    var indicePrincipal = null;
    
    do {
        try {
            var platos = menusTardeNoche.menuPrincipal.platos.map(plato => plato.toLowerCase());
            if (platos.includes(platoComidaSeleccionado.toLowerCase())) {
                indicePrincipal = platos.indexOf(platoComidaSeleccionado);
                alert(`¡Ha seleccionado ${platoComidaSeleccionado}! ${menusTardeNoche.menuPrincipal.comentarios[indicePrincipal]}`);
                productosSeleccionados.push(platoComidaSeleccionado);
                alert(`Su precio es de ${menusTardeNoche.menuPrincipal.precios[indicePrincipal]} euros.`);
                precioTotal.push(menusTardeNoche.menuPrincipal.precios[indicePrincipal]);
            } else {
                throw new ErrorPlatos();
            }                                                                    
        
        } catch (error) {
            alert(error.message);
            platoComidaSeleccionado = prompt('Disculpe, seleccione uno de los platos disponibles en el menú:\n' + platos.join('\n')).toLowerCase();
            
        } 

    } while(indicePrincipal === null);
}


function  seleccionarAcompañamientoComida (acompañamientoComidaSeleccionado) {
    var indicePrincipal = null;
    
    do {
        try {
            var platos = menusTardeNoche.menuAcompañamientos.platos.map(plato => plato.toLowerCase());
            if (platos.includes(acompañamientoComidaSeleccionado.toLowerCase())) {
                indicePrincipal = platos.indexOf(acompañamientoComidaSeleccionado);
                alert(`¡Ha seleccionado ${acompañamientoComidaSeleccionado}! ${menusTardeNoche.menuAcompañamientos.comentarios[indicePrincipal]}`);
                productosSeleccionados.push(acompañamientoComidaSeleccionado);
                alert(`Su precio es de ${menusTardeNoche.menuAcompañamientos.precios[indicePrincipal]} euros.`);
                precioTotal.push(menusTardeNoche.menuAcompañamientos.precios[indicePrincipal]);
            } else {
                throw new ErrorPlatos();
            }                                                                    
        
        } catch (error) {
            alert(error.message);
            acompañamientoComidaSeleccionado = prompt('Disculpe, seleccione uno de los platos disponibles en el menú:\n' + platos.join('\n')).toLowerCase();
            
        } 

    } while(indicePrincipal === null);
}

function seleccionarBebidaComida (bebidaComidaSeleccionada) {
    var indicePrincipal = null;
    
    do {
        try {
            var bebidas = menusTardeNoche.menuBebidas.bebidas.map(bebida=> bebida.toLowerCase());
            if (bebidas.includes(bebidaComidaSeleccionada.toLowerCase())) {
                indicePrincipal = bebidas.indexOf(bebidaComidaSeleccionada);
                alert(`¡Ha seleccionado ${bebidaComidaSeleccionada}! ${menusTardeNoche.menuBebidas.comentarios[indicePrincipal]}`);
                productosSeleccionados.push(bebidaComidaSeleccionada);
                alert(`Su precio es de ${menusTardeNoche.menuBebidas.precios[indicePrincipal]} euros.`);
                precioTotal.push(menusTardeNoche.menuBebidas.precios[indicePrincipal]);
            } else {
                throw new ErrorPlatos();
            }                                                                    
        
        } catch (error) {
            alert(error.message);
            bebidaComidaSeleccionada = prompt('Disculpe, seleccione una de las bebidas disponibles en el menú:\n' + bebidas.join('\n')).toLowerCase();
            
        } 

    } while(indicePrincipal === null);
}


//Funciones cena

function seleccionarPlatoCena  (platoCenaSeleccionado) {
    var indicePrincipal = null;
    
    do {
        try {
            var platos = menusTardeNoche.menuPrincipal.platos.map(plato => plato.toLowerCase());
            if (platos.includes(platoCenaSeleccionado.toLowerCase())) {
                indicePrincipal = platos.indexOf(platoCenaSeleccionado);
                alert(`¡Ha seleccionado ${platoCenaSeleccionado}! ${menusTardeNoche.menuPrincipal.comentarios[indicePrincipal]}`);
                productosSeleccionados.push(platoCenaSeleccionado);
                alert(`Su precio es de ${menusTardeNoche.menuPrincipal.precios[indicePrincipal]} euros.`);
                precioTotal.push(menusTardeNoche.menuPrincipal.precios[indicePrincipal]);
            } else {
                throw new ErrorPlatos();
            }                                                                    
        
        } catch (error) {
            alert(error.message);
            platoCenaSeleccionado = prompt('Disculpe, seleccione uno de los platos disponibles en el menú:\n' + platos.join('\n')).toLowerCase();
            
        } 

    } while(indicePrincipal === null);
}



function  seleccionarAcompañamientoCena (acompañamientoCenaSeleccionado) {
    var indicePrincipal = null;
    
    do {
        try {
            var platos = menusTardeNoche.menuAcompañamientos.platos.map(plato => plato.toLowerCase());
            if (platos.includes(acompañamientoCenaSeleccionado.toLowerCase())) {
                indicePrincipal = platos.indexOf(acompañamientoCenaSeleccionado);
                alert(`¡Ha seleccionado ${acompañamientoCenaSeleccionado}! ${menusTardeNoche.menuAcompañamientos.comentarios[indicePrincipal]}`);
                productosSeleccionados.push(acompañamientoCenaSeleccionado);
                alert(`Su precio es de ${menusTardeNoche.menuAcompañamientos.precios[indicePrincipal]} euros.`);
                precioTotal.push(menusTardeNoche.menuAcompañamientos.precios[indicePrincipal]);
            } else {
                throw new ErrorPlatos();
            }                                                                    
        
        } catch (error) {
            alert(error.message);
            acompañamientoCenaSeleccionado = prompt('Disculpe, seleccione uno de los platos disponibles en el menú:\n' + platos.join('\n')).toLowerCase();
            
        } 

    } while(indicePrincipal === null);
}

function seleccionarBebidaCena (bebidaCenaSeleccionada) {
    var indicePrincipal = null;
    
    do {
        try {
            var bebidas = menusTardeNoche.menuBebidas.bebidas.map(bebida=> bebida.toLowerCase());
            if (bebidas.includes(bebidaCenaSeleccionada.toLowerCase())) {
                indicePrincipal = bebidas.indexOf(bebidaCenaSeleccionada);
                alert(`¡Ha seleccionado ${bebidaCenaSeleccionada}! ${menusTardeNoche.menuBebidas.comentarios[indicePrincipal]}`);
                productosSeleccionados.push(bebidaCenaSeleccionada);
                alert(`Su precio es de ${menusTardeNoche.menuBebidas.precios[indicePrincipal]} euros.`);
                precioTotal.push(menusTardeNoche.menuBebidas.precios[indicePrincipal]);
            } else {
                throw new ErrorPlatos();
            }                                                                    
        
        } catch (error) {
            alert(error.message);
            bebidaCenaSeleccionada = prompt('Disculpe, seleccione una de las bebidas disponibles en el menú:\n' + bebidas.join('\n')).toLowerCase();
            
        } 

    } while(indicePrincipal === null);
}


//Ejecutamos la función
mostrarMenus();




