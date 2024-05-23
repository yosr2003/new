import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Classe } from '../classes/classe';
const baseUrl='http://localhost:8000';
@Injectable({
  providedIn: 'root'
})
export class ClasseService {

  constructor(private http: HttpClient) { }
  getClasse():Observable<Classe[]>{
    return this.http.get<Classe[]>(`${baseUrl}`);

  }

  addClasse(newClasse: Classe): Observable<Classe> {
    return this.http.post<Classe>(baseUrl, newClasse);

  }
  getClasseById(ClasseId: number):Observable<Classe>{
    return this.http.get<Classe>(`${baseUrl}/${ClasseId}`);
  }
  UpdateClasse(id: number, data: any): Observable<Classe> {
    return this.http.put<Classe>(baseUrl + "/" + id, data);
  }
  deleteComment(classeId:Number):Observable<Classe>{
    return this.http.delete<Classe>(baseUrl + "/" + classeId);
  }
}
