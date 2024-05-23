import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Administrateur } from '../classes/administrateur';
const baseUrl='http://localhost:8000';
@Injectable({
  providedIn: 'root'
})
export class AdministrateurService {

  constructor(private http:HttpClient) { }
  getAdministrateur():Observable<Administrateur[]>{
    return this.http.get<Administrateur[]>(`${baseUrl}`);

  }

  addComment(newAdminis: Administrateur): Observable<Administrateur> {
    return this.http.post<Administrateur>(baseUrl, newAdminis);

  }
  getAdministrateurById(adminId: number):Observable<Administrateur>{
    return this.http.get<Administrateur>(`${baseUrl}/${adminId}`);
  }
  UpdateAdministrateur(id: number, data: any): Observable<Administrateur> {
    return this.http.put<Administrateur>(baseUrl + "/" + id, data);
  }
  deleteEnseignant( administrateurId:Number):Observable<Administrateur>{
    return this.http.delete<Administrateur>(baseUrl + "/" + administrateurId);
  }
}

