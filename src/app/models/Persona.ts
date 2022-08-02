export class Persona{
    id?:number;
    nombre:string;
    apellido:string;
    edad:number;
    fechaNac:string;
    seniority:string;
    urlimage:string;
    company:string;
    position:string;
    abouts:string;
    
    constructor(nombre: string, apellido: string, edad:number,fechaNac:string, seniority: string,
    urlimage: string, company: string, position: string, abouts: string) {
        
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.fechaNac = fechaNac;
        this.seniority = seniority;
        this.urlimage = urlimage;
        this.company = company;
        this.position = position;
        this.abouts = abouts;
    }

}