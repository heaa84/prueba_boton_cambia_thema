const btnTheme=document.querySelector(".borde__btn__theme");
const esfera=document.querySelector("#esfera");
const body=document.querySelector("body");
let posicionEsfera=1;

class btn {
    cambiarTema=()=>{
        if (posicionEsfera==1) {// si la esfera esta ala izquierda
            var intervaloTiempo=setInterval(moverDerecha, 5);
            var blanco=0;
            var tonoBtn=100;
            var tonobody=100; 
            function moverDerecha() {
                posicionEsfera++;
                esfera.style.left=`${posicionEsfera}px`;  
                esfera.style.background=`radial-gradient(circle at bottom,hwb(0 100% 15%),hwb(112 ${blanco+=3.3}% 0%))`;
                btnTheme.style.backgroundColor= `hwb(112 ${tonoBtn-=3.448275862068966}% 3%)`;
                body.style.background=`hwb(200 ${tonobody-=3.448275862068966}% 10%)`;
                if (posicionEsfera==30) {
                    clearInterval(intervaloTiempo);
                }
            };
        }else{
            if (posicionEsfera==30) {// is la esfera esta a la derecha
                var blanco=100;
                var tonoBtn=0;
                var tonobody=0;
                var intervaloTiempo=setInterval(moverIzquierda, 5);
                function moverIzquierda() {
                    posicionEsfera--;
                    esfera.style.left=`${posicionEsfera}px`;
                    esfera.style.background=`radial-gradient(circle at bottom,hwb(122 1% 5% / 0.8),hwb(112 ${blanco-=3.448275862068966}% 3%))`;
                    btnTheme.style.backgroundColor= `hwb(112 ${tonoBtn+=3.379310344827586}% 2%)`                    
                    body.style.background=`hwb(200 ${tonobody+=2.758620689655172}% 10%)`;//background-color: hwb(200 80% 10%);
                    if (posicionEsfera==1) {
                        clearInterval(intervaloTiempo);
                    }
                };
            }
        }
    }
}

const cambiar__tema= new btn();
btnTheme.addEventListener("click",()=>{
    cambiar__tema.cambiarTema();
});