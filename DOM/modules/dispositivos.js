const d = document,
      n = navigator,
      ua = n.userAgent; 

export default function deviceInfo(id) {
    let $id = d.querySelector(id),

    //Detección de dispoisitivos:

    //Movil
    isMobile = {
        andoid: () => ua.match(/android/i),
        ios: () => ua.match(/iphone|ipad|ipod/i),
        windows : () => ua.match(/windows phone/i),
        any: function () {
            return this.andoid() || this.ios() || this.windows();
        },
    },

    //Escritorio
    isDesktop = {
        linux : () => ua.match(/linux/i),
        mac : () => ua.match(/mac os/i),
        windows : () => ua.match(/windows nt/i),
        any : function () {
            return this.linux() || this.mac() || this.windows();
        },
    },


    //Navegador
    isBrowser = {
        chrome : () => ua.match(/chrome/i),
        safari : () => ua.match(/safari/i),
        firefox : () => ua.match(/firefox/i),
        opera : () => ua.match(/opera | opera mini/i),
        ie : () => ua.match(/mise°iemobile/i),
        edge: () => ua.match(/edge/i),
        any: function () {
            return(
                this.ie()||
                this.edge()||
                this.chrome()||
                this.safari()||
                this.firefox()||
                this.opera()
            );
        },
    };

    $id.innerHTML =`
    <ul>
        <li>User Agent: <b>${ua}</b></li>
        <li>O.S: <b>${isMobile.any()? isMobile.any(): isDesktop.any()}</b></li>
        <li>Navegador: <b>${isBrowser.any()}</b></li>
    </ul>`;

    //Ahora que podemos detectar el dispositivo podemos hacer validaciones para que muestre x contenido dependiendo del dispositivo.
    
    if (isBrowser.chrome()) {
        $id.innerHTML += `<p>Este contenido solo se despliega en Chrome</p>` ;
    };

    //Si queremos redireccionar dependiendo del dispositivo usamos:
    if (isMobile.andoid()) {
        window.location.href = "https://google.com"
    }
}