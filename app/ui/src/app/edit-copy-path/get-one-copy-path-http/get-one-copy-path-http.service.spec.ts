import { TestBed } from "@angular/core/testing";

import { GetOneCopyPathHttpService } from "./get-one-copy-path-http.service";
import { provideHttpClientTesting } from "@angular/common/http/testing";
import { provideHttpClient, withInterceptorsFromDi } from "@angular/common/http";

describe("GetOneCopyPathHttpService", () => {
    let service: GetOneCopyPathHttpService;

    beforeEach(() => {
        TestBed.configureTestingModule({ imports: [], providers: [provideHttpClient(withInterceptorsFromDi()), provideHttpClientTesting()] });
        service = TestBed.inject(GetOneCopyPathHttpService);
    });

    it("should be created", () => {
        expect(service).toBeTruthy();
    });
});
