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
lastLetter("worth");




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
        // Esto sería equivalente a un for...of
        // console.log(consecutive)
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




//Función que toma un string y el objeto creado anteriormente, los compara y devúelve un boolean.
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
compareLetters("adabra", mapString("hello"));




//Función que cuenta las vocales y consonantes de un strng dado.
const countVandC = (string = "") => { 
    if (string === "") return console.warn('Valor vacio debe ingresar una string.');
    
    if (typeof string !== "string") return console.error('Valor invalido, debe ingresar un string.');
  
    let c1 = 0;
    let v1 = 0;
    //Podemos añadir más valores.
    let vocal = ['a','e','i','o','u']; 
    let consonante = ['b','c','d','f','g','h','j','k','l','m','n','ñ','p','q','r','s','v','w','x','y','z'];

    for (let i of string) {
        if (vocal.includes(i)) v1++;
        else if (consonante.includes(i)) c1++;
    };

    return console.info(`Tu string "${string}" tiene ${v1} vocales y ${c1} consonantes.`)
};


countVandC([]);
countVandC();
countVandC("");
countVandC("palabra.");




//Función que valida si un texto es verdadero o no dependiendo de los valores uqe especifiquemos.
const valid = (string = "") => {
    if (!string) return console.error('Valor invalido, ingrese un string')

    if (typeof string !== "string") return console.warn('Debe ingresar un valor en el string')
    


    /*Aquí creamos una expresión regular que valida todos los caracteres que le demos. En ella contiene caracteres especiales como:
        ^ : no puede haber nada antes de.
        [] : actuán como agrupadores.
        + : evalúa por cada caracter que tiene el string.
        \s : simboliza espacio en blanco.
        $ : npo puede haber nada después.
        g : comodín de las expr reg.
        test() : evalúa si se cumple o no.
        */
    let expReg = /^[A-Za-zÑñÁáÉéíÍóÓÚú\s]+$/g.test(string)

    return (expReg) 
        ? console.info(`El string ${string} es un string valido.`)
        :console.warn(`El string ${string} NO es un string valido.`)
};


valid();
valid(3);
valid("Nombre Apellido");
valid("Nombre, Edad");





/*Función que valida que un correo sea valido con letras , números @ - .com */
const validEmail = (email = "") => {
    if (!email) return console.error('Valor invalido, ingrese un string');

    if (typeof email!== "string") return console.warn('Debe ingresar un valor en el string');


    //Exp Reg que checa emails.
   let expReg =  /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i.test(email); 

   return (expReg) 
        ? console.info(`El string ${email} es un e-mail valido.`)
        :console.warn(`El string ${email} NO es un e-mail valido.`)
};


validEmail();
validEmail(3);
validEmail("danlee97.06@gmail.com");
validEmail("Nombre, Edad");




/*Función que toma dos parámetros, un string o valor que querramos y una expReg que se itera sobre el valor.*/
const valueComparate = (value = "", expReg = undefined) =>{
    if (!value) return console.error('Valor invalido, ingrese un string..');

    if (typeof value!== "string") return console.warn('Debe ingresar un valor en el string..');

    if (!expReg) return console.error('Valor invalido, ingrese una expresión regular..');

    if (!(expReg instanceof RegExp)) return console.warn(`El valor ${expReg} no es una expresión regular..`);

    let expreg = expReg.test(value);

     return (expReg) 
        ? console.info(`El string ${value} es un patrón valido.`)
        :console.warn(`El string ${value} NO es un patrón valido.`)
};


valueComparate();
valueComparate("");
valueComparate("Nombre",19);
valueComparate("Nombre, Edad", /^[A-Za-zÑñÁáÉéíÍóÓÚú\s]+$/g);
valueComparate("danlee97.06@gmail.com", new RegExp("/[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/" , "i"));





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




//Función que elimina cierto patrón de caractéres en un texto.
const deleteCharacter = (texto = "", string = "") => (!texto)
? console.warn('Valor invalido, debe ingresar un texto.') 
: (!string) 
    ? console.warn('Valor invalido, debe ingresar un caracter.')
    : console.info(texto.replace(new RegExp(string, "ig"), ''));


deleteCharacter();
deleteCharacter("lorem imsum dolor", "o");




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





//Función que devuelve un número entre los parámetros dados.
const getNumbers = (x = "", y = "") => (!x)
? console.warn('Valor invalido, debe ingresar un número.')
: (!y)
    ? console.warn('Valor invalido, debe ingresar dos números.') 
    : console.info(Math.round(Math.random() * (y - x) + x));
 

    getNumbers();
    getNumbers(1);
    getNumbers(5, 13);





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

    return console.info(`El factorial de ${number} es: ${fact}`)
};


factorial();
factorial("");
factorial(0);
factorial(-1);
factorial(8);




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




