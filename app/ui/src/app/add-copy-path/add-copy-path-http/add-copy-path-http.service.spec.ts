import { TestBed } from "@angular/core/testing";

import { AddCopyPathHttpService } from "./add-copy-path-http.service";
import { HttpClientTestingModule } from "@angular/common/http/testing";

describe("AddCopyPathHttpService", () => {
    let service: AddCopyPathHttpService;

    beforeEach(() => {
        TestBed.configureTestingModule({imports: [HttpClientTestingModule]});
        service = TestBed.inject(AddCopyPathHttpService);
    });

    it("should be created", () => {
        expect(service).toBeTruthy();
    });
});
