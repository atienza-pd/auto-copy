import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: "root",
})
export class GetOneCopyPathHttpService {
    constructor(private http: HttpClient) {}

    execute(id: number): Observable<any> {
        return this.http.get<any>(`${environment.host}/copy-path/get/${id}`);
    }
}
