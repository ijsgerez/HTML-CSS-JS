// $("body").scroll(()=>{
//    console.log("se esta scroleando")
// }) --> Asi no me funciona 

let referencia1_scroll=0.35*window.innerHeight+document.querySelector("#tarjeta1_historia").offsetHeight;
let referencia2_scroll=referencia1_scroll+document.querySelector("#tarjeta2_historia").offsetHeight;

const cambiar_navegar=()=>{
   console.log("scroll")

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

   /* el principio de la historia de la programacion */
   if(window.scrollY > 0.15*window.innerHeight && window.scrollY < referencia1_scroll){
      $("#tarjeta1_historia").css("visibility", "visible");
      
      $("#tarjeta1_historia>img").css("animation-name", "hacia_derecha_3D");
      $("#tarjeta1_historia>img").css("animation-duration", "3s");
      $("#tarjeta1_historia>img").css("animation-timing-function", "ease-in-out");
      
      $("#tarjeta1_historia>div").css("animation-name", "rotar_izquierda_3D");
      $("#tarjeta1_historia>div").css("animation-duration", "3s");
      $("#tarjeta1_historia>div").css("animation-timing-function", "ease-in-out");
   }

   /* lenguaje de emsamblaje */
   if(window.scrollY > referencia1_scroll && window.scrollY < referencia2_scroll){
   
      $("#tarjeta2_historia").css("visibility", "visible");

      $("#tarjeta2_historia>div").css("animation-name", "rotar_derecha_3D");
      $("#tarjeta2_historia>div").css("animation-duration", "3s");
      $("#tarjeta2_historia>div").css("animation-timing-function", "ease-in-out");

      $("#tarjeta2_historia>img").css("animation-name", "hacia_izquierda_3D");
      $("#tarjeta2_historia>img").css("animation-duration", "3s");
      $("#tarjeta2_historia>img").css("animation-timing-function", "ease-in-out");

   }

   /* los primeros lenguajes de programacion */
   if(window.scrollY > referencia2_scroll){
      $("#tarjeta3_historia").css("visibility", "visible");

      $("#tarjeta3_historia>img").css("animation-name", "hacia_derecha_3D");
      $("#tarjeta3_historia>img").css("animation-duration", "3s");
      $("#tarjeta3_historia>img").css("animation-timing-function", "ease-in-out");

      $("#tarjeta3_historia>div").css("animation-name", "rotar_izquierda_3D");
      $("#tarjeta3_historia>div").css("animation-duration", "3s");
      $("#tarjeta3_historia>div").css("animation-timing-function", "ease-in-out");

   }
}

/* para el video */

let tiempo_reproduccion;

// para boton play
$("#boton_play").click(()=>{
   $("video")[0].play();
   tiempo_reproduccion=setInterval(()=>{
      $("#tiempo_reproduccion_html")[0].textContent=s2mmss($("video")[0].currentTime);
      //$("#duracion_video")[0].textContent=s2mmss($("video")[0].currentTime);
   },1000)
})

// para boton pause
$("#boton_pause").click(()=>{
   $("video")[0].pause();
   clearInterval(tiempo_reproduccion);
})

// para boton sonido
$("#boton_sonido").click(()=>{

   if($("video")[0].muted == false){
      $("video")[0].muted = true;
      $("#estado_sonido").attr("src", "./imagenes/extras/sound_off.svg");
      $("#estado_sonido").attr("alt", "sonido_off");
   } else{
      $("video")[0].muted = false;
      $("#estado_sonido").attr("src", "./imagenes/extras/sound_on.svg");
      $("#estado_sonido").attr("alt", "sonido_on");
   }
   
})

// Funcion que toma el tiempo en segundos y lo transforma en un strign en el formato "mm:ss".
function s2mmss(s){

   let segundos=s;
   let mmss="";
   let segundos_="";
   let minutos_="";

   if(segundos>60){
      let minutos=parseInt(segundos/60);
      segundos=parseInt(segundos%60);

      segundos_ = segundos < 10 ? `0${segundos}` : segundos;
      minutos_ = minutos < 10 ? `0${minutos}` : minutos;

      mmss=`${minutos_}:${segundos_}`;

   } else{
      segundos=parseInt(segundos);
      segundos_ = segundos < 10 ? `0${segundos}` : segundos;
      mmss=`00:${segundos_}`;
   }

   return mmss
}

// para establercer la duracion
window.addEventListener('load', ()=>{ // He prabado con $(window).load pero no funciono
   $("#duracion_video")[0].textContent=s2mmss($("video")[0].duration);
   //console.log($("video")[0].duration)
})
