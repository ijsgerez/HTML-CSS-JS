
const cambiar_navegar_juego=()=>{

   /* navegador */
   if(window.scrollY > 0.15*window.innerHeight){
        $("nav").css("background-color", "white");
        $(".ancla_menu").css("color", "#2f3645");
        $(".ancla_menu").css("text_shadow","1px 1px white, 2px 3px grey");

        $("#contenido_historia").addClass("contenido_historia_");
        $("#contenido_juego").addClass("contenido_juego_");
   } else{
        $("nav").css("background-color", "transparent");
        $(".ancla_menu").css("color", "white");
        $(".ancla_menu").css("text_shadow","1px 1px gray, 2px 3px black");
   }

}

/////////////////////////////////////////////////////////////////////////////////////////////////// */
/* /////////////////////////////////////////////////////////////////////////////////////////////////// */
let imagen1=document.getElementById("imagen1_juego");
let imagen2=document.getElementById("imagen2_juego");
let imagen3=document.getElementById("imagen3_juego");

let caja1=document.getElementById("caja1_juego");
let caja2=document.getElementById("caja2_juego");
let caja3=document.getElementById("caja3_juego");

let resultado_caja1=false;
let resultado_caja2=false;
let resultado_caja3=false;
let contador_drop=0;

// dragstart()
imagen1.addEventListener("dragstart",(event)=>{
    let idImagen=imagen1.id;
    event.dataTransfer.setData("Text", idImagen);
})

imagen2.addEventListener("dragstart",(event)=>{
    let idImagen=imagen2.id;
    event.dataTransfer.setData("Text", idImagen);
})

imagen3.addEventListener("dragstart",(event)=>{
    let idImagen=imagen3.id;
    event.dataTransfer.setData("Text", idImagen);
})

// imagen2.addEventListener("dragend",()=>{
//    console.log("Se solto");
// })

// dragover()
caja1.addEventListener("dragover",(event)=>{
    event.preventDefault();
})

caja2.addEventListener("dragover",(event)=>{
    event.preventDefault();
})

caja3.addEventListener("dragover",(event)=>{
    event.preventDefault();
})

// drop()
caja1.addEventListener("drop",(event)=>{

    let info_id=event.dataTransfer.getData("Text");
    let imagen=document.getElementById(info_id);
    event.target.innerHTML=`<img src=${imagen.src} height="100%" width="100%"/>`

    if(imagen.id == "imagen1_juego"){ // FIXME: COrregir hardcoding
        resultado_caja1 = true;
    }

    contador_drop++;

    /* verificacion de resultado: ¿gano o perdio? */
    if(contador_drop==3){
        console.log("Finalizo")
        // realizar animaciones con las imagenes #contenedor_cajas
        
        // quitar border a las cajas
        let cajas_=document.querySelectorAll(".caja_rompecabezas")
        cajas_.forEach(caja_ => {
            caja_.style="border: none";
        })
                    
        ////////////////////////////////////////

        if(resultado_caja1==true && resultado_caja2==true && resultado_caja3==true){
            //console.log("gano")

            document.querySelector("#contenedor_cajas").classList.add("expandir_comprimir_caja");
            document.querySelector("#contenedor_cajas").style="gap:0";

            // hay que cambiar h2 e informar que gano
            setTimeout(()=>{
                document.querySelector(".espacio-titulo").innerHTML=`<span>Felicitaciones!!<br>Puzzle correctamente resuelto</span>`;
                document.querySelector(".espacio-titulo").classList.add("animarh2_juego");
                document.querySelector("#contenedor_cajas").style="visibility:hidden";
            },4000)
        
        } else{
            console.log("perdio")

            document.querySelector("#contenedor_cajas").classList.add("expandir_caja");

            // hay que cambiar h2 e informar que gano
            setTimeout(()=>{
                document.querySelector(".espacio-titulo").innerHTML=`<span>Lo sentimos, Puzzle no resuelto.<br>Prueba otra vez</span>`;
                document.querySelector(".espacio-titulo").classList.add("animarh2_juego");
                document.querySelector(".espacio-titulo").style="z-index:3;position:relative;color:white; text-shadow: 2px 2px #808080, 6px 6px black";
                
                document.querySelector("#contenedor_cajas").classList.add("comprimir_caja");
            },4000)
            
        }
    }

    imagen.remove();
})

