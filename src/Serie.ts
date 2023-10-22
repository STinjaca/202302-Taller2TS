export class Serie{
    id: number;
    nombre: string;
    plataforma:string;
    temporadas:number;
    descripcion:string;
    referencia:string;
    imagen:string;

    constructor(id:number, nombre:string, plataforma:string, temporadas:number,descripcion:string,referencia:string, imagen:string){
        this.id = id;
        this.nombre = nombre;
        this.plataforma = plataforma;
        this.temporadas = temporadas;
        this.descripcion = descripcion;
        this.referencia = referencia;
        this.imagen = imagen;
        
    }

    getId():number {
        return this.id;
    }

    getNombre():string {
        return this.nombre;
    }

    getTemporadas():number {
        return this.temporadas;
    }

    getPlataforma():string{
        return this.plataforma;
    }

}