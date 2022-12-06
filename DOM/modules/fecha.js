const d = document;

export default function date(da) {
    const f= new Date();
    let mounth = f.getMonth();
    let day = f.getDay();
    let min = f.getMinutes();
    let seg = f.getSeconds();

    const fecha = `Faltan ${mounth} meses, ${day} días, ${min} minutos y ${seg} segundos.`
    
    let centa = setInterval(() => {
        d.querySelector(da).innerHTML = `<h3> ${fecha} </h3>`
    }, 1000);
}