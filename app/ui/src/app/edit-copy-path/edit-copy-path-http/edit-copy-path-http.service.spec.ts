import { TestBed } from "@angular/core/testing";

import { EditCopyPathHttpService } from "./edit-copy-path-http.service";

describe("EditCopyPathHttpService", () => {
    let service: EditCopyPathHttpService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(EditCopyPathHttpService);
    });

    it("should be created", () => {
        expect(service).toBeTruthy();
    });
});
