import  hamburgerMenu from './modules/button.js';
import  time from './modules/reloj.js'

const d = document;


d.addEventListener("DOMContentLoaded", e => {
    hamburgerMenu(".btn" , ".panel",".menu a")
    time(".reloj",".alarma-activa", ".alarma-desactiva")
})





