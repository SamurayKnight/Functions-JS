    const d = document,
          w = window;

export default function responsive(id, MQ, contentMovil, contentDesktop) {
    let breakPoint = w.matchMedia(MQ);

    const responsive = (e) => {
        if (e.matches) {
            d.getElementById(id).innerHTML = contentDesktop;
        } else {
            d.getElementById(id).innerHTML = contentMovil;
        }
    }

    breakPoint.addListener(responsive)
}