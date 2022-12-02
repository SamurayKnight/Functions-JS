const d = document;
export default function alarma(sound, buttonA,  buttonB) {
    let alarm;
    const $alarm = d.createElement("audio");
    $alarm.src = sound; 

    d.addEventListener("click", (e) => {
        if (e.target.matches(buttonA)) {
            alarm = setTimeout(() => {
                $alarm.play()
            }, 1000);
        }
        if (e.target.matches(buttonB)) {
        clearInterval(alarm)
        //No hay propiedad que desavilite el sonido, para eso usamos la sig. sintaxis.
            $alarm.pause();
            $alarm.currentTime()
            d.querySelector(buttonA).disabled =  false;
        }
    })
}