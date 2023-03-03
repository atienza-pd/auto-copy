import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { CopyPathDto } from "../../../../../api/src/copy-path/copyPathDto";

@Injectable({
    providedIn: "root",
})
export class EditCopyPathHttpService {
    constructor(private http: HttpClient) {}

    execute(id: number, copyPath: CopyPathDto): Observable<any> {
        return this.http.put<any>(
            `http://localhost:3000/copy-path/edit/${id} `,
            copyPath
        );
    }
}
