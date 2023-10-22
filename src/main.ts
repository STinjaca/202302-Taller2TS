import { Serie } from "./Serie";
import {series} from "./data"; 

let nodoTbody = document.getElementById("tbody")!;

function anadirFila(serie:Serie):HTMLTableRowElement{
    let nuevafila = document.createElement("tr");

    let numeracion = document.createElement("th");
    numeracion.scope = "row";
    numeracion.innerText = serie.getId().toString();

    nuevafila.appendChild(numeracion);

    let dato = document.createElement("td"); // creo el nuevo elemento
    dato.innerText = serie.getNombre();
    nuevafila.appendChild(dato);

    dato.innerText = serie.getPlataforma();
    nuevafila.appendChild(dato);
    
    dato.innerText = serie.getTemporadas().toString();
    nuevafila.appendChild(dato);

    return nuevafila;

}

for(let i:number = 0; i < series.length; i++){
    nodoTbody.appendChild(anadirFila(series[i]))
    
}
