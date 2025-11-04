/* para index */

const cambiar_navegador=()=>{
    
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