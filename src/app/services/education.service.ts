import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { Educa } from '../models/Educa';

@Injectable({
  providedIn: 'root'
})
export class EducationService {

  educationUrl = 'https://apikbhero.herokuapp.com'

  
  constructor(private http:HttpClient) { }

  private handleError<T>(operation = 'operation', result?: T){
    return (error: any): Observable<T> => {
      console.error(error); 
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
  }
}

  getAllEducation(): Observable<Educa[]>{
    return this.http.get<Educa[]>(this.educationUrl+'/apikb/education/all').pipe(
      catchError(this.handleError<Educa[]>('getAllEducation',[]))
  );
}
  public saveEducation(newEducation:Educa):Observable<any>{
    return this.http.post<any>(this.educationUrl + '/apikb/education/',newEducation);
  }

  public getEducation(id: number):Observable<Educa> {
    return this.http.get<Educa>(this.educationUrl + `/apikb/education/one/${id}`);
  }
 
  public updateEducation(id:number, education:Educa):Observable<any>{
    return this.http.put<any>(this.educationUrl + `/apikb/education/edit/${id}`,education);
  }

  public deleteEducation(educationList: Educa[], educationParaBorrar: Educa ): Observable<Educa> {
    educationList.filter(p => p.id !== educationParaBorrar.id)
    return this.http.delete<any>(this.educationUrl + "/apikb/education/" + educationParaBorrar.id);
  }

  /* Smat
  editEducation( education:Educa|number): Observable<Educa>{
    const id = typeof education === 'number' ? education : education.id;
    return this.http.put<any>(`${this.educationUrl + '/edit'}/${id}`, education, httpOptions);
  }

  */
}


