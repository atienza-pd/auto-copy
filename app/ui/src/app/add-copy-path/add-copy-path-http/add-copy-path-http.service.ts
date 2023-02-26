import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CopyPath } from '../../../../../api/src/copy-path/copyPath';

@Injectable({
  providedIn: 'root',
})
export class AddCopyPathHttpService {
  constructor(private http: HttpClient) {}

  execute(copyPath: CopyPath): Observable<any> {
    return this.http.post<any>('http://localhost:3000/copy-path/add', copyPath);
  }
}
