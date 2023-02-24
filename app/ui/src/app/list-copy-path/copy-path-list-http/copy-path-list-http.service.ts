import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CopyPathListHttpService {

  constructor(private http: HttpClient) { }

  execute(): Observable<any> {
    return this.http.get<any>(
      'http://localhost:3000/copy-path/list'
    );
  }
}
