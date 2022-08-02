import { Component, OnInit } from '@angular/core';
import { Skill } from 'src/app/models/Skill';
import { ActivatedRoute, Router } from '@angular/router';
import { SkillServiceService } from 'src/app/services/skill-service.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  radius: number = 100;
  skillsList: Skill[] = [];
  listSkill: Skill[] | any;

  name: string = "";
  progress: number = 0;
  confirmsNames: string = "";
  imageSrc: string = "";
  outerStrokeColor: string = "";
  innerStrokeColor: string = "";
  
  roles: string[]=[];
  isAdmin = false;
  
  constructor(private skillsDataService: SkillServiceService,
              private activatedRoute: ActivatedRoute,
              private tokenService: TokenService
  ) { }

  ngOnInit(): void {

    this.cargarSkill();
    this.roles = this.tokenService.getAuthorities();
    this.roles.forEach(rol => {
      if (rol === 'ROLE_ADMIN') {
        this.isAdmin = true;
      }
    });
  }

  cargarSkill(): void {
    this.skillsDataService.getAllSkill().subscribe((data: any[]) => {
      console.log(data);
      this.skillsList = data;
    })
  }

  getSkillEdit(skill: Skill): void {
    
    this.skillsDataService.getSkill(skill.id!).subscribe(
      (data) => {
        this.listSkill = data;
      });
  }

  borrarSkillDeLista(skillParaBorrar: Skill): void {
    this.skillsList = this.skillsList.filter(p => p.id !== skillParaBorrar.id)
    this.skillsDataService.deleteSkill(this.skillsList, skillParaBorrar).subscribe();
    window.location.reload();
  }

  onUpdate(): void {
    const idj = this.listSkill.id
    this.skillsDataService.updateSkill(idj, this.listSkill).subscribe(
      
    );
    alert("skills modificado");
    window.location.reload();
  }
  onCreate():void{

    const newSkill = new Skill(this.name,this.progress,
      this.confirmsNames,this.imageSrc,this.outerStrokeColor,this.innerStrokeColor);

    this.skillsDataService.saveSkill(newSkill).subscribe(
      data => {
        alert("Skill creado");
      }
    )
    window.location.reload();
  }
  
  modificarSkill(skillId: number) {
    this.skillsDataService.updateSkill(skillId, this.listSkill).subscribe();
    window.location.reload();
  }
 

}


