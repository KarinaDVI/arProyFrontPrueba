export class Project{
    id?:number;
    name:string;
    aboutProject:string;
    urlimg:string;

constructor(name:string,aboutProject:string,urlimg:string){
    this.name=name;
    this.aboutProject=aboutProject;
    this.urlimg=urlimg;

}

} 