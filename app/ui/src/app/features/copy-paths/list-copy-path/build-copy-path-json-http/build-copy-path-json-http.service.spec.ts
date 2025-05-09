import { TestBed } from "@angular/core/testing";

import { BuildCopyPathJsonHttpService } from "./build-copy-path-json-http.service";
import { provideHttpClientTesting } from "@angular/common/http/testing";
import { provideHttpClient, withInterceptorsFromDi } from "@angular/common/http";

describe("BuildCopyPathJsonHttpService", () => {
    let service: BuildCopyPathJsonHttpService;

    beforeEach(() => {
        TestBed.configureTestingModule({ imports: [], providers: [provideHttpClient(withInterceptorsFromDi()), provideHttpClientTesting()] });
        service = TestBed.inject(BuildCopyPathJsonHttpService);
    });

    it("should be created", () => {
        expect(service).toBeTruthy();
    });
});
