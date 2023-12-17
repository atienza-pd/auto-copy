import { TestBed } from "@angular/core/testing";

import { EditCopyPathHttpService } from "./edit-copy-path-http.service";
import { HttpClientTestingModule } from "@angular/common/http/testing";

describe("EditCopyPathHttpService", () => {
    let service: EditCopyPathHttpService;

    beforeEach(() => {
        TestBed.configureTestingModule({imports: [HttpClientTestingModule]});
        service = TestBed.inject(EditCopyPathHttpService);
    });

    it("should be created", () => {
        expect(service).toBeTruthy();
    });
});
