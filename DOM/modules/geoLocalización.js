const d = document,
      n = navigator;

export default function geoLocalitation(id) {

        const $id = d.getElementById(id),
              options = {
                enableHighAccuary: true,
                timeout: 5000,
                maximumAge:0,
              };

        const success = (position) => {
            let coords = position.coords;

            $id.innerHTML = `
            <p>Tu posición es:</p> 
            <ul>
                <li>Latitud : ${coords.latitude}</li>
                <li>Longitud: ${coords.longitude}</li>
                <li>Presición: ${coords.accuracy} metros.</li>
            </ul>
            <a href="https://www.google.com/maps/@${coords.latitude},${coords.longitude},15z" target="_blank" rel="noopener"> Ver en Google Maps</a>
            `;
        };

        const error = (err) => {
            $id.innerHTML = `<p>Error ${err.code}: ${err.message}</p>`
        };

        n.geolocation.getCurrentPosition(success, error, options);
}