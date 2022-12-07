const d = document;

export default function date(div, dateUser) {
    const div2 = d.querySelector(div),
          fechU = new Date(dateUser).getTime(),
          tiempo = setInterval(() => {
        
            let fecha = new Date().getTime(),
                time = fechU - fecha,
                days = Math.floor(time/(1000 * 60 * 60 * 24)), 
                hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                minutes = Math.floor((time %  (1000 * 60 * 60))/(1000 * 60)),
                seconds = Math.floor((time %  (1000 * 60))/(1000));

                div2.innerHTML =  `<h3>Faltan ${days} días, ${hours} horas, ${minutes} minutos y ${seconds} segundos para que acabe el año.</h3>`;

            if (time < 0) {
                clearInterval(tiempo);
                div2.innerHTML = `<h3>Acabo el año.</h3>`
            }

        }, 1000);
    };