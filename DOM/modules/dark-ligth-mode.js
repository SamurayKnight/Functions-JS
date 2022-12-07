const d = document;
export default function darkLightMode(btn, darkClass) {
    const btnTheme = d.querySelector(btn),
          selectors = d.querySelectorAll("[data-dark]");
        
    let  moon = "🌙",
         sun  =  "☀️";

    d.addEventListener("click", (e) => {
        if (e.target.matches(btn)) {
            if (btnTheme.textContent === moon) {
                selectors.forEach((el) => el.classList.add(darkClass))
                btnTheme.textContent = sun;
            } else {
                selectors.forEach((el) => el.classList.remove(darkClass))
                btnTheme.textContent = moon;
            }
            }
        })
    }