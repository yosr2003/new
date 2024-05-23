import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Post } from '../classes/post';
import { User } from '../classes/user';
import { PieceJointe } from '../classes/piecesJointe';

export interface PostData {
  contenu: string;
  user: number;
  estpublie: boolean;
}

interface PieceJointeData {
  nomPiece: string;
  typePiece: string;
}
export interface PostResponse {
  message: string;
  // Add other properties if necessary
}

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private baseUrl = 'http://127.0.0.1:8000/';  

  constructor(private http: HttpClient) {}

  // Méthode pour obtenir la liste des posts
  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.baseUrl}PostsAll/`);
  }

  // Méthode pour créer un nouveau post
  createPost(post: Post): Observable<Post> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<Post>(`${this.baseUrl}Post/Create/`, post, { headers });
  }

  getUserDetails(userId: number): Observable<User> {

    if (userId !== undefined && !isNaN(userId)) {
      return this.http.get<User>(`${this.baseUrl}User/${userId}/`);
    } else {
      return throwError('Invalid userId');
    }
  }




  private apiUrl = 'http://127.0.0.1:8000/publier_post/';

  

  // publierPost(postData: { contenu: string, user: number, estpublie: boolean }): Observable<{ message: string }> {
  //   return this.http.post<{ message: string }>('http://127.0.0.1:8000/creer_post/', postData);
  // }



  publierPost(postData: PostData): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}creer_post/`, postData);
  }

  // saveFiles(formData: FormData): Observable<{ message: string, piece_jointe_ids: number[] }> {
  //   return this.http.post<{ message: string, piece_jointe_ids: number[] }>('http://127.0.0.1:8000/saveFile/', formData);
  // }


  saveFiles(postId: any, files: File[]): Observable<any> {
    const formData = new FormData();
    formData.append('post_id', postId.toString());
    for (let i = 0; i < files.length; i++) {
      console.log('iiii',i)
      formData.append('uploadedFiles', files[i] as File);
    }
    return this.http.post<any>(`${this.baseUrl}saveFile/`, formData);
  }

  
}


