import { TestBed } from "@angular/core/testing";

import { DeleteCopyPathHttpService } from "./delete-copy-path-http.service";
import { HttpClientTestingModule } from "@angular/common/http/testing";

describe("DeleteCopyPathHttpService", () => {
    let service: DeleteCopyPathHttpService;

    beforeEach(() => {
        TestBed.configureTestingModule({imports: [HttpClientTestingModule]});
        service = TestBed.inject(DeleteCopyPathHttpService);
    });

    it("should be created", () => {
        expect(service).toBeTruthy();
    });
});
