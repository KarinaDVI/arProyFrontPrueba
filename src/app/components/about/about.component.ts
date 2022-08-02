import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/models/Persona';
import { AboutServiceService } from 'src/app/services/about-service.service';
import { TokenService } from 'src/app/services/token.service';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
 
  roles: string[]=[];
  isAdmin = false;

  personasList:Persona[] = [];
  personaEdit: Persona[]|any;

  nombre:string="";
  apellido:string="";
  edad:number=0;
  fechaNac:string="";
  seniority:string="";
  urlimage:string="";
  company:string="";
  position:string="";
  abouts:string="";

  constructor(public datosPersona: AboutServiceService, 
              private tokenService: TokenService) { }

  ngOnInit(): void {
    this.getAllPersons();
    this.roles = this.tokenService.getAuthorities();
    this.roles.forEach(rol => {
      if (rol === 'ROLE_ADMIN') {
        this.isAdmin = true;
      }
    });
   
  }

  getAllPersons():void{
    this.datosPersona.getAllPersons().subscribe((data:any[])=>{
      this.personasList=data;
    })
    }

    getPersonaEdit(person: Persona): void {

      this.datosPersona.getPersona(person.id!).subscribe(
        (data) => {
          this.personaEdit = data;
        });
    }

  borrarPersonaDeLista(personaParaBorrar: Persona): void{
    this.personasList= this.personasList.filter(p => p.id !== personaParaBorrar.id)
    this.datosPersona.deletePersona(this.personasList, personaParaBorrar).subscribe();
    window.location.reload();
  }
  onUpdate(): void {

    const idp = this.personaEdit.id
    this.datosPersona.updatePersona(idp, this.personaEdit).subscribe(
    );

    window.location.reload();
  }

  onCreate():void{
    const newPersona = new Persona(this.nombre,this.apellido,this.edad,this.fechaNac,this.seniority,
      this.urlimage,this.company,this.position,this.abouts);

    this.datosPersona.savePersona(newPersona).subscribe(
      data => {
        alert("About creado");
      }
    )
    window.location.reload();
  }

  modificarPersona(personaId:number){
    this.datosPersona.updatePersona(personaId, this.personaEdit).subscribe();
    window.location.reload();
  }


}

