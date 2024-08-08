const btnTheme=document.querySelector(".borde__btn__theme");
const body=document.querySelector("body");
const esfera=document.querySelector("#btnTheme");

const finEjeX=35;//distancia a recorrer del boton
const inicioEjeX=0;//limite del eje x
const velocidad=25;//tiempo de duracion del efecto 15 milisegundos por px
const rgbOscuro=[255,255,255];//rgb color oscuro
const rgbClaro=[0,0,0];//rgb color claro
const cambioTono=6;//cambio de tono

var posEjeX=0; //posicion de la esfera inicia en 0
var colorThemaOscuro=[...rgbOscuro];
var colorThemaClaro=[...rgbClaro];

body.style.background=`rgb(${rgbOscuro[0]}, ${rgbOscuro[1]}, ${rgbOscuro[2]})`;
body.style.color=`rgb(${rgbClaro[0]}, ${rgbClaro[1]}, ${rgbClaro[2]})`;

btnTheme.addEventListener("click",()=>{
    //funcion movimiento al izquierda
    function movimientoBtn() {
        intervaloT=setInterval(() => {
            esfera.style.left=`${posEjeX}px`;
            if (condicion()) {
                moviendoEsfera () ;
                cambioColores();
                body.style.background=`rgb(${colorThemaOscuro[0]}, ${colorThemaOscuro[1]}, ${colorThemaOscuro[2]})`;
                body.style.color=`rgb(${colorThemaClaro[0]}, ${colorThemaClaro[1]}, ${colorThemaClaro[2]})`;
            } else {
                clearInterval(intervaloT);
                restablecerColor();
            }
        }, velocidad); 
    }
    
    if (posEjeX==inicioEjeX) {
        movimientoBtn(condicion = (()=>posEjeX < finEjeX), moviendoEsfera=(()=>posEjeX++),
        cambioColores=(()=>{
            for (let index = 0; index < colorThemaOscuro.length; index++) {
                    colorThemaOscuro[index]-=cambioTono;
                    colorThemaClaro[index]+=cambioTono;
                }
            }),
            restablecerColor=(()=>{
                body.style.background=`rgb(${rgbClaro[0]}, ${rgbClaro[1]}, ${rgbClaro[2]})`;
                body.style.color=`rgb(${rgbOscuro[0]}, ${rgbOscuro[1]}, ${rgbOscuro[2]})`;
                for (let index = 0; index < colorThemaOscuro.length; index++) {
                    colorThemaOscuro[index]=rgbClaro[index];
                    colorThemaClaro[index]=rgbOscuro[index];      
                };
            })
        
        )
    };
    
    if (posEjeX==finEjeX) {
        movimientoBtn(condicion = (()=>posEjeX > inicioEjeX), moviendoEsfera=(()=>posEjeX--),
        cambioColores=(()=>{
                for (let index = 0; index < colorThemaOscuro.length; index++) {
                    colorThemaOscuro[index]+=cambioTono;
                    colorThemaClaro[index]-=cambioTono;
                }
            }),            
                restablecerColor=(()=>{
                body.style.background=`rgb(${rgbOscuro[0]}, ${rgbOscuro[1]}, ${rgbOscuro[2]})`;
                body.style.color=`rgb(${rgbClaro[0]}, ${rgbClaro[1]}, ${rgbClaro[2]})`;
                for (let index = 0; index < colorThemaOscuro.length; index++) {
                    colorThemaOscuro[index]=rgbOscuro[index];
                    colorThemaClaro[index]=rgbClaro[index];      
                };
            })
        )
    };

})