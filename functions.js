//Función que cuenta el número de caracteres de un string.
const countString = (string = "") => (!string) 
? console.warn(`El dato ${string} no es valido.`) 
: console.info(`Tu string tiene ${string.length}.`);

countString();
countString("STRING")