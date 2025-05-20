import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CopyPathDto } from '../../models';

@Injectable({
  providedIn: 'root',
})
export class AddCopyPathDataService {
  constructor(private http: HttpClient) {}

  execute(copyPath: CopyPathDto): Observable<any> {
    return this.http.post<any>(`${environment.host}/copy-path/add`, copyPath);
  }
}
