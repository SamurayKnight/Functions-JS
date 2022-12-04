const d = document;
let x = 0
let y = 0;

export default function moveBall(e, ball, stage) {
    const bola = d.querySelector(ball);
    const escenario = d.querySelector(stage);
    const limitB = bola.getBoundingClientRect();
    const limitS = escenario.getBoundingClientRect();
          
 
        switch (e.keyCode) {
            case 37:
                if (limitB.left > limitS.left){ 
                e.preventDefault(); 
                x--;
                }
                break;
            case 38:
                if (limitB.top > limitS.top) {
                e.preventDefault();
                y--;}
                break;
            case 39:
                if (limitB.right < limitS.right) {
                e.preventDefault(); 
                x++;}
                break;
            case 40:
                if (limitB.bottom < limitS.bottom)  {
                e.preventDefault();
                y++;}
                break;
        
            default:
                break;

            
            }
            //Propiedad CSS que permite el mov. de un ele.
            bola.style.transform = `translate(${x * 13}px, ${y * 13}px)`
}