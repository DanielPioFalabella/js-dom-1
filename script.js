// associo una const all'elemento del bottone
const pulsanteAccendi = document.getElementById("pulsanteAccendi")
let lampSpenta = document.getElementById("lampSpenta")

// do una condizione al bottone quando ci clicco
pulsanteAccendi.addEventListener("click", 
    function accendiLampadina (){
        if(lampSpenta.src.includes("white_lamp.png")){
            lampSpenta.src = "./imgs/yellow_lamp.png"
            pulsanteAccendi.innerText = "Spegni"
        } else {
            lampSpenta.src = "./imgs/white_lamp.png"
            pulsanteAccendi.innerText = "Accendi"
        }
    }
)