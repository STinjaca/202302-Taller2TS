"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_1 = require("./data");
let nodoTbody = document.getElementById("tbody");
function anadirFila(serie) {
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
for (let i = 0; i < data_1.series.length; i++) {
    nodoTbody.appendChild(anadirFila(data_1.series[i]));
}
