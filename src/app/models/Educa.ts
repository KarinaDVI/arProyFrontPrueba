export class Educa {
    id?:number;
    title:string;
    starts:number;
    ends:number;
    urlimg:string;
    school:string;
    status:string;


    constructor(title:string,starts:number,ends:number,urlimg:string,school:string,status:string){
        this.title=title;
        this.starts=starts;
        this.ends=ends;
        this.urlimg=urlimg;
        this.school=school;
        this.status=status;

    }
    
} 