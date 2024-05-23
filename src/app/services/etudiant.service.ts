import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of, throwError } from 'rxjs';
import { Etudiant } from '../classes/etudiant';
@Injectable({
  providedIn: 'root'
})
export class EtudiantService {

  constructor(private http:HttpClient) { }
  private baseUrl ='http://localhost:8000';

  getEtudiant():Observable<Etudiant[]>{
    return this.http.get<Etudiant[]>(`${this.baseUrl}/etudiant`);
  }
  getEtudiantByEmail(email:string):Observable<Etudiant| null>{
    let params = new HttpParams().set('email', email);
    return this.http.get<Etudiant>(`${this.baseUrl}/etudiant`, { params }).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 404) {
          return of(null);
        }
        return throwError(error);
      })
    );
  }
  addEtudiant(newEtud: Etudiant): Observable<Etudiant> {
    return this.http.post<Etudiant>(`${this.baseUrl}/etudiant/new`, newEtud);
  }
  getEtudiantById(etudiantID: number):Observable<Etudiant>{
    return this.http.get<Etudiant>(`${this.baseUrl}/etudiant/${etudiantID}`);
  }
  UpdateEtudiant(id: number, etudiant: Etudiant): Observable<Etudiant> {
    return this.http.put<Etudiant>(`${this.baseUrl}/enseignant/${id}/edit`, etudiant);
  }
  deleteEtudiant(idEtud:Number):Observable<Etudiant>{
    return this.http.delete<Etudiant>(`${this.baseUrl}/${idEtud}`);
  }
  
}