caja2.addEventListener("drop",(event)=>{

    let info_id=event.dataTransfer.getData("Text");
    let imagen=document.getElementById(info_id);
    event.target.innerHTML=`<img src=${imagen.src} height="100%" width="100%"/>`

    if(imagen.id == "imagen2_juego"){ // FIXME: COrregir hardcoding
        resultado_caja2 = true;
    }

    contador_drop++;

    /* verificacion de resultado: ¿gano o perdio? */
    if(contador_drop==3){
        console.log("Finalizo")
        // realizar animaciones con las imagenes #contenedor_cajas
        
        // quitar border a las cajas
        let cajas_=document.querySelectorAll(".caja_rompecabezas")
        cajas_.forEach(caja_ => {
            caja_.style="border: none";
        })
                    
        ////////////////////////////////////////

        if(resultado_caja1==true && resultado_caja2==true && resultado_caja3==true){
            //console.log("gano")

            document.querySelector("#contenedor_cajas").classList.add("expandir_comprimir_caja");
            document.querySelector("#contenedor_cajas").style="gap:0";

            // hay que cambiar h2 e informar que gano
            setTimeout(()=>{
                document.querySelector(".espacio-titulo").innerHTML=`<span>Felicitaciones!!<br>Puzzle correctamente resuelto</span>`;
                document.querySelector(".espacio-titulo").classList.add("animarh2_juego");
                document.querySelector("#contenedor_cajas").style="visibility:hidden";
            },4000)
        
        } else{
            console.log("perdio")

            document.querySelector("#contenedor_cajas").classList.add("expandir_caja");

            // hay que cambiar h2 e informar que gano
            setTimeout(()=>{
                document.querySelector(".espacio-titulo").innerHTML=`<span>Lo sentimos, Puzzle no resuelto.<br>Prueba otra vez</span>`;
                document.querySelector(".espacio-titulo").classList.add("animarh2_juego");
                document.querySelector(".espacio-titulo").style="z-index:3;position:relative;color:white; text-shadow: 2px 2px #808080, 6px 6px black";
                
                document.querySelector("#contenedor_cajas").classList.add("comprimir_caja");
            },4000)
            
        }
    }

    imagen.remove();
})

caja3.addEventListener("drop",(event)=>{

    let info_id=event.dataTransfer.getData("Text");
    let imagen=document.getElementById(info_id);
    event.target.innerHTML=`<img src=${imagen.src} height="100%" width="100%"/>`

    if(imagen.id == "imagen3_juego"){ // FIXME: COrregir hardcoding
        resultado_caja3 = true;
    }

    contador_drop++;

    /* verificacion de resultado: ¿gano o perdio? */
    if(contador_drop==3){
        console.log("Finalizo")
        // realizar animaciones con las imagenes #contenedor_cajas
        
        // quitar border a las cajas
        let cajas_=document.querySelectorAll(".caja_rompecabezas")
        cajas_.forEach(caja_ => {
            caja_.style="border: none";
        })
                    
        ////////////////////////////////////////

        if(resultado_caja1==true && resultado_caja2==true && resultado_caja3==true){
            //console.log("gano")

            document.querySelector("#contenedor_cajas").classList.add("expandir_comprimir_caja");
            document.querySelector("#contenedor_cajas").style="gap:0";

            // hay que cambiar h2 e informar que gano
            setTimeout(()=>{
                document.querySelector(".espacio-titulo").innerHTML=`<span>Felicitaciones!!<br>Puzzle correctamente resuelto</span>`;
                document.querySelector(".espacio-titulo").classList.add("animarh2_juego");
                document.querySelector("#contenedor_cajas").style="visibility:hidden";
            },4000)
        
        } else{
            console.log("perdio")

            document.querySelector("#contenedor_cajas").classList.add("expandir_caja");

            // hay que cambiar h2 e informar que gano
            setTimeout(()=>{
                document.querySelector(".espacio-titulo").innerHTML=`<span>Lo sentimos, Puzzle no resuelto.<br>Prueba otra vez</span>`;
                document.querySelector(".espacio-titulo").classList.add("animarh2_juego");
                document.querySelector(".espacio-titulo").style="z-index:3;position:relative;color:white; text-shadow: 2px 2px #808080, 6px 6px black";
                
                document.querySelector("#contenedor_cajas").classList.add("comprimir_caja");
            },4000)

        }
    }

    imagen.remove();
})



/* boton de reinicio */

let boton_reinicio=document.getElementById("boton_reiniciar");
boton_reinicio.addEventListener("click", ()=>{
    location.reload();
})