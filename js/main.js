window.addEventListener("load", () => {

    setTimeout(carga, 2000)

    function carga (){

        document.getElementById("precarga").className = "noseve";

        document.getElementById("contenido").className = "none";
    }
})