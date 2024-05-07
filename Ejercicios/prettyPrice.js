//Propuesta personal al ejercicio

const prettyPrice = (priceOne, priceTwo) => {
    const roundedPriceOne = Math.floor(priceOne);
    if (priceTwo > 1) {
       const elementoOne = roundedPriceOne + (priceTwo / 100) 
       return elementoOne.toFixed(2); //Redondea a dos decimales 
    } else {
        const elementoTwo = roundedPriceOne + priceTwo;
        return elementoTwo.toFixed(2);
    }
};

console.log(prettyPrice(99.20, 50)); //salida --> 99.50
console.log(prettyPrice(99.18, 0.24)); //salida --> 99.24

//Desarrollo de Jordan 

const prettyPriceTwo = (precioBruto, extension) => {
    if(Number.isInteger(extension)) { //Si el número extensión es un número entero
        extension = extension * 0.01; 
    }
    return Math.floor(precioBruto) + extension
}

console.log(prettyPriceTwo(20.32, 93)); //salida --> 20.93