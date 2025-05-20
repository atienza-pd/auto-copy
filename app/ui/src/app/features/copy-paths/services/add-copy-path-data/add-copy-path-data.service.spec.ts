import { TestBed } from "@angular/core/testing";

import { AddCopyPathDataService } from "./add-copy-path-data.service";
import { provideHttpClientTesting } from "@angular/common/http/testing";
import { provideHttpClient, withInterceptorsFromDi } from "@angular/common/http";

describe("AddCopyPathDataService", () => {
    let service: AddCopyPathDataService;

    beforeEach(() => {
        TestBed.configureTestingModule({ imports: [], providers: [provideHttpClient(withInterceptorsFromDi()), provideHttpClientTesting()] });
        service = TestBed.inject(AddCopyPathDataService);
    });

    it("should be created", () => {
        expect(service).toBeTruthy();
    });
});
