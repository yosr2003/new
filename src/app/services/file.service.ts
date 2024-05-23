import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { File } from 'buffer';
import { Observable } from 'rxjs';
const baseUrl='';
@Injectable({
  providedIn: 'root'
})
export class FileService {

  constructor(private http:HttpClient) { }

  getFile():Observable<File[]>{
    return this.http.get<File[]>(`${baseUrl}`);

  }

  addFiLE(newFile: File): Observable<File> {
    return this.http.post<File>(baseUrl, newFile);

  }
  getFileById(FileId: number):Observable<File>{
    return this.http.get<File>(`${baseUrl}/${FileId}`);
  }
  updateFile(id: number, data: any): Observable<File> {
    return this.http.put<File>(baseUrl + "/" + id, data);
  }
}
