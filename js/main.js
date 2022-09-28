window.addEventListener("load", () => {

    setTimeout(carga, 3000)

    function carga (){

        document.getElementById("precarga").className = "noseve";

        document.getElementById("contenido").className = "none";
    }
})

function salir (){

    document.getElementById("salir").className = "noseve"
}

function ver (){
    
    document.getElementById("ver").className = "seve"
}

function soñar (){
    document.getElementById("ver").className = "noseve"
    document.getElementById("soñar").className = "seve"
}

function volar (){

    document.getElementById("soñar").className = "noseve"
    document.getElementById("volar").className = "seve"
}

function marca (){

    document.getElementById("volar").className = "noseve"
    document.getElementById("marca").className = "seve"
}

setTimeout (salir, 500)
setTimeout (ver,501)
setTimeout (soñar,1000)
setTimeout (volar,1500)
setTimeout (marca,2000)