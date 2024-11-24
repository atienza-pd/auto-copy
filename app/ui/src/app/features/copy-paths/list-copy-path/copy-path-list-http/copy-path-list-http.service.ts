import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { CopyPathDto } from '../../models';

@Injectable({
  providedIn: 'root',
})
export class CopyPathListHttpService {
  constructor(private http: HttpClient) {}

  execute(): Observable<CopyPathDto[]> {
    return this.http.get<CopyPathDto[]>(`${environment.host}/copy-path/list`);
  }
}
