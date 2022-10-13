//Función que te devuelve un tag HTML seleccionado.
const $ = selector => document.querySelector(selector);


const xName = $('.xname');




//Función que devuelve la última letra de un string dado.
const lastLetter = (string = "") => {
    let letter = string.length - 1 ;
    return (!string) 
    ? console.warn('Valor invalido, ingrese un string')
    : console.info(string[letter])
};


lastLetter();
lastLetter("worh");




//Función que cuenta el número de caracteres de un string.
const countString = (string = "") => (!string) 
? console.warn(`El dato${string} no es valido.`) 
: console.info(`Tu string ${string} tiene ${string.length} caractéres.`);


countString();
countString("STRING");




//Función que hace la cartografía de un string en forma de objeto.
const mapString = (string = "") => {
    if (!string) {
        console.warn('Debe ingresar un string.')
    }

    let obj = {};

    for (let i = 0; i < string.length; i++) {
        let consecutive = string[i];

        if (obj[consecutive]) {
            obj[consecutive].push(i)
        } else {
            obj[consecutive] = [i]
        }
    }
        for (let letter in obj) {
            console.info(letter + ':' +  obj[letter])
    }
}


mapString();
mapString("hello");
mapString("churrumino")




//Función que toma un string y el objeto, los compara y devúelve un boolean.
const compareLetters = (string = "", object = "") => {
    if (!string) {
        console.warn('Valor invalido, ingrese un string.')
    }

    if (!object) {
        console.warn('Valor invalido, ingrese un object.')
}

    for (let i of string) 
    if (object[i]) {
    } else {
        return console.info(false)
    }
    return console.info(true)
}


compareLetters();
compareLetters("hello", mapString("hello"));
compareLetters("adabra", mapString("hello"))



//Función que devuelve un string dado recortado n veces.
const cutString = (string ="", number = Number) => (!string)
? console.warn(`El valor no es valido, ingrese un string y un número.`)
    : (!number) 
    ? console.warn(`El valor no es valido. ingrese un número`)
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




//Función que da cuantas veces se repite x palabra en un texto dado.
const repeatWord = (text = "", string = "") => {
    if (!text) {
        return console.warn('Debe de ingresar un texto.')
    }
    
    if (!string) {
        return console.warn('Debe de ingresar una palabra a buscar.')
    }


    let i = 0, count = 0;

    while (i !== -1) {
        i = text.indexOf(string, i);
        if (i !== -1) {
            i ++;
            count ++;
        }
    }
    return console.info(`La palabra "${string}" se repite ${count} veces.`);
}

repeatWord()
repeatWord("lorem impsum")
repeatWord("lorem impsu dolor lorem", "lorem");




//Función que recibe un array y devuelve el elemento más largo.
const findLongestWord = (array = "") => {
    if (typeof array !== 'object') return console.error("Debe ingresar un array.")
    
    let word = '';
    for (let find of array) {
        if (find.length > word.length) {
            word = find
        }
    }
    return console.info(`La palabra más larga del array es: "${word}"`)
}


findLongestWord();
findLongestWord(["los", "lazy", "array", "ochenta"]);





//Función que evalua si un string o frase es palíndromo.
const palindrome = (string = "") => {
    if (!string) return console.warn('Valor invalido, ingrese una palabra o frase.');

    string = string.toLowerCase();
    let reves = string.split("").reverse().join("");

    return (string === reves) 
    ? console.info(`El valor ingresado "${string}" es palindromo. ${reves}`)
    : console.info(`El valor ingresado "${string}" no es palindromo. ${reves}`);
};


palindrome();
palindrome("mujer");
palindrome("otto");




//Función que devuelve true si un número es capicúa y false si no.
const capicua = (a = "") =>  {
    if (!a) return console.warn('Valor vacio, ingrese un número.');
    if (typeof a !== "number") return console.error("Debe ingresar un número.")

    let toString = a.toString()
    let reves = toString.split("").reverse().join("");

    return (toString === reves) 
    ? console.info(true)
    : console.info(false);
};

    capicua();
    capicua("44")
    capicua(123);
    capicua(404);



    