/*Función que itera sobre un array de números y devuelve ese array elevado al cuadrado.*/

const arrayNum = (array = undefined) => {

    if (!(array instanceof Array)) return console.warn('El valor ingresado no es un array.')

    if (array === undefined) return console.error('Valor vacio, ingrese uno o más números.')

    for (let i of array) {
        if (typeof i !== "number") return console.error(`El valor "${i}" no es un número.`)
    }


    const newArr = array.map(el => el * el)

    return console.log(newArr)
};


arrayNum();
arrayNum([2, 3,'4']);
arrayNum([2, 3, 4]);


/*Función que analiza un array de números y devuelve dos números, el más alto y el más bajo. */
const arrayMinAndMax = (array = undefined) => {

    if (!(array instanceof Array)) return console.warn('El valor ingresado no es un array.')

    if (array === undefined) return console.error('Valor vacio, ingrese uno o más números.')

    for (let i of array) {
        if (typeof i !== "number") return console.error(`El valor "${i}" no es un número.`)
    }

    let min = Math.min(...array);
    let max = Math.max(...array);
    return console.log(`Array original:${array}\n Número mayor:${max}.\n Número menor:${min}.`)
};


arrayMinAndMax();
arrayMinAndMax([2,3,'4']);
arrayMinAndMax([2,3,4]);




/*Función que recibe un Array de números y duvuelve un objeto con dos Arrays, uno con los números pares y el otro con los impares. */
const arrayParAndImparArr = (array = undefined) =>{
   if (!(array instanceof Array)) return console.warn('El valor ingresado no es un array.')

    if (array === undefined) return console.error('Valor vacio, ingrese uno o más números.')

    if (array.length === 0) return console.error("void Array.")

    for (let a of array) 
        if (typeof a !== "number") return console.error( `El valor "${a}" no es un número.`)
    

    //.filter recibe un arreglo y filtra x elemnto dependiendo de la condición que establezcamos.
    return console.info({
        pares:array.filter(num => num % 2 === 0),
        impares:array.filter(num => num % 2 === 1)
    })
};


arrayParAndImparArr();
arrayParAndImparArr([]);
arrayParAndImparArr([2,3,'4'] );
arrayParAndImparArr( [1,2,3,4,5,6,7,8,9]);




//Función que determina si un número es par o impar.
const parImpar = (number = undefined) => {
    if (number === undefined) 
        return console.error('Valor invalido, ingrese un número.')

    if (number === 0) 
        return console.error('Valor invalido, 0 no es par/impar.')

    let numero = 2;
    if ((number % numero) === 0) {
        return console.info(`Tu número ${number} es par.`)
    } else {
        return console.info(`Tu número ${number} es impar.`)
    }
};


parImpar(1);
parImpar(123138);


/*Función que tome un Array como parámetro y devuelva un objeto con dos Arrays uno de manera ascendente y otro de manera descendente. (Solo aplica en números menores a 10.)*/
const arrayAandD = (array = undefined) => {
    if (!(array instanceof Array)) return console.warn('El valor ingresado no es un array.')

    if (array === undefined) return console.error('Valor vacio, ingrese uno o más números.')

    if (array.length === 0) return console.error("void Array.")

    for (let i of array) 
        if (typeof i !== "number") return console.error( `El valor "${i}" no es un número.`)
    
     if (array) {
       console.info({
        Original: array,
        Ascendente:array.map(el => el).sort((a,b)=>a+b),
        Descendente:array.map(el => el).sort().reverse()
    });
     }
 
};

arrayAandD();
arrayAandD([]);
arrayAandD([2,3,'4']);
arrayAandD([1,9,5,4,7,3,8]);




/*Función que saca el promedio de un Array. */
const promedio = (array = undefined) => {

     if (!(array instanceof Array)) return console.warn('El valor ingresado no es un array.')

    if (array === undefined) return console.error('Valor vacio, ingrese uno o más números.')

    if (array.length === 0) return console.error("void Array.")

    for (let i of array) 
        if (typeof i !== "number") return console.error( `El valor "${i}" no es un número.`)
 
    
    //Se puede resolver de otra forma pero esta aprovecha los métodos de ES6.
    return console.info( array.reduce((total, num, i, array)=>{
        total += num;
        if(i === array.length -1){
            return `El promedio es ${total / array.length}`
        } else { 
            return total;
        }
    }))
    
}


promedio();
promedio([]);
promedio([2,3,4,"5"]);
promedio([2,3,4,5,6,7,8,9,10]);




/*Función que elimina elementos duplicados en un array dado.*/
const deleteDuplicateElements = (array = undefined) => {


    if (array === undefined) return console.error('Valor vacio, ingrese uno o más números.')

    if (array.length === 0) return console.error("void Array.")


    return console.info({
    original:array,
    Filtrado:array.filter((value,index,self)=>self.indexOf(value)===index)
     })
}


