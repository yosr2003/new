import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of, throwError } from 'rxjs';

import { User } from '../classes/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  private baseUrl = 'http://localhost:8000'; 

  constructor(private http: HttpClient) {}

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.baseUrl}/users`);
  }

  getUserByEmail(email: string): Observable<User | null> {
    let params = new HttpParams().set('email', email);
    return this.http.get<User>(`${this.baseUrl}/user/email`, { params }).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 404) {
          return of(null);
        }
        return throwError(error);
      })
    );
  }
  updateUser(user: User): Observable<User> {
    return this.http.post<User>(`${this.baseUrl}/users/${user.idUser}/edit`, user).pipe(
      catchError((error: HttpErrorResponse) => {
        return throwError(error);
      })
    );
  }
}
