import { series } from './data.js';
var nodoTbody = document.getElementById("tbody");
function anadirFila(serie) {
    var nuevafila = document.createElement("tr");
    nuevafila.addEventListener("click", function (event) { mostrarDatos(nuevafila); });
    var numeracion = document.createElement("th");
    numeracion.scope = "row";
    numeracion.innerText = serie.getId().toString();
    nuevafila.appendChild(numeracion);
    var nombre = document.createElement("td"); // creo el nuevo elemento
    var nombrelink = document.createElement("a");
    nombrelink.setAttribute("href", serie.getImagen());
    nombrelink.setAttribute("target", "_blank");
    nombrelink.innerText = serie.getNombre();
    nombre.appendChild(nombrelink);
    nuevafila.appendChild(nombre);
    var plataforma = document.createElement("td"); // creo el nuevo elemento
    plataforma.innerText = serie.getPlataforma();
    nuevafila.appendChild(plataforma);
    var temporadas = document.createElement("td"); // creo el nuevo elemento
    temporadas.innerText = serie.getTemporadas().toString();
    nuevafila.appendChild(temporadas);
    return nuevafila;
}
var promedio = 0;
for (var _i = 0, series_1 = series; _i < series_1.length; _i++) {
    var element = series_1[_i];
    nodoTbody.appendChild(anadirFila(element));
    promedio += element.getTemporadas();
}
promedio = promedio / series.length;
var nodoTabla = document.getElementById("tabla");
nodoTabla.insertAdjacentHTML('afterend', '<br><p> Seasons average: ' + promedio + '</p>'); // agrego un elemento con el texto html
// Seleccionado
function mostrarDatos(nuevafila) {
    var serie = null;
    for (var _i = 0, series_2 = series; _i < series_2.length; _i++) {
        var element = series_2[_i];
        if (element.getId() == Number(nuevafila.children[0].textContent)) {
            serie = element;
        }
    }
    if (serie != null) {
        document.getElementById("descripcionTarjeta").innerText = serie.getDescripcion();
        document.getElementById("tituloTarjeta").innerText = serie.getNombre();
        document.getElementById("linkTarjeta").innerText = serie.getReferencia();
        document.getElementById("linkTarjeta").setAttribute("href", serie.getReferencia());
        document.getElementById("imgTarjeta").setAttribute("src", serie.getImagen());
    }
}
