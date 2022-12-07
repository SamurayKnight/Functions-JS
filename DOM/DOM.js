import  hamburgerMenu from './modules/button.js';
import  time from './modules/reloj.js';
import  alarma from './modules/alarma.js';
import atajos from './modules/atajos.js';
import moveBall from './modules/movimiento.js';
import date from './modules/fecha.js';
import  scrollTopBotton from './modules/boton-scroll-top.js';
import darkLightMode from './modules/dark-ligth-mode.js'

const d = document;

d.addEventListener("DOMContentLoaded", e => {
    hamburgerMenu(".btn" , ".panel",".menu a");
    time(".reloj",".alarma-activa", ".alarma-desactiva");
    alarma("assets/alarma.mp3", ".alarma-sound-a", ".alarma-sound-b" );
    date(".date", "Jan 01, 2023");
    scrollTopBotton(".scroll-top-btn");
    darkLightMode(".divMode", "dark-mode");
});

d.addEventListener("keydown", (e) => {
    atajos(e);
    moveBall(e, ".ball", ".stage");
});



