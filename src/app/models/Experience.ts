
export class Experience {
    id?:number;
    position:string;
    company:string;
    starts:number;
    ends:number;
    urlimg:string;
    mode:string;

    constructor(position:string,company:string, 
                starts:number, ends:number, 
                urlimg:string, mode:string){

        this.position=position;
        this.company=company;
        this.starts=starts;
        this.ends=ends;
        this.urlimg=urlimg
        this.mode=mode;

    }
    
} 
