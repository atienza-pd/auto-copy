import { TestBed } from "@angular/core/testing";

import { GetOneCopyPathHttpService } from "./get-one-copy-path-http.service";
import { HttpClientTestingModule } from "@angular/common/http/testing";

describe("GetOneCopyPathHttpService", () => {
    let service: GetOneCopyPathHttpService;

    beforeEach(() => {
        TestBed.configureTestingModule({imports: [HttpClientTestingModule]});
        service = TestBed.inject(GetOneCopyPathHttpService);
    });

    it("should be created", () => {
        expect(service).toBeTruthy();
    });
});
