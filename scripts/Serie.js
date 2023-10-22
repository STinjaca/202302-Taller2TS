var Serie = /** @class */ (function () {
    function Serie(id, nombre, plataforma, temporadas, descripcion, referencia, imagen) {
        this.id = id;
        this.nombre = nombre;
        this.plataforma = plataforma;
        this.temporadas = temporadas;
        this.descripcion = descripcion;
        this.referencia = referencia;
        this.imagen = imagen;
    }
    Serie.prototype.getId = function () {
        return this.id;
    };
    Serie.prototype.getNombre = function () {
        return this.nombre;
    };
    Serie.prototype.getTemporadas = function () {
        return this.temporadas;
    };
    Serie.prototype.getPlataforma = function () {
        return this.plataforma;
    };
    Serie.prototype.getDescripcion = function () {
        return this.descripcion;
    };
    Serie.prototype.getReferencia = function () {
        return this.referencia;
    };
    Serie.prototype.getImagen = function () {
        return this.imagen;
    };
    return Serie;
}());
export { Serie };
