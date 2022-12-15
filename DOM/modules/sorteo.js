const d = document;

export default function sorteo(btn, selector) {
    const winner = (selector) => {
        const players = d.querySelectorAll(selector),
              random = Math.floor(Math.random()*players.length),
              Winner = players[random];

              return `El ganador es: ${Winner.textContent}`
    };

    d.addEventListener("click", (e) =>{
        if (e.target.matches(btn)) {
            let result = winner(selector);
            alert(result);
        }
    })
}