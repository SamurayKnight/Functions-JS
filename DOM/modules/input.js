const d = document;

export default function inputs(form) {
    const f = d.getElementById(form);
    let tester;

    d.addEventListener("submit", e => {
        if (e.target === f) {
            e.preventDefault();
            tester = window.open(
                f.direccion.value, 
                "tester",
                `innerWidth=${f.ancho.value}, innerHeight = ${f.alto.value}`)
        }});

    d.addEventListener("click", e => {
        if (e.target === f.cerrar) tester.close();
    });
};