import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: "root",
})
export class DeleteCopyPathHttpService {
    constructor(private http: HttpClient) {}

    execute(id: number): Observable<string> {
        return this.http.delete<any>(
            `http://localhost:3000/copy-path/remove/${id}`
        );
    }
}
