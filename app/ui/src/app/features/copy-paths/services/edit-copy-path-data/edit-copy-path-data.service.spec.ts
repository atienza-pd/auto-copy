import { TestBed } from "@angular/core/testing";

import { EditCopyPathDataService } from "./edit-copy-path-data.service";
import { provideHttpClientTesting } from "@angular/common/http/testing";
import { provideHttpClient, withInterceptorsFromDi } from "@angular/common/http";

describe("EditCopyPathDataService", () => {
    let service: EditCopyPathDataService;

    beforeEach(() => {
        TestBed.configureTestingModule({ imports: [], providers: [provideHttpClient(withInterceptorsFromDi()), provideHttpClientTesting()] });
        service = TestBed.inject(EditCopyPathDataService);
    });

    it("should be created", () => {
        expect(service).toBeTruthy();
    });
});