deleteDuplicateElements()
deleteDuplicateElements([])
deleteDuplicateElements(["x","y",2,3,"a","x",2])




//Función que convierte grados Celcius a Fahrenheit y viceversa.
const convert = (grados = undefined, unidad = "") => {
    if ((unidad !== "F" && unidad !== "C") || (!unidad || !grados)) {
        return console.error('Valor invalido, debe ingresar el valor númerico a convertir junto con una "C" o "F" para especificar la unidad.')
    }


    let convertCToF = Math.round((((grados * 9)/5) + 32));
    let convertFToC = Math.round((grados - 32) * 5/9);

    if (unidad === "F") {
        return console.info(`${grados} grados Fahrenheit equivale a ${convertFToC} Celcius.`)
    };

    if (unidad === "C") {
        return console.info(`${grados} grados Celcius equivale a ${convertCToF} Fahrenheit.`)
    };
}

convert();
convert(2);
convert(2, "a");
convert(45,"F");
convert(45,"C");




//Función que transforma un número X decimal a binario y viceversa. 
const convert2 = (number = undefined, base = undefined) => {
    if (number === undefined) 
        return console.error('Debe ingresar un número.')

    if (typeof number !== "number") 
        return console.error('Valor invalido, ingrese un número.')

    if (base === undefined) 
        return console.error('Debe ingresar una base.')

    if (typeof number !== "number") 
        return console.error('Base invalida, ingrese un número.')

    if (base === 2) {
        return console.info(`${number} base ${base} = ${parseInt(number, base)} base 10.`)
    } else if (base === 10) {
        return console.info(`${number} base ${base} = ${(number.toString(2))} base 2.`)
    }
};

convert2();
convert2(1000, 2);
convert2(1001, 2);
convert2(114, 10);




//Función para hacer X descuento en Y cantidad.
const discount = (precio = undefined, descuento = undefined) => {
    
    if (precio === undefined && descuento === undefined) console.error('Valor vacio. Debe ingresar una cantidad y un descuento.')
    
    if (precio === undefined) console.warn('Debe ingresar una cantidad para aplicar un descuento.')

    if (descuento === undefined)  console.warn('Debe ingresar un descuento para ser aplicado.')


    let discount = (precio * descuento) / 100;
    if (typeof precio === "number" && typeof descuento === "number") {
        return console.info(`El ${descuento}% de $${precio} es: $${discount}.`);
    }
};


discount();
discount(200, "q");
discount("q", 12);
discount(800, 20);




//Función que imprime la hora actual.
const time = () => {
    let date = new Date();
    let hours = date.getHours();
    let min = date.getMinutes();
    let seconds = date.getSeconds();

    document.body.innerHTML = hours+":"+min+":"+seconds;
}

setInterval(time, 1000);




//Función que te devuelve cuantos años han pasado desde la fecha ingresada.
const getDate = (date = undefined) => {
    if (date === undefined) return console.warn('Debe ingresar una fecha a evaluar.')

    //instanceof hace una comparación más espeifica, sirve para validaciones más complejas.
    if (!(date instanceof Date)) return console.error('No ingresaste una fecha vadida.')

    let operation = new Date().getTime() - date.getTime(),
        yearsToSec = 1000 */*quitamos para dar seg*/ 60 * /*quitamos para dar hrs*/60 */*quitamos para dar días*/ 24 * /*quitamos para dar semanas*/ 365 //*10 para decada, * 5 para lustros, *100 para siglos
        total = Math.floor(operation/yearsToSec);

    return (Math.sign(operation) === -1) 
            ? console.info(`Faltan ${Math.abs(total)} años para el ${date.getFullYear()}.`)
            : (Math.sign(operation) === 1) 
                ? console.info(`Han pasado ${Math.abs(total)} años desde ${date.getFullYear()}.`)
                : console.info(`Estamos en el año actual. ${date.getFullYear()}`)
};


getDate();
getDate("");
getDate(new Date());
getDate(new Date(1997,7,6));
getDate(new Date(2050,7,6));




//************EJERCICIO**************
/*
CLASE QUE SE INSTANCIA CON LOS DATOS QUE LE DEMOS, EL PUNTO DE ESTE EJERCICIO ES APRENDER A HACER CLASES CON FUNCIONES E INSTANCIARLA(que se usan al mismo tiempo de recibir los datos).

EL EJEMPLO SERÁ CON UNA CLASE LLAMADA PELÍCULA QUE SE INSTANCIA CON LOS DATOS: ID en IMDB, titulo, director, año de estreno, país/es  , géneros y calificación.

*/ 

