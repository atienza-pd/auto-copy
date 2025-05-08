import { TestBed } from "@angular/core/testing";

import { GetOneCopyPathDataService } from "./get-one-copy-path-data.service";
import { provideHttpClientTesting } from "@angular/common/http/testing";
import { provideHttpClient, withInterceptorsFromDi } from "@angular/common/http";

describe("GetOneCopyPathDataService", () => {
    let service: GetOneCopyPathDataService;

    beforeEach(() => {
        TestBed.configureTestingModule({ imports: [], providers: [provideHttpClient(withInterceptorsFromDi()), provideHttpClientTesting()] });
        service = TestBed.inject(GetOneCopyPathDataService);
    });

    it("should be created", () => {
        expect(service).toBeTruthy();
    });
});
