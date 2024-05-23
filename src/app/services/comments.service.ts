import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Commentaire } from '../classes/Commentaire';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {
  private baseUrl = 'http://127.0.0.1:8000/';  

  constructor( private http:HttpClient) { }
  

  addComment(postId: number, newComm: Commentaire): Observable<Commentaire> {
    const url = `${this.baseUrl}posts/${postId}/comments/create/`;
    return this.http.post<Commentaire>(url,newComm);
  }






}

