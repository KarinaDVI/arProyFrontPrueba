import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { Project } from '../models/Project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  projectUrl = 'https://apikbhero.herokuapp.com'

  constructor(private http:HttpClient) { }

  private handleError<T>(operation = 'operation', result?: T){
    return (error: any): Observable<T> => {
      console.error(error); 
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
  }
}

  getAllProject(): Observable<Project[]>{
    return this.http.get<Project[]>(this.projectUrl+'/apikb/project/all').pipe(
      catchError(this.handleError<Project[]>('getAllProject',[]))
  );
}
  public saveProject(newProject:Project):Observable<any>{
    return this.http.post<any>(this.projectUrl + '/apikb/project/',newProject);
  }

  public getProject(id: number):Observable<Project> {
    return this.http.get<Project>(this.projectUrl + `/apikb/project/one/${id}`);
  }
 
  public updateProject(id:any|number, project:Project):Observable<any>{
    return this.http.put<any>(this.projectUrl + `/apikb/project/edit/${id}`,project);
  }

  public deleteProject(projectList: Project[], projectParaBorrar: Project ): 
  Observable<Project> {projectList.filter(p => p.id !== projectParaBorrar.id)
    return this.http.delete<any>(this.projectUrl + "/apikb/project/" + projectParaBorrar.id);
  }

  
}
