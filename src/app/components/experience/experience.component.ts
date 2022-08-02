import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Experience } from 'src/app/models/Experience';
import { ExperienceService } from 'src/app/services/experience.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})

  export class ExperienceComponent implements OnInit {

    listExperience: Experience[]=[];
    editExpeList: Experience[]|any;

    position:string="";
    company:string="";
    starts:number=0;
    ends:number=0;
    urlimg:string="";
    mode:string="";
    roles: string[]=[];
    isAdmin = false;
      
      constructor(private expeService:ExperienceService,
                  private activatedRoute: ActivatedRoute,
                  private router: Router,
                  private tokenService: TokenService
                  ) { }
      
      //educa = new Educa("2008","#","EEMNº2 BR","finalizado");
    
      ngOnInit(): void {
        this.cargarExperience();
        this.roles = this.tokenService.getAuthorities();
        this.roles.forEach(rol => {
          if (rol === 'ROLE_ADMIN') {
            this.isAdmin = true;
          }
        });
      }
      
      cargarExperience():void{
        this.expeService.getAllExperience().subscribe((data:any[])=>{
          console.log(data);
          this.listExperience=data;
        })
        }

      getExperienceEdit(experience: Experience): void {
        //const id = this.activatedRoute.snapshot.params['id'];
        this.expeService.getExperience(experience.id!).subscribe(
          (data) => {
            this.editExpeList = data;
          });
      }
    
        borrarExperienceDeLista(experienceParaBorrar: Experience): void{
          this.listExperience= this.listExperience.filter(p => p.id !== experienceParaBorrar.id)
          this.expeService.deleteExperience(this.listExperience, experienceParaBorrar).subscribe();
          window.location.reload();
        }

        onUpdate(): void {
          //const id = this.activatedRoute.snapshot.params['id'];
          const id = this.editExpeList.id
          this.expeService.updateExperience(id, this.editExpeList).subscribe(
          );
          window.location.reload();
        }
    
        onCreate(): void {
          const newEducation = new Experience(this.position,this.company, this.starts, this.ends, 
            this.urlimg, this.mode);
      
          this.expeService.saveExperience(newEducation).subscribe(
            data => {
              alert("Experience creada");
              //this.router.navigate(['/']);
            }
          )
          window.location.reload();
        }
    
        modificarExperiencia(expeId: number) {
          this.expeService.updateExperience(expeId, this.editExpeList).subscribe();
          window.location.reload();
        }
    
    }
      
    


