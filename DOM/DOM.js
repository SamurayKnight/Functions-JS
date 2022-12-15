import  hamburgerMenu from './modules/button.js';
import  time from './modules/reloj.js';
import  alarma from './modules/alarma.js';
import atajos from './modules/atajos.js';
import moveBall from './modules/movimiento.js';
import date from './modules/fecha.js';
import  scrollTopBotton from './modules/boton-scroll-top.js';
import darkLightMode from './modules/dark-ligth-mode.js'
import responsive from './modules/responsive.js';
import inputs from './modules/input.js';
import deviceInfo from './modules/dispositivos.js';
import onLine from './modules/online.js';
import geoLocalitation from './modules/geoLocalización.js';
import search from './modules/filtro.js';
import sorteo from './modules/sorteo.js';

const d = document;

d.addEventListener("DOMContentLoaded", e => {
    hamburgerMenu(".btn" , ".panel",".menu a");
    time(".reloj",".alarma-activa", ".alarma-desactiva");
    alarma("assets/alarma.mp3", ".alarma-sound-a", ".alarma-sound-b" );
    date(".date", "Jan 01, 2023");
    scrollTopBotton(".scroll-top-btn");
    responsive("video", "(min-width: 1024px)", `<a href = "https://www.youtube.com/watch?v=bN3jXyJ7yng" target = "_blank" rel="noopener"> Ver Video</a>`,
    `<iframe width="560" height="315" src="https://www.youtube.com/embed/bN3jXyJ7yng" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`);
    responsive("map", "(min-width: 1024px)", `<a href = "https://www.google.com.mx/maps/place/Museo+Soumaya/@19.443326,-99.1924254,14z/data=!4m5!3m4!1s0x85d2021a6e3a3d09:0x9372e2224c033cb3!8m2!3d19.4406926!4d-99.2047001" target = "_blank" rel="noopener"> Ver Video</a>`,
    `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30098.27059995682!2d-99.1924254!3d19.44332605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d2021a6e3a3d09%3A0x9372e2224c033cb3!2sMuseo%20Soumaya!5e0!3m2!1ses-419!2smx!4v1670487803478!5m2!1ses-419!2smx" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`);
    inputs("responsive");
    deviceInfo(".user-agent");
    geoLocalitation("geolocation");
    search(".card-filter", ".card");
    sorteo("#play",".player")
});

d.addEventListener("keydown", (e) => {
    atajos(e);
    moveBall(e, ".ball", ".stage");
});

darkLightMode(".divMode", "dark-mode");
onLine();

