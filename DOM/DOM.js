import  hamburgerMenu from './modules/button.js';
import  time from './modules/reloj.js'
import  alarma from './modules/alarma.js'

const d = document;


d.addEventListener("DOMContentLoaded", e => {
    hamburgerMenu(".btn" , ".panel",".menu a")
    time(".reloj",".alarma-activa", ".alarma-desactiva")
    alarma("assets/alarma.mp3", ".alarma-sound-a", ".alarma-sound-b" )
})





