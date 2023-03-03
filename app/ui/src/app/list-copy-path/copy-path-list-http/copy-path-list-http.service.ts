import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { CopyPathDto } from "../../../../../api/src/copy-path/copyPathDto";

@Injectable({
    providedIn: "root",
})
export class CopyPathListHttpService {
    constructor(private http: HttpClient) {}

    execute(): Observable<CopyPathDto[]> {
        return this.http.get<CopyPathDto[]>(
            "http://localhost:3000/copy-path/list"
        );
    }
}
