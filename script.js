// associo una const all'elemento del bottone
const pulsanteAccendi = document.getElementById("pulsanteAccendi")

// associo una let all'img iniziale pk poi dovrà cambiarmi
let lampSpenta = document.getElementById("lampSpenta")

// do una condizione al bottone quando ci clicco
pulsanteAccendi.addEventListener("click", 
    function accendiLampadina (){
        if(lampSpenta.src.includes("white_lamp.png")){
            lampSpenta.src = "./imgs/yellow_lamp.png" // in questo modo sto cambiando l'src dell'img da vedere in pagina
            pulsanteAccendi.innerText = "Spegni" // qui invece cambio il testo del btn
        } else {
            lampSpenta.src = "./imgs/white_lamp.png" // altrimenti mi ritorna l'img iniziale
            pulsanteAccendi.innerText = "Accendi"
        }
    }
)