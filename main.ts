import { Serie } from './Serie.js';
import { series } from './data.js';

let nodoTbody = document.getElementById("tbody")!;

function anadirFila(serie:Serie):HTMLTableRowElement{
    let nuevafila = document.createElement("tr");
    nuevafila.addEventListener("click", (event) => {mostrarDatos(nuevafila)});

    let numeracion = document.createElement("th");
    numeracion.scope = "row";
    numeracion.innerText = serie.getId().toString();

    nuevafila.appendChild(numeracion);

    let nombre = document.createElement("td"); // creo el nuevo elemento
    let nombrelink = document.createElement("a");
    nombrelink.setAttribute("href", serie.getImagen());
    nombrelink.setAttribute("target", "_blank");
    nombrelink.innerText = serie.getNombre();
    nombre.appendChild(nombrelink);
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

// Seleccionado

function mostrarDatos(nuevafila:HTMLTableRowElement):void{
    let serie: Serie = null!;
    for(const element of series){
        if(element.getId() == Number( nuevafila.children[0].textContent)){
            serie = element;
        }
    }

    if (serie != null){
        document.getElementById("descripcionTarjeta")!.innerText = serie.getDescripcion(); 
        document.getElementById("tituloTarjeta")!.innerText = serie.getNombre(); 
        document.getElementById("linkTarjeta")!.innerText = serie.getReferencia(); 
        document.getElementById("linkTarjeta")!.setAttribute("href", serie.getReferencia());
        document.getElementById("imgTarjeta")!.setAttribute("src", serie.getImagen());
    }
}

