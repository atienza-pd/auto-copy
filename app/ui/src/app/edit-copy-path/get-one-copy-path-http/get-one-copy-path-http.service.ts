import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetOneCopyPathHttpService {

  constructor(private http: HttpClient) {}

  execute(id: number): Observable<any> {
    return this.http.get<any>(`http://localhost:3000/copy-path/get/${id}`);
  }
}
