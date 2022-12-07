const d = document,
      w = window;

export default function scrollTopBotton(btn) {
    const button = d.querySelector(btn);

    w.addEventListener("scroll", e => {
        let scrollTop = w.pageYOffset || d.documentElement.scrollTop;
        if (scrollTop > 600) {
            button.classList.remove("hidden")
        }else{
            button.classList.add("hidden")
        }
    })
    d.addEventListener("click", (e) => {
        if (e.target.matches(btn)) {
            w.scrollTo({
                behavior : "smooth",
                top : 0
            })
        }
    })

}