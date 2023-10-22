export class Serie{
    
    private id: number;
    private nombre: string;
    private plataforma:string;
    private temporadas:number;
    private descripcion:string;
    private referencia:string;
    private imagen:string;

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

    getDescripcion(): string {
        return this.descripcion;
    }

    getReferencia(): string {
        return this.referencia;
    }

    getImagen(): string {
        return this.imagen;
    }

}