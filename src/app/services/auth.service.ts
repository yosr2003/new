import { Injectable } from '@angular/core';
import { UserService } from './user.service';
import { Router } from '@angular/router';
import { User } from '../classes/user';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private usersUrl = 'http://localhost:3000/users';
  private usersUrl2 = 'http://localhost:8000/';

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<boolean> {
      return this.http.get<any[]>(`${this.usersUrl}?email=${email}&password=${password}`)
          .pipe(
              map(users => {
                  if (users.length > 0) {
                      localStorage.setItem('currentUser', JSON.stringify(users[0]));
                      return true;
                  } else {
                      return false;
                  }
              })
          );
  }

  logout(): void {
      localStorage.removeItem('currentUser');
  }

  isLoggedIn(): boolean {
      return localStorage.getItem('currentUser') !== null;
  }

  

isAuthenticated(): boolean {
    return localStorage.getItem('currentUser') !== null;
}

getCurrentUser() {
    return JSON.parse(localStorage.getItem('currentUser') || '{}');
}

getCurrentUserId(): number | null {
  const currentUser = this.getCurrentUser();
  return currentUser.id || null;
}

getUserDetails(userId: number): Observable<User> {
    return this.http.get<User>(`${this.usersUrl2}/User/${userId}/`);
  }
  

}

  