class película {
    constructor({id, titulo, director, estreno, pais, generos, calificacion})
    {
        this.id = id;
        this.titulo = titulo; 
        this.director = director;
        this.estreno = estreno;
        this.pais = pais;
        this.generos = generos;
        this.calificacion = calificacion;

        this.validMDB(id);
        this.validTitle(titulo);
        this.validDirector(director);
        this.validPremiere(estreno);
        this.validCountry(pais);
        this.validGender(generos);
        this.validQualification(calificacion);

    }
/*
    Método estatico de ejemplo que sirve para asignar un valor antes de insatnciar una clase, útil para ciertos casos
*/
    static get getListGenders () {
        return ["Action", "Adult", "Adventure", "Animation", "Biography", "Comedy", "Crime", "Documentary" ,"Drama", "Family", "Fantasy", "Film Noir", "Game-Show", "History", "Horror", "Musical", "Music", "Mystery", "News", "Reality-TV", "Romance", "Sci-Fi", "Short", "Sport", "Talk-Show", "Thriller", "War", "Western"];
    }

    static generosAceptados(){
        return console.info(`Los generos aceptados son: ${película.getListGenders.join(",")}`)
    }


    //Funciones para el id y titulo de la película.

    validString(propiedad, valor){
        if (!valor) return console.warn(`${propiedad} ${valor} vacio.`);

        if (typeof valor !== "string") return console.error(`${propiedad} ${valor} ingresado no es un string.`);

        return true;
    }


    validStringLength(propiedad, valor, longitud){
        if (valor.length > longitud) return console.error(`${propiedad} ${valor} excede el número de caracteres permitidos ${longitud}.`);

        return true;
    }


    validArray(propiedad, valor) {
        if (!valor) return console.warn(`${propiedad} "${valor}" esta vacio.`) 

        if (!(valor instanceof Array)) return console.error(`${propiedad} "${valor}" No es un Array.`)

        if (valor.length === 0) return console.error(`${propiedad} "${valor}" no tiene datos.`)

        for (let string of valor) {
            if (typeof string !== "string") return console.error(`El valor "${string}" NO es un String.`)
        }

        return true;
    }


    validNumber(propiedad, valor) {
        if(!valor) return console.warn(`${propiedad} "${valor}" vacio.`)
    }



    validMDB (id) {

        if (this.validString("IMDB id", id)) {

            //Expresión regular. El {} declara en número de caracteres.
            if (!(/^([a-z]{2}([0-9]{7}))$/.test(id))) {

                console.error(`IMDB id ${id} no es valido, debe tener 9 caracteres, los 2 primeros letras minúsculas y 7 números.`);
            }

        }

    }


    validTitle (titulo) {

        if (this.validString("Title", titulo)) {
            if (this.validStringLength("Title", titulo, 100)); {
            }
        }

    }


    validDirector (director) {

        if (this.validString("Director", director)) {
            if (this.validStringLength("Diretor", director, 50)); {
            }
        }

    }


     validPremiere (estreno) {

        if (this.validNumber("Año de estreno", estreno)) {

            //Expresión regular. El {} declara en número de caracteres.
            if (!(/^(([0-9]{4}))$/.test(estreno))) {

                console.error(`Año de estreno "${estreno}" no es valido, debe tener 4 dígitos.`);
            }

        }

    }


    validCountry(pais) {
        this.validArray("País", pais);
    }


    validGender(generos) {
        if (this.validArray("Generos", generos)){

            //Este for of es muy útil dentro de varios códigos ua que se puede extrapolar.
            for (let gender of generos) {
                console.log(gender, película.getListGenders.includes(gender))

                if (!película.getListGenders.includes(gender)) {
                    return console.error(`Generos incorrectos ${gender.join(", ")}`);
                    película.generosAceptados();
                }
            }
        }
    }


    validQualification (calificacion) {

        if (this.validNumber("Calificación", calificacion)) {
            return (calificacion < 0 || calificacion > 10)
            ? console.error(`La calificación tiene que estare dentro de un rango dentro de uno a diez.`)
            : this.calificacion = calificacion.toFixed(1);
        }

    }


    dataSheet() {
        console.info(`Ficha Técnica:\nTitulo:"${this.titulo}"\nDirector:"${this.director}"\nAño:"${this.estreno} \nPaís:"${this.pais.join("-")}"\nGéneros:"${this.generos.join(", ")}"\nCalificación: "${this.calificacion}"\nIMBD ID:"${this.id}"`)
    }



}




//Nuevo Objeto que recibe la función "Peliculas"
const pelicula1 = new película({
    id: "tt1234567",
    tituto: "Titulo X",
    director: "Director de la Película",
    estreno:2020,
    pais:["EUA","RUSIA"],
    generos:["Comedy", "Sport"],
    calificacion: 8.111
})

pelicula1.dataSheet();

//Ahora si yo le paso películas de la página IMDB con los parámetros que pido puedo imprimir en consola los datos de la ficha y si no existe esa película retorna falso especificando en donde falla, que es lo importante de las funciones, ver que falla y porqué.


