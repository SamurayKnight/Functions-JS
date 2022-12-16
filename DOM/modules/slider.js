const $ = document;

export default function slider() {
    const prev = $.querySelector(".slider-btns .prev"),
          next = $.querySelector(".slider-btns .next"),
          slider = $.querySelectorAll(".slider-slide");
          
        let i = 0;

    $.addEventListener("click", e => {
        if (e.target === prev) {
            e.preventDefault();

            slider[i].classList.remove("active");
            i--;

            if (i < 0) {
                i = slider.length -1;
            }

            slider[i].classList.add("active");
            
        }

        if (e.target === next) {
            e.preventDefault();

            slider[i].classList.remove("active");
            i++;

            if (i >= slider.length) {
                i = 0;
            }

            slider[i].classList.add("active");
            
        }

    })
}