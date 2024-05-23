import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of, throwError } from 'rxjs';
import { Enseignant } from '../classes/enseignant';

@Injectable({
  providedIn: 'root'
})
export class EnseignantService {
  private baseUrl = 'http://localhost:8000'; 


  constructor(private http:HttpClient) { }

  getAllEnseiggnant():Observable<Enseignant[]>{
    return this.http.get<Enseignant[]>(`${this.baseUrl}/enseignant`);

  }
  getEnseignantByEmail(email:string):Observable<Enseignant| null>{
    let params = new HttpParams().set('email', email);
    return this.http.get<Enseignant>(`${this.baseUrl}/enseignant`, { params }).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 404) {
          return of(null);
        }
        return throwError(error);
      })
    );
  }

  addEnseignant(newEns: Enseignant): Observable<Enseignant> {
    return this.http.post<Enseignant>(`${this.baseUrl}/enseignant/new`, newEns);

  }
  getEnseignantById(EnsId: number):Observable<Enseignant>{
    return this.http.get<Enseignant>(`${this.baseUrl}/enseignant/${EnsId}`);
  }
  UpdateEnseignant(id: number, Ensei: Enseignant): Observable<Enseignant> {
    return this.http.put<Enseignant>(`${this.baseUrl}/enseignant/${id}/edit`, Ensei);
  }
  deleteEnseignant(ensId:Number):Observable<Enseignant>{
    return this.http.delete<Enseignant>(`${this.baseUrl}/${ensId}`);
  }
}

