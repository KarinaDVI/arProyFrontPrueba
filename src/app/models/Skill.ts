

export class Skill{
    
    id?:number;
    name:string;
    progress:number;
    confirmsNames:string;
    imageSrc:string;
    outerStrokeColor:string;
    innerStrokeColor:string;
    
    
    

    constructor(name:string,progress:number,
        confirmsNames:string,imageSrc:string,outerStrokeColor:string,innerStrokeColor:string){
        
        this.name=name;
        this.progress=progress;
        this.confirmsNames=confirmsNames;
        this.imageSrc=imageSrc;
        this.outerStrokeColor=outerStrokeColor;
        this.innerStrokeColor=innerStrokeColor;
        

}
}