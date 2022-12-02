const d = document;
export default function time(reloj, buttonA, buttonB) {
    let clock;
    
    d.addEventListener("click", (e) => {
        
        if (e.target.matches(buttonA)){
            clock = setInterval(()=>{
            let c = new Date().toLocaleTimeString();
            d.querySelector(reloj).innerHTML = `<h2>${c}</h2> `;
        }, 1000);
            e.target.disabled = true;
        }

        if (e.target.matches(buttonB)){
            clearInterval(clock);
            d.querySelector(reloj).innerHTML = null;
            d.querySelector(buttonA).disabled = false;
        }
        }
    )
}
