import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { CopyPathDto } from "../../../../../api/src/copy-path/copyPathDto";

@Injectable({
    providedIn: "root",
})
export class AddCopyPathHttpService {
    constructor(private http: HttpClient) {}

    execute(copyPath: CopyPathDto): Observable<any> {
        return this.http.post<any>(
            `${environment.host}/copy-path/add`,
            copyPath
        );
    }
}
