import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: "root",
})
export class DeleteCopyPathHttpService {
    constructor(private http: HttpClient) {}

    execute(id: number): Observable<string> {
        return this.http.delete<any>(
            `${environment.host}/copy-path/remove/${id}`
        );
    }
}
