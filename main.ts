import { Serie } from './Serie.js';
import { series } from './data.js';

let nodoTbody = document.getElementById("tbody")!;

function anadirFila(serie:Serie):HTMLTableRowElement{
    let nuevafila = document.createElement("tr");

    let numeracion = document.createElement("th");
    numeracion.scope = "row";
    numeracion.innerText = serie.getId().toString();

    nuevafila.appendChild(numeracion);

    let nombre = document.createElement("td"); // creo el nuevo elemento
    nombre.innerText = serie.getNombre();
    nuevafila.appendChild(nombre);

    let plataforma = document.createElement("td"); // creo el nuevo elemento
    plataforma.innerText = serie.getPlataforma();
    nuevafila.appendChild(plataforma);
    
    let temporadas = document.createElement("td"); // creo el nuevo elemento
    temporadas.innerText = serie.getTemporadas().toString();
    nuevafila.appendChild(temporadas);

    return nuevafila;

}

let promedio:number = 0;

for(const element of series){
    nodoTbody.appendChild(anadirFila(element))
    promedio += element.getTemporadas();
}

promedio = promedio/series.length

let nodoTabla = document.getElementById("tabla")!;
nodoTabla.insertAdjacentHTML('afterend', '<br><p> Seasons average: '+ promedio+'</p>') // agrego un elemento con el texto html
