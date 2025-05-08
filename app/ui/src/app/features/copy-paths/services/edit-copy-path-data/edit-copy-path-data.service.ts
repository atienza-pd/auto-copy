import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CopyPathDto } from '../../models';

@Injectable({
  providedIn: 'root',
})
export class EditCopyPathDataService {
  constructor(private http: HttpClient) {}

  execute(id: number, copyPath: CopyPathDto): Observable<any> {
    return this.http.put<any>(
      `${environment.host}/copy-path/edit/${id} `,
      copyPath
    );
  }
}
