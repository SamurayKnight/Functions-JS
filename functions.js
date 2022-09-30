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
: (separator === undefined) 
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




//