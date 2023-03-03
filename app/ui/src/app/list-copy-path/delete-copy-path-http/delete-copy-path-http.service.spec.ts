import { TestBed } from "@angular/core/testing";

import { DeleteCopyPathHttpService } from "./delete-copy-path-http.service";

describe("DeleteCopyPathHttpService", () => {
    let service: DeleteCopyPathHttpService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(DeleteCopyPathHttpService);
    });

    it("should be created", () => {
        expect(service).toBeTruthy();
    });
});