//Función que elimina cierto patrón de caractéres en un texto.
const deleteCharacter = (texto = "", string = "") => (!texto)
? console.warn('Valor invalido, debe ingresar un texto.') 
: (!string) 
    ? console.warn('Valor invalido, debe ingresar un caracter.')
    : console.info(texto.replace(new RegExp(string, "ig"), ''));


deleteCharacter();
deleteCharacter("lorem imsum dolor", "o");




//Función que devuelve un número entre los parámetros dados.
const getNumbers = (x = "", y = "") => (!x)
? console.warn('Valor invalido, debe ingresar un número.')
: (!y)
    ? console.warn('Valor invalido, debe ingresar dos números.') 
    : console.info(Math.round(Math.random() * (y - x) + x));
 

    getNumbers();
    getNumbers(1);
    getNumbers(5, 13);




//Función que verifica si un string llena correctamente otro.
const check = (space = "" , word = "") => {
    if (!word) {
        return console.warn('Valor invalido, ingrese un string.')
    }

    if (word.length !== space.length) {
        return console.info(`Las espacios de "${space}" no coinciden en la palabra "${word}".`)
    }

    for (let i = 0; i < space.length; i++) {
        if (space[i] !== '-' && space[i] !== word[i]) {
            return console.info(`Las carácteres de "${space}" no coinciden en la palabra "${word}".`) 
        }
    }

    return console.info(`Las letras y carácteres de la palabra "${space}" coincide en la palabra "${word}".`);
};

check();
check('pal-','palabra');
check('pa-a', 'pato');
check('p-l--r-', 'palabra');




//Función recursiva que te da el factorial de un número n.
const factorial = (number = undefined) => {
    //Casos de números invalidos.
    if (number === undefined) 
        return console.error('Valor invalido, ingrese un número.')

    if (typeof number !== "number") {
        return console.error('Valor invalido, debe ingresar un número.')
    }
    if (number === 0) 
        return console.error('Valor invalido, No se puede sacar factorial de 0.')
    
    if (Math.sign(number) === -1) 
        return console.error('Valor invalido, el número no se puede ser negativo.')


    //Operación matemática.
    let fact = 1;
    for (let i = number;  i > 1; i--) {
        fact *=  i;
    }; 

    return console.info(`El factorial de ${number} es:${fact}.`)
};


factorial();
factorial("");
factorial(0);
factorial(-1);
factorial(8);




//Función que te devuelve un boolean si un número es primo o no.
const primeNumber = (number = undefined) => {
    if (number === undefined) 
        return console.error('Valor invalido, ingrese un número.')

    if (typeof number !== "number") 
        return console.error('Valor invalido, debe ingresar un número.')

    if (number === 0) 
        return console.error('Valor invalido, 0 no puede ser primo.')

    if (number === 1) 
        return console.error('Valor invalido 1 no  es primo.')

     if (Math.sign(number) === -1) 
        return console.error('Valor invalido, el número no se puede ser negativo.')

    let boolean = false;
    for(let i = 2; number > i; i++){
        if ((number % i) === 0) {
            boolean = true;
            break;
        } 
    }
    return (boolean)
        ? console.info(false)
        : console.info(true)
}


primeNumber(11);
primeNumber(12);




//Función que determina si un número es par o impar.
const parImpar = (number = undefined) => {
    if (number === undefined) 
        return console.error('Valor invalido, ingrese un número.')

    if (number === 0) 
        return console.error('Valor invalido, 0 no es par/impar.')

    let numero = 2;
    if ((number % numero) === 0) {
        return console.info(`Tu número ${number} es primo.`)
    } else {
        return console.info(`Tu número ${number} no es primo.`)
    }
};


parImpar(1);
parImpar(123138);
