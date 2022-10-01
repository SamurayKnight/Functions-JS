//Función que te devuelve un tag HTML seleccionado.
const $ = selector => document.querySelector(selector);


const xName = $('.xname');




//Función que cuenta el número de caracteres de un string.
const countString = (string = "") => (!string) 
? console.warn(`El dato${string} no es valido.`) 
: console.info(`Tu string ${string} tiene ${string.length} caractéres.`);


countString();
countString("STRING");




//Función que devuelve un string dado recortado n veces.
const cutString = (string ="", number = NaN) => (!string)
? console.warn(`El valor${string} no es valido.`)
: console.info(string.slice(0, number));


cutString();
cutString("Hello World",5);




//Función que devuelve un array con separación.
const toArray = (string = "", separator = undefined) => (!string) 
? console.warn(`El valor${string} no es valido.`)
: 
    (separator === undefined) 
    ? console.warn(`El valor ${separator} no es valido.`)
    : console.info(string.split(separator));


toArray();
toArray("Hola mundo Hola Mundo"," ");




//Función que repite un texto n veces.
const repeat = (text = "", number = undefined) => {
    if (!text) {
        console.warn(`Valor${text} invalido, debe añadir un texto.`);
    }
    if (number === undefined) {
        console.warn(`Valor invalido, debe añadir un número.`);
    };

    //bucle
    let i = 1;
    while (i <= number) {
        console.info(text);
        i++;
    }
    
};


repeat();
repeat("hola", 2);




//Función que invierte el texto dado.
const reverse = (string = "") => (!string)
? console.warn('Valor invalido, introduce un texto.')
: console.info(string.split('').reverse().join(''));


reverse();
reverse("sevér lA");




//Función que da cuantas veces se repite x palbra en un texto dado.
const repeatWord = (text = "", string = "") => {
    if (!text) {
        console.warn('Debe de ingresar un texto')
    }
    
    if (!string) {
        console.warn('Debe de ingresar una palabra a buscar')
    }


    let i = 0, count = 0;

    while (i !== -1) {
        i = text.indexOf(string, i);
        if (i !== -1) {
            i ++;
            count ++;
        }
    }
    return console.info(`La palabra "${string}" se repite ${count} veces.`)
}

repeatWord("lorem impsu dolor lorem", "lorem");

