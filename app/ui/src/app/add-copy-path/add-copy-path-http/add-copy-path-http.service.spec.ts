import { TestBed } from "@angular/core/testing";

import { AddCopyPathHttpService } from "./add-copy-path-http.service";

describe("AddCopyPathHttpService", () => {
    let service: AddCopyPathHttpService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(AddCopyPathHttpService);
    });

    it("should be created", () => {
        expect(service).toBeTruthy();
    });
});
