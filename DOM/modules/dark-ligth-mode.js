const d = document,
      ls = localStorage;

export default function darkLightMode(btn, darkClass) {
    const btnTheme = d.querySelector(btn),
          selectors = d.querySelectorAll("[data-dark]");
        
    let  moon = "🌙",
         sun  =  "☀️";

    const darkMode = () =>{
        selectors.forEach((el) => el.classList.add(darkClass))
        btnTheme.textContent = sun;
        ls.setItem("theme", "dark");
    };

    const ligthMode = () => {
        selectors.forEach((el) => el.classList.remove(darkClass))
        btnTheme.textContent = moon;
        ls.setItem("theme", "light");
    };
    
        d.addEventListener("click", (e) => {
            if (e.target.matches(btn)) {
                if (btnTheme.textContent === moon) {
                    darkMode();
                } else {
                    ligthMode();
                }
                }
            });

    /*Guardamos en el localStorage el tema oscuro, así el usuario no tienen que volver a ponerlo.*/
        d.addEventListener("DOMContentLoaded", (e) => {
            if (ls.getItem("theme") === null) ls.setItem("theme","light")
            if (ls.getItem("theme") === "light") ligthMode();
            if (ls.getItem("theme") === "dark") darkMode();
        });
        };