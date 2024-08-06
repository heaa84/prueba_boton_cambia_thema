let btnTheme=document.querySelector(".borde__btn__theme");
let body=document.querySelector("body");
let esfera=document.querySelector("#btnTheme");
let posEjeX=0; //velocidad en milisegundos
const finEjeX=35;//distancia a recorrer del boton
const velocidad=15;//tiempo de duracion del efecto
let colorThemaOscuro=255;
let colorThemaClaro=0;

btnTheme.addEventListener("click",()=>{
    //movimiento de boton al derecha si el boton estava en la isquierda
    if (posEjeX==0) {
        intervaloT=setInterval(() => {
            esfera.style.left=`${posEjeX}px`;
            if (posEjeX < finEjeX) {
                posEjeX++;
                colorThemaOscuro=colorThemaOscuro-6;
                colorThemaClaro=colorThemaClaro+6;
                console.log(colorThemaOscuro);
                body.style.background=`rgb(${colorThemaOscuro}, ${colorThemaOscuro}, ${colorThemaOscuro})`;
                body.style.color=`rgb(${colorThemaClaro}, ${colorThemaClaro}, ${colorThemaClaro})`;
            } else {
                clearInterval(intervaloT);
                body.style.color="white";
                body.style.background="black";
                colorThemaOscuro=255;
                colorThemaClaro=0;
            }
        }, velocidad); 
    };

    if (posEjeX==finEjeX) {
        console.log("cdsv");
        intervaloT=setInterval(() => {
            esfera.style.left=`${posEjeX}px`;
            if (posEjeX > 0) {
                posEjeX--;
                colorThemaClaro=colorThemaClaro+6;
                colorThemaOscuro=colorThemaOscuro-6;
                body.style.background=`rgb(${colorThemaClaro}, ${colorThemaClaro}, ${colorThemaClaro})`;
                body.style.color=`rgb(${colorThemaOscuro}, ${colorThemaOscuro}, ${colorThemaOscuro})`;
            } else {
                clearInterval(intervaloT);
                body.style.color="black";
                body.style.background="white";
                colorThemaOscuro=255;
                colorThemaClaro=0;
            }
        }, velocidad); 
    };

})