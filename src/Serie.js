"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Serie = void 0;
class Serie {
    constructor(id, nombre, plataforma, temporadas, descripcion, referencia, imagen) {
        this.id = id;
        this.nombre = nombre;
        this.plataforma = plataforma;
        this.temporadas = temporadas;
        this.descripcion = descripcion;
        this.referencia = referencia;
        this.imagen = imagen;
    }
    getId() {
        return this.id;
    }
    getNombre() {
        return this.nombre;
    }
    getTemporadas() {
        return this.temporadas;
    }
    getPlataforma() {
        return this.plataforma;
    }
}
exports.Serie = Serie;
