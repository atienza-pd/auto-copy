import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BuildCopyPathJsonHttpService {

  constructor(private http: HttpClient) { }

  execute(): Observable<any> {
    return this.http.post<any>('http://localhost:3000/copy-path/build', {});
  }
}
