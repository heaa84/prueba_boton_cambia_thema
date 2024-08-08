const btnTheme=document.querySelector(".borde__btn__theme");
const esfera=document.querySelector("#btnTheme");
const body=document.querySelector("body");
const texto=document.querySelector("body");
let posicionEsfera=0;
//colores en tema claro
let colorFondoBody=`hwb(180 20% 50% / 0.3)`;
let colorFondoEsfera=`hwb(200 40% 10% / 0.3)`;
let colorBorderEsfera=`hwb(180 40% 30% / 0.3)`;
let colorFondoBoton=`hwb(180 20% 60% / 0.3)`;
let colorBorderBoton=`hwb(180 20% 50% / 0.3)`;
let colortextoBody=`hwb(180 50% 70%)`;

//colores en tema oscuro
let colorFondoBodyOscuro=`hwb(180 10% 75%)`;
let colortextoBodyOscuro=`hwb(180 30% 25%)`;
let colorBorderBotonOscuro=`hwb(180 50% 20%)`;
let colorFondoEsferaOscuro=`hwb(200 20% 20%)`;
let colorBorderEsferaOscuro=`hwb(180 40% 30%)`;

//clase de los elementos
class elementos {
    constructor(elemento, hwbBackground, hwbBorder, hwbTexto ,posicionEsfera) {
        this.elemento=elemento;
        this.hwbBackground=hwbBackground;
        this.hwbBorder=hwbBorder;
        this.hwbTexto=hwbTexto;
        this.posicionEsfera=posicionEsfera;
    }
    coloriarElemento = () => {        
        this.elemento.style.background=`${this.hwbBackground}`;
        this.elemento.style.borderColor=`${this.hwbBorder}`;    
        this.elemento.style.color=`${this.hwbTexto}`; 
        this.elemento.style.left=`${this.posicionEsfera}px`;
    }
};
//instancias de objetos elementos en modo claro
const MyBody= new elementos(body, colorFondoBody , null , colortextoBody );
const MyEsfera= new elementos(esfera, colorFondoEsfera,colorBorderEsfera,null,0);
const MyBtnTheme= new elementos(btnTheme, colorFondoBoton,colorBorderBoton);

//modo tema oscuro
const MyBodyOscuro= new elementos(body, colorFondoBodyOscuro , null ,colortextoBodyOscuro );
const MyBtnThemeOscuro= new elementos(btnTheme, colorFondoBoton,colorBorderBotonOscuro);
const MyEsferaOscura= new elementos(esfera, colorFondoEsferaOscuro,colorBorderEsferaOscuro,null,34);

//invocando metodos tema claro
MyBody.coloriarElemento();
MyEsfera.coloriarElemento();
MyBtnTheme.coloriarElemento();

// cuando se de click al boton
btnTheme.addEventListener("click",()=>{
    //lanza modo oscuro si la esfera esta a la izquierda
    if(posicionEsfera==0){
        MyBodyOscuro.coloriarElemento();
        MyBtnThemeOscuro.coloriarElemento();
        MyEsferaOscura.coloriarElemento();
        posicionEsfera=34;
    }else{
        //lanza modo claro si la esfera esta a la derecha
        if(posicionEsfera==34){
            MyBody.coloriarElemento();
            MyEsfera.coloriarElemento();
            MyBtnTheme.coloriarElemento();
            posicionEsfera=0;
            console.log(posicionEsfera);
            
        };
    }
})