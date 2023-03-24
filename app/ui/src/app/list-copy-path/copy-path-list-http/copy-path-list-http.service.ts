import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { CopyPathDto } from "../../../../../api/src/copy-path/copyPathDto";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: "root",
})
export class CopyPathListHttpService {
    constructor(private http: HttpClient) {}

    execute(): Observable<CopyPathDto[]> {
        return this.http.get<CopyPathDto[]>(
            `${environment.host}/copy-path/list`
        );
    }
}
