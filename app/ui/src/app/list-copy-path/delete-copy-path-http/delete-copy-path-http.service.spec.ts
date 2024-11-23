import { TestBed } from "@angular/core/testing";

import { DeleteCopyPathHttpService } from "./delete-copy-path-http.service";
import { provideHttpClientTesting } from "@angular/common/http/testing";
import { provideHttpClient, withInterceptorsFromDi } from "@angular/common/http";

describe("DeleteCopyPathHttpService", () => {
    let service: DeleteCopyPathHttpService;

    beforeEach(() => {
        TestBed.configureTestingModule({ imports: [], providers: [provideHttpClient(withInterceptorsFromDi()), provideHttpClientTesting()] });
        service = TestBed.inject(DeleteCopyPathHttpService);
    });

    it("should be created", () => {
        expect(service).toBeTruthy();
    });
});
