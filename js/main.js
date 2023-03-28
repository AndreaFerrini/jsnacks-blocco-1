//snack1//

const numero1 = parseInt(prompt(`dammi il primo numero`));
const numero2 = parseInt(prompt(`dammi il secondo numero`));

if( numero1 === numero2 ){
    console.log(`${numero1} è uguale a ${numero2}`)
} else if (numero1 > numero2){
    console.log(`${numero1} è maggiore di ${numero2}`)
} else {
    console.log(`${numero1} è minore di ${numero2}`)
}

//snack2//

const parola1 = prompt(`dammi la prima parola`);
const parola2 = prompt(`dammi la seconda parola`);

if( parola1.length === parola2.length ){
    console.log(`${parola1} è lunga uguale a ${parola2}`)
} else if (parola1.length > parola2.length){
    console.log(`${parola1} è più lunga di ${parola2}`)
} else {
    console.log(`${parola1} è più corta di ${parola2}`)
}

//snack3//

let somma = 0;

for( let i = 0; i < 10; i++ ) {
    const numero = parseInt(prompt(`dammi il primo numero`));

    somma += numero
}

console.log(`la somma totale è: ${somma}`)

//snack5//

const arrayNumeri = [];

for(let i = 0; i < 6; i++) {
    const numero = parseFloat(prompt(`dammi il numero da controllare se è dispari`));

    if( numero % 2 != 0 ) {
        arrayNumeri .push( numero )
    }
}

console.log ( arrayNumeri